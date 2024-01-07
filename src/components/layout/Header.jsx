'use client'
import Link from 'next/link';
import NavMenu from '../NavMenu';
import {useSession} from 'next-auth/react'
const Header = () => {
    const session = useSession();
    return (
        <header className="container flex justify-between items-center px-[20px] pt-4">
            <Link href="/" className=" text-primary font-bold text-2xl uppercase">
                ST PIZZA
            </Link>
            <nav className=" flex gap-[70px] text-gray-500 font-semibold items-center capitalize">
                <NavMenu />
                <div className="flex items-center gap-4">
                    {!session ? 
                        <Link
                            href="/api/auth/logout"
                            className=" bg-primary py-2 px-8 rounded-full text-white hover:bg-gray-500 transition-all duration-200">
                            Logout
                        </Link>
                     : 
                        <>
                            <Link
                                href="/register"
                                className=" hover:text-primary rounded-full text-gray-500 transition-all duration-200">
                                Register
                            </Link>
                            <Link
                                href="/login"
                                className=" bg-primary py-2 px-8 rounded-full text-white hover:bg-gray-500 transition-all duration-200">
                                Login
                            </Link>
                        </>
                    }
                </div>
            </nav>
        </header>
    );
};

export default Header;
