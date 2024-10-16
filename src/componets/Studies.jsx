import React from 'react'
import img from '../assets/images/10038.jpg'

export default function Studies() {
    return (
        <div className='studies bg-[#0F1312] flex flex-col items-center px-28 pt-[90px] pb-[90px]'>
            <div className=''>
                <div className="head flex flex-col justify-center items-center">
                    <h1 className='text-white text-[50px]'>Our Case Studies</h1>
                    <p className='m-0 text-white text-center studie-d-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus aspernatur quam accusamus quibusdam perspiciatis? Voluptate iusto non rem. Ullam, nemo. Volcusamus quibusdam perspiciatis?</p>
                </div>
            </div>
            <div className="content pt-11">
                <div className="img img1"></div>
                <div className="img img2"></div>
                <div className="img img3"></div>
                <div className="img img4"></div>
            </div>
        </div>
    )
}
