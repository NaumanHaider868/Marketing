import React from 'react';
import Img from '../assets/images/10039.png'
import Img2 from '../assets/images/10040.png'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <footer className="text-gray-300 py-8 footer bg-[#212322]">
            <div className="max-w-[1043px] mx-auto px-4">
                <div className="flex justify-center mb-6">
                    <div className="flex items-center">
                        <img
                            src={Img}
                            alt="Marketi-verse Logo"
                            className="h-8"
                        />
                    </div>
                </div>

                <div className="flex justify-center mb-9"><img src={Img2} /></div>

                <div className="flex justify-center space-x-6 mb-10">
                    <a href="#" className="hover:text-white transition-colors">
                        <FaFacebookF size={24} />
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                        <FaInstagram size={24} />
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                        <FaTwitter size={24} />
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                        <FaLinkedinIn size={24} />
                    </a>
                </div>

                <div className="text-center items-center mb-6 text-white flex justify-between">
                    <div></div>
                    <p className="text-sm">
                        <span>Opening Hours</span>
                        <span className="mx-2">|</span>
                        <span>Sunday - Friday</span>
                        <span className="mx-2">|</span>
                        <span>08:00 AM - 05:00 PM</span>
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="bg-[#E23D5B] text-white py-3 px-4 rounded-[10px]"
                    >
                        <MdOutlineKeyboardDoubleArrowUp />
                    </button>
                </div>
                <div className='footer-line mb-6'></div>
                <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                    <p className="mb-2 md:mb-0">
                        Copyright © {currentYear} Marketi-Verse By Evonicmedia. All Rights Reserved.
                    </p>
                    <p>
                        Powered By Evonicsoft
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;