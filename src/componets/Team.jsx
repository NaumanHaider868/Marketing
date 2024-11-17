import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Img1 from '../assets/images/10028.jpg';
import Img2 from '../assets/images/10029.jpg';
import Img3 from '../assets/images/10030.jpg';
import Img4 from '../assets/images/10031.jpg';

const TeamMember = ({ defaultImg, hoverImg, name, role }) => {
    const [currentImg, setCurrentImg] = useState(defaultImg);

    return (
        <div
            className="w-[300px] h-[300px] flex flex-col items-center justify-center">
            <img src={currentImg} alt={name} className="rounded-full object-cover mb-4 cursor-pointer"
                onMouseEnter={() => setCurrentImg(hoverImg)}
                onMouseLeave={() => setCurrentImg(defaultImg)}
            />
            <h2 className="text-[26px] font-bold text-[#E6B938]">{name}</h2>
            <p className="mb-3">{role}</p>
            <div className="flex space-x-3">
                <a href="#" className="border border-solid rounded-full p-[7px]">
                    <FaFacebookF className='text-[#E6B938]' />
                </a>
                <a href="#" className="border border-solid rounded-full p-[7px]">
                    <FaTwitter className='text-[#E6B938]' />
                </a>
                <a href="#" className="border border-solid rounded-full p-[7px]">
                    <FaInstagram className='text-[#E6B938]' />
                </a>
            </div>
        </div>
    );
};

export default function Team() {
    return (
        <div className="flex items-center px-28 pt-[90px] pb-[90px] bg-[#212322] text-white">
            <div className="md:w-1/2 px-6 text-center md:text-left">
                <h1 className="text-5xl font-bold mb-4">Meet Our Professionals</h1>
                <p className="text-gray-400 mb-6">
                    Lorem ipsum dolor sit amet consectetur. In nulla nunc arcu velit consectetur massa
                    mauris molestie hac. Hac arcu amet nullam pellentesque. Urna eu suspendisse felis sodales sit non.
                </p>
                <button className="bg-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-pink-600 transition">
                    Meet With Us
                </button>
            </div>

            <div className="md:w-1/2 flex justify-center md:justify-around mt-8 md:mt-0 space-x-6">
                <TeamMember defaultImg={Img1} hoverImg={Img2} name="Sophia Emma" role="Content Manager" />
                <TeamMember defaultImg={Img3} hoverImg={Img4} name="David Henry" role="Designer" />
            </div>
        </div>
    );
}