import React from 'react'
import { TiTick } from "react-icons/ti";

export default function Pricing() {
    return (
        <div className='flex flex-col items-center px-28 pt-[90px] pb-[90px] bg-white text-black'>
            <div className='head text-center'>
                <h1 className='text-[58px] font-extrabold'>Pricing Plan</h1>
                <p className='max-w-[43rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quam, debitis obcaecati error ratione amet accusamus possimus</p>
            </div>
            <div className='flex mt-[45px] gap-9'>
                <div className='bg-[#FFF7E2] flex mt-[30px] w-[345px] h-[490px] rounded-[35px] package'>
                    <div className='flex w-fill-available'>
                        <div>
                            <div className='name'><p>Special</p></div>
                        </div>
                        <div className='flex flex-col w-fill-available px-3 pb-[30px]'>
                            <div className='head'>
                                <div className='flex flex-col'>
                                    <h1 className='text-[40px] font-black'>$350</h1>
                                    <span className='text-[20px] font-medium'>Per Month</span>
                                </div>
                            </div>
                            <div className="detail">
                                <span className='text-[22px] font-medium'>Details:</span>
                                <div className='mt-3'>
                                    <ul>
                                        <li className='flex items-center py-[5px]'><span><TiTick /></span> Consulted by an expert</li>
                                        <li className='flex items-center py-[5px]'><span><TiTick /></span> Provide the optional treatment plan</li>
                                        <li className='flex items-center py-[5px]'><span><TiTick /></span> In-house consultation services</li>
                                        <li className='flex items-center py-[5px]'><span><TiTick /></span> Evaluation of physiotherapy</li>
                                        <li className='flex items-center py-[5px]'><span><TiTick /></span> Consulted by an expert</li>
                                    </ul>
                                </div>
                            </div>
                            <button className='btn-started'>Get Started</button>
                        </div>
                    </div>
                </div>

                <div className='bg-[#212322] text-white flex w-[345px] h-[540px] rounded-[35px] package'>
                    <div className='flex w-fill-available'>
                        <div>
                            <div className='name'><p>Special</p></div>
                        </div>
                        <div className='flex flex-col w-fill-available px-3 pb-[30px]'>
                            <div className='head'>
                                <div className='flex flex-col'>
                                    <h1 className='text-[40px] font-black'>$450</h1>
                                    <span className='text-[20px] font-medium'>Per Month</span>
                                </div>
                            </div>
                            <div className="detail">
                                <span className='text-[22px] font-medium'>Details:</span>
                                <div className='mt-3'>
                                    <ul>
                                        <li className='flex items-center py-[5px]'><span><TiTick /></span> Consulted by an expert</li>
                                        <li className='flex items-center py-[5px]'><span><TiTick /></span> Provide the optional treatment plan</li>
                                        <li className='flex items-center py-[5px]'><span><TiTick /></span> In-house consultation services</li>
                                        <li className='flex items-center py-[5px]'><span><TiTick /></span> Evaluation of physiotherapy</li>
                                        <li className='flex items-center py-[5px]'><span><TiTick /></span> Consulted by an expert</li>
                                        <li className='flex items-center py-[5px]'><span><TiTick /></span> In-house consultation services</li>
                                    </ul>
                                </div>
                            </div>
                            <button className='btn-started !border-[#e7b938] !text-[#e7b938]'>Get Started</button>
                        </div>
                    </div>
                </div>

                <div className='bg-[#FFF7E2] mt-[30px] flex w-[345px] h-[490px] rounded-[35px] package'>
                    <div className='flex w-fill-available'>
                        <div>
                            <div className='name'><p>Special</p></div>
                        </div>
                        <div className='flex flex-col w-fill-available px-3 pb-[30px]'>
                            <div className='head'>
                                <div className='flex flex-col'>
                                    <h1 className='text-[40px] font-black'>$400</h1>
                                    <span className='text-[20px] font-medium'>Per Month</span>
                                </div>
                            </div>
                            <div className="detail">
                                <span className='text-[22px] font-medium'>Details:</span>
                                <div className='mt-3'>
                                    <ul>
                                        <li className='flex items-center py-[5px]'><span><TiTick /></span> Consulted by an expert</li>
                                        <li className='flex items-center py-[5px]'><span><TiTick /></span> Provide the optional treatment plan</li>
                                        <li className='flex items-center py-[5px]'><span><TiTick /></span> In-house consultation services</li>
                                        <li className='flex items-center py-[5px]'><span><TiTick /></span> Evaluation of physiotherapy</li>
                                        <li className='flex items-center py-[5px]'><span><TiTick /></span> Consulted by an expert</li>
                                    </ul>
                                </div>
                            </div>
                            <button className='btn-started'>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-[90px] mb-[90px] bg-[#ccc] h-[2px] w-full'></div>

            <div className='flex justify-between w-full'>
                <h1 className='text-[40px] leading-[normal] font-extrabold max-w-[28rem]'>Creating Impact With Every Project.</h1>
                <div className='flex flex-col'>
                    <p className='max-w-[25rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, placeat.</p>
                    <button className='get-started bg-[#212322] text-white mt-4 w-[165px]'>Get Started</button>
                </div>
            </div>
        </div>
    )
}
