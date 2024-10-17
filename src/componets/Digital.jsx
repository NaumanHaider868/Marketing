import React from 'react';
import r1 from '../assets/images/10007.png';
import r2 from '../assets/images/10010.png';
import r3 from '../assets/images/10014.png';
import r4 from '../assets/images/10012.png';
import r5 from '../assets/images/10007.png';

const services = [
    { title: "Search Engine Optimization", icon: "search-icon" },
    { title: "Marketing & Advertisement", icon: "marketing-icon" },
    { title: "Reporting & Analysis", icon: "reporting-icon" },
];

const digitalImages = [r1, r2, r3, r4, r5];

export default function Digital() {
    return (
        <div className='flex flex-col items-center px-28 bg-[#2B2D2C] pt-[90px] pb-[90px] gap-[90px]'>
            <div className='flex flex-col relative'>
                <div className='flex'>
                    <div className='relative w-[60%]'>
                        <div className='digital-bg-yellow w-[600px] h-[600px]'>
                            <div className="bg-yellow flex justify-center">
                                <h2 className='text-left text-[37px] text-black pt-28 leading-[41px] font-extrabold'>
                                    The Right Digital<br />Partner For Success
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className='digital flex flex-col'>
                        <div className='text-white mt-28 h-fit ml-16'>
                            <p className='text-sm'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis reprehenderit reiciendis maxime odit quasi impedit minus rerum id ullam explicabo voluptatum quos veritatis quae nihil error aut officia, lur?
                            </p>
                        </div>

                        <div className='mt-5 flex gap-[4.7rem] absolute top-[50%] left-[11%]'>
                            {services.map((service, i) => (
                                <div key={i} className='bg-[#FFF7E2] w-[250px] h-[210px] rounded-3xl flex justify-center flex-col p-4'>
                                    <div className='flex flex-col items-start justify-center'>
                                        <i className={service.icon}></i>
                                        <span className='ml-2 mt-3'>{service.title}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex gap-[10px] r-digitials'>
                {digitalImages.map((image, i) => (
                    <div key={i} className='r-digital'>
                        <img src={image} alt={`digital ${i + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}
