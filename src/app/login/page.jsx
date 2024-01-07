'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import  toast  from 'react-hot-toast';


const Login = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(false);
        const [user, setUser] = useState({
           
            email: '',
            password: '',
        });
        
        const onLogin = async (e) => {
            e.preventDefault();
            try {
                setLoading(true);
                await axios.post('/api/auth/login', user);
                toast.success("Login success");
                router.push('/')
                
            } catch (error) {
                console.log(error);
                toast.error('Login or password incorrect');
            } finally {
                setLoading(false);
            }
        }
    return (
        <div className=" min-w-[300px] mx-auto">
            <div className="text-center text-4xl text-primary font-semibold italic">
                <h1>{loading ? 'Loading...':'Login'}</h1>
            </div>
            <form className="flex flex-col gap-4 my-8">
                <input
                    type="email"
                    placeholder="Email"
                    className="border border-gray-300 hover:border-primary transition-all duration-200 rounded-lg bg-gray-100 p-2 outline-none"
                value={user.email}
                onChange={(e)=>setUser({...user, email: e.target.value})}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="border border-gray-300 hover:border-primary transition-all duration-200 rounded-lg bg-gray-100 p-2 outline-none"
                 value={user.password}
                onChange={(e)=>setUser({...user, password: e.target.value})}
                />
                <button
                    onClick={onLogin}
                    className="text-white font-semibold rounded-lg p-2 hover:bg-gray-500 bg-primary transition-all duration-200">
                    Login
                </button>
                <span className="text-center text-gray-500 italic">or with</span>
                <button className="flex items-center gap-4 justify-center text-white font-semibold rounded-lg p-2 bg-gray-500 hover:bg-primary transition-all duration-200">
                    <Image src={'/google-ico.png'} alt="google" width={26} height={26} />
                    <span>Google</span>
                </button>
                <button className="text-white flex items-center gap-4 justify-center font-semibold rounded-lg p-2 bg-gray-500 hover:bg-primary transition-all duration-200">
                    <Image src={'/github.png'} alt="github" width={25} height={25} />
                    <span>Git Hub</span>
                </button>
                <div className="text-gray-700 text-center">
                    Don't have an account yet?&nbsp;
                    <Link href={'/register'} className="text-blue-700 hover:text-primary">
                        Register
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
