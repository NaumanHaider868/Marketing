import React from 'react'
import img from '../assets/images/10017.jpg'

export default function Services() {
    return (
        <div className='flex flex-col items-center px-28 pt-[90px] pb-[90px] bg-white offers'>
            <div className="flex items-center gap-10">
                <img src={img} className='rounded-[20px]' />
                <div className='offer'>
                    <h1 className='text-[65px] leading-none font-bold'>We Offer The Best Services</h1>
                    <p className='text-[#8F8587] mt-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quidem excepturi temporibus ut hic quod repudiandae accusantium. Doloremque, sunt sequi?</p>
                    <button className='btn text-white bg-[#212322] btn-action'>Get Started</button>
                </div>
            </div>
        </div>
    )
}
