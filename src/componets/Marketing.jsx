import React from 'react'
import girlImg from '../assets/images/10016.png'

export default function Marketing() {
    return (
        <div className='bg-[#E6B938] flex flex-col items-center px-28 pt-[90px] marketing relative'>
            <div className='w-full flex items-center justify-center'>
                <h1 className='mark-heading'>MARKETING</h1>
                <div className="black-cri"></div>
                <img src={girlImg} className='girl-img' />
            </div>
            <div className="w-full flex items-center justify-between seo">
                <h1 className='text-white text-5xl heading'>Search Engine Optimization</h1>
                <div className="mark-action">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed accusamus, inventore voluptas quis enim fugit quos hic modi soluta doloremque corporis.</p>
                    <button className='bg-[#212322] text-white btn-action'>Get Started</button>
                </div>
            </div>
        </div>
    )
}
