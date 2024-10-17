import React from 'react';
import img from '../assets/images/10017.jpg';
import img1 from '../assets/images/10018.png';
import img2 from '../assets/images/10019.png';
import img3 from '../assets/images/10020.png';
import img4 from '../assets/images/10021.png';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Services() {
    const services = [
        { title: "Email Marketing", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, maxime!", img: img1 },
        { title: "Social Media", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, maxime!", img: img2 },
        { title: "Website Design", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, maxime!", img: img3 },
        { title: "Digital Marketing", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, maxime!", img: img4 }
    ];

    return (
        <div className='flex flex-col items-center px-28 pt-[90px] pb-[90px] bg-white offers gap-[90px]'>
            <div className="flex items-center gap-10">
                <img src={img} className='rounded-[20px]' alt="service banner" />
                <div className='offer'>
                    <h1 className='text-[65px] leading-none font-bold'>We Offer The Best Services</h1>
                    <p className='text-[#8F8587] mt-5'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quidem excepturi temporibus ut hic quod repudiandae accusantium. Doloremque, sunt sequi?
                    </p>
                    <button className='btn text-white bg-[#212322] btn-action'>Get Started</button>
                </div>
            </div>

            <div className='flex gap-6'>
                {services.map((service, i) => (
                    <div key={i} className="bg-[#FFF7E2] p-6 rounded-xl shadow-md w-[290px] h-[276px] flex flex-col">
                        <div className='w-[64px] h-[64px] mb-4'>
                            <img src={service.img} alt="service icon" />
                        </div>
                        <span className="mb-2 text-xl font-semibold">{service.title}</span>
                        <p className="mb-[16px] text-[#786450] font-medium">
                            {service.description}
                        </p>
                        <div className='flex items-center'>
                            <MdOutlineKeyboardArrowRight className='text-2xl' />
                            <a href="#" className="text-black hover:underline font-medium">Get Started</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}