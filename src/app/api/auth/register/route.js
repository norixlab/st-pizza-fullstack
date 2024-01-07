import { connect } from '@/config/db';
import UserModel from '@/app/models/User';
import { NextResponse} from 'next/server';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken'


export async function POST(req){
  try {
    await connect()
    const {username, email, password} = await req.json();

    const user = await UserModel.findOne({email});

    if(user){
      
      return NextResponse.json({error: 'User already exists'}, {status: 400})
    }
    
  
    const salt = await bcryptjs.genSalt(10);
    const hash = await bcryptjs.hash(password, salt);

    const doc = new UserModel({
      username,
      email,
      password: hash
    })
    const newUser = await doc.save();

    const token = jwt.sign(
        {
            _id: newUser._id,
        },
        process.env.TOKEN_SECRET,
        {
          expiresIn: '30d'
        }
    );
    // const {passwordHash, ...userData} = newUser._doc
    return NextResponse.json(
        {
            message: 'User is created',
            success: true,
            newUser,
            token
        },
        { status: 201 },
    );
  } catch (error) {
     return NextResponse.json({error: error.message},{status: 500})
  }
}





