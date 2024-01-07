'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast'
import axios from 'axios'


export default function Register(){
	const router = useRouter();
	const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({
		username: '',
		email: '',
		password: ''
	});
   
	const onRegister = async (e) =>{
        e.preventDefault();
		try {
			setLoading(true)
			await axios.post('/api/auth/register', user);
			toast.success('Successful registration');
			router.push('/login');
			
		} catch (error) {
            console.log(error)
			toast.error('Something went wrong.');
		} finally {
			setLoading(false)
		}
	}
    return (
        <div className=" min-w-[300px] mx-auto">
            <div className="text-center text-4xl text-primary font-semibold italic">
                <h1>{loading ? 'Loading...' : 'Register'}</h1>
            </div>
            <form className="flex flex-col gap-4 my-8" >
                <input
                    type="text"
                    placeholder="Username"
                    className="border border-gray-300 hover:border-primary transition-all duration-200 rounded-lg bg-gray-100 p-2 outline-none"
                    value={user.username}
                    onChange={(e) => setUser({...user,username: e.target.value})}
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="border border-gray-300 hover:border-primary transition-all duration-200 rounded-lg bg-gray-100 p-2 outline-none"
                    value={user.email}
                    onChange={(e) => setUser({...user, email: e.target.value})}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="border border-gray-300 hover:border-primary transition-all duration-200 rounded-lg bg-gray-100 p-2 outline-none"
                    value={user.password}
                    onChange={(e) => setUser({...user, password: e.target.value})}
                />
                <button
				onClick={onRegister}
                    
                    className="text-white font-semibold rounded-lg p-2 hover:bg-gray-500 bg-primary transition-all duration-200">
                    Register
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
                    Have an account?&nbsp;
                    <Link href={'/login'} className="text-blue-700 hover:text-primary">
                        Login
                    </Link>
                </div>
            </form>
        </div>
    );
};

