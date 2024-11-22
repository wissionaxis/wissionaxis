import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from '../../(sites)/lib/models/mongodb';
import bcrypt from 'bcryptjs';
import User from '../../(sites)/lib/models/users';
import redis from "@/app/(sites)/lib/models/redisdb";

const url = 'mongodb+srv://lakshmithanuja694:muoAzPY1veUsdO5u@cluster0.0s4lo.mongodb.net/project';

const redisUser = async (email: string) => {
    const result = await redis.get(`user:${email}`);
    if (result) return false;
    else false;
}

export const POST = async (req: NextRequest) => {
    try {
        const body = await req.json();
        const email = body.email;
        const password = body.password;

        if (!email || !password) {
            return NextResponse.json({ message: 'Invalid input' }, { status: 400 });
        }

        await connectToDatabase(url);

        const checkInRedis = await redisUser(email);

        if (checkInRedis) {
            return NextResponse.json({ message: "User already exist" });
        }

        const existing = await User.findOne({ email });

        if (existing) {
            await redis.set(`user:${email}`, existing._id.toString());
            return NextResponse.json({ message: 'User exists already!' }, { status: 409 });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new User({
            email,
            password: hashedPassword,
        });

        await newUser.save();

        await redis.set(`user:${email}`, newUser._id.toString());

        return NextResponse.json({ message: 'User created successfully!' }, { status: 201 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
    }
};
