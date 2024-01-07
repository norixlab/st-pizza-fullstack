import { connect } from '@/config/db';
import UserModel from '@/app/models/User';
import { NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(req) {
    try {
        await connect();

        const { email, password } = await req.json();

        const user = await UserModel.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        const isValidPass = await bcryptjs.compare(password, user.password);
        if (!isValidPass) {
            return NextResponse.json({ error: 'Login or password incorrect' }, { status: 400 });
        }

        const token = jwt.sign(
            {
                _id: user._id,
            },
            process.env.TOKEN_SECRET,
            {
                expiresIn: '1d',
            },
        );

        const response = NextResponse.json({
            message: 'Login successful',
            success: true,
        });
        response.cookies.set('token', token, { httpOnly: true });

        return response;
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
