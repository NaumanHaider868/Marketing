import React from 'react'
import Logo1 from '../assets/images/10001.png'
import RatingLogo from '../assets/images/rating.svg'

export default function Home() {
    return (
        <div className='flex items-center w-full justify-between px-28'>
            <div className='context flex flex-col w-[35%]'>
                <h1 className='text-white text-[80px] font-bold leading-[92px] tracking-[1px]'>Marketing Digital Partner</h1>
                <div className="line w-[1px] h-[100px] bg-gray-300 mt-[50px] mb-[50px] ml-32"></div>
                <div className="logos flex items-center w-full">
                    <img src={Logo1} alt="" className="logo1" />
                    <img src={Logo1} alt="" className="logo2 ml-14" />
                </div>
            </div>
            <div className='rating'>
                <img src={RatingLogo} alt="" />
            </div>
        </div>
    )
}
