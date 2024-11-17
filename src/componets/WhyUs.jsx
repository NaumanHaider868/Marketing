import React from 'react'
import img from '../assets/images/10022.png'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function WhyUs() {
    return (
        <div className='flex flex-col items-center px-28 pt-[90px] pb-[90px] bg-[#0F1312] text-white'>
            <div className='flex justify-between w-full max-w-7xl'>
                <div className='flex flex-col flex-1'>
                    <div className='flex flex-col'>
                        <h1 className='text-[45px] leading-[50px] font-bold'>Crafting Experiences, Delivering Success.</h1>
                        <p className='mt-6 max-w-md'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, sed quibusdam iure debitis nesciunt perspiciatis placeat optio vero ea rerum neque voluptatem pariatur?
                        </p>
                    </div>
                    <div className='mt-9 flex flex-col gap-[30px]'>
                        <div className='flex items-center gap-5'>
                            <span className='bg-[#E6B938] w-[50px] h-[50px] text-black text-[34px] rounded-full text-center font-bold'>1</span>
                            <div>
                                <span className='text-[20px]'>Quality Assurance</span>
                                <p className='max-w-[25rem]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, suscipit!</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <span className='bg-[#E6B938] w-[50px] h-[50px] text-black text-[34px] rounded-full text-center font-bold'>2</span>
                            <div>
                                <span className='text-[20px]'>Certified Professionals</span>
                                <p className='max-w-[25rem]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, suscipit!</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <span className='bg-[#E6B938] w-[50px] h-[50px] text-black text-[34px] rounded-full text-center font-bold'>3</span>
                            <div>
                                <span className='text-[20px]'>Real Experiences</span>
                                <p className='max-w-[25rem]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, suscipit!</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center mt-10 gap-10'>
                        <button className='btn text-white bg-[#E23D5B] get-started'>Get Started</button>
                        <span className='flex items-center'>Learn More <MdOutlineKeyboardArrowRight className='text-2xl' /></span>
                    </div>
                </div>
                <div className='flex justify-center items-center w-[555px] h-[555px] bg-[#E6B938] rounded-full relative'>
                    <img src={img} className='' />
                    {/* <h1>Why Chose Us</h1> */}
                </div>
            </div>
        </div>
    )
}
