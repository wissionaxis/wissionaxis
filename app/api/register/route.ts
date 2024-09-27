import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from '../../(sites)/lib/models/mongodb';
import bcrypt from 'bcryptjs';
import User  from '../../(sites)/lib/models/users';
import { Meie_Script } from "next/font/google";
import { MdOutlineKayaking } from "react-icons/md";

const url = 'mongodb+srv://lakshmithanuja694:muoAzPY1veUsdO5u@cluster0.0s4lo.mongodb.net/project';

connectToDatabase(url).then(() => console.log("MongoDB Successfully Connected!"));

export const POST = async (req: NextRequest) => {
    try {
        const body = await req.json();
        const email = body.email;
        const password = body.password;

        if (!email || !password) {
            return NextResponse.json({ message: 'Invalid input' });
        }

        await connectToDatabase();

        const existing = await User.findOne({ email }); // here i'm checking if that email exists

        if (existing) {
            return NextResponse.json({ message: 'User exists already!' });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new User({
            email,
            password: hashedPassword,
        });

        await newUser.save(); // if the user is new ...save karke

        return NextResponse.json({ message: 'User created successfully!' });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Something went wrong' });
    }
};
