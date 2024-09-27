import { NextRequest, NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../(sites)/lib/models/mongodb';
import bcrypt from 'bcryptjs';
import User  from '../../../(sites)/lib/models/users';

const url = 'mongodb+srv://lakshmithanuja694:muoAzPY1veUsdO5u@cluster0.0s4lo.mongodb.net/project';

connectToDatabase(url).then(() => console.log("MongoDB Successfully Connected!"));

export const POST = async (req: NextRequest, res: NextApiResponse) => {
    try {
        const body = await req.json();
        const email = body.email;
        const password = body.password;

        if (!email || !password) {
            return res.status(422).json({ message: 'Invalid input' });
        }

        await connectToDatabase();

        const existing = await User.findOne({ email }); // here i'm checking if that email exists

        if (existing) {
            return res.status(422).json({ message: 'User exists already!' });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new User({
            email,
            password: hashedPassword,
        });

        await newUser.save(); // if the user is new ...save karke

        return res.status(201).json({ message: 'User created successfully!' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};
