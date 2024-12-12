import React from 'react';

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

const Navbar: React.FC = () => {
    return (
        <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
        <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold hidden md:inline">Yousof</div>
            <div className="space-x-6">
    <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About Me</NavLink>
    <NavLink href="#service">Services</NavLink>
        <NavLink href="#project">Projects</NavLink>
        <NavLink href="#contact">Contact</NavLink>
        </div>
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
        Connect Me
    </button>
    </div>
    </nav>
);
};

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
    return (
        <a href={href} className="hover:text-gray-400">
        {children}
        </a>
);
};

export default Navbar;