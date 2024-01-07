'use client'
import { links } from './data/navLinks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const NavMenu = () => {
	const pathName = usePathname();
    return (
        <div className='flex items-center gap-6'>
            {links.map((link) => (
                <Link
                    key={link.path}
                    href={link.path}
                    className={`${pathName === link.path ? 'active' : ''} hover:text-primary transition-all duration-200`}>
                    {link.title}
                </Link>
            ))}
        </div>
    );
};

export default NavMenu;
