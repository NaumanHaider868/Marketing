import React from 'react';
import logo from '../assets/images/10040.png'

const Navbar = () => {
    return (
        <nav className="bg-black text-white py-4 sticky top-0 px-28 z-10">
            <div className="mx-auto flex items-center justify-end">
                <div className="flex items-center space-x-2 cursor-pointer w-full">
                    <div className="w-[165px]">
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className='flex w-full justify-between items-center'>
                    <div className="hidden md:flex space-x-8 mr-5">
                        <a href="#feature" className="hover:text-yellow-400">
                            Feature
                        </a>
                        <a href="#clients" className="hover:text-yellow-400">
                            Clients
                        </a>
                        <a href="#portfolio" className="hover:text-yellow-400">
                            Portfolio
                        </a>
                        <a href="#cta" className="hover:text-yellow-400">
                            CTA
                        </a>
                        <div className="relative group">
                            <button className="hover:text-yellow-400">Pages</button>
                            <div className="absolute hidden group-hover:block bg-black shadow-lg">
                                <a href="#page1" className="block hover:bg-gray-700">Page 1</a>
                                <a href="#page2" className="block hover:bg-gray-700">Page 2</a>
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#E23D5B] p-2 text-white cursor-pointer w-max'>
                        <a className="">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
