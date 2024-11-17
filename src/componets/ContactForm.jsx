import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const ContactForm = () => {
    return (
        <div className="flex items-center justify-between bg-white text-black p-[49px] rounded-[30px] mx-auto mt-[80px] max-w-5xl">
            <div className="w-full space-y-4">
                <h1 className="text-[40px] font-extrabold text-black">Let's Talk</h1>
                <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur. In nulla nunc arcu velit consectetur massa mauris molestie hac.
                </p>
                <div className="space-y-2">
                    <div className="flex items-center gap-8">
                        <span className="text-[#E8B93B] text-[27px] border border-[#E8B93B] p-2 rounded-full"><FaHome /></span>
                        <p className="text-gray-500"><span className='text-[22px] text-[#E8B93B] font-medium'>Company Name</span><br />Plaza XYZ Street, XYZ City, XYZ</p>
                    </div>
                    <div className="flex items-center gap-8">
                        <span className="text-[#E8B93B] text-[27px] border border-[#E8B93B] p-2 rounded-full"><MdOutlineEmail /></span>
                        <p className="text-gray-500"><span className='text-[22px] text-[#E8B93B] font-medium'>Email Address</span><br />yourname@email.com</p>
                    </div>
                    <div className="flex items-center gap-8">
                        <span className="text-[#E8B93B] text-[18px] w-[45px] h-[45px] flex items-center justify-center border border-[#E8B93B] p-2 rounded-full"><FaPhoneAlt /></span>
                        <p className="text-gray-500"><span className='text-[22px] text-[#E8B93B] font-medium'>Phone Number</span><br />123-4567-890</p>
                    </div>
                </div>
            </div>

            <form className="w-full space-y-4">
                <div className="grid grid-cols-2 gap-8">
                    <input
                        type="text"
                        placeholder="First name"
                        className="border border-[#ECDEB7] rounded-lg p-2 pl-4"
                    />
                    <input
                        type="text"
                        placeholder="Last name"
                        className="border border-[#ECDEB7] rounded-lg p-2 pl-4"
                    />
                </div>
                <input
                    type="text"
                    placeholder="Phone Number"
                    className="border border-[#ECDEB7] rounded-lg p-2 pl-4 w-full"
                />
                <textarea
                    placeholder="Type Message"
                    className="border border-[#ECDEB7] rounded-lg p-2 pl-4 w-full h-24 resize-none"
                ></textarea>
                <button className="bg-[#E23D5B] text-white py-2 px-4">
                    Contact Now
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
