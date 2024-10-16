import React from 'react'

export default function Rating() {
    return (
        <div className='flex text-white gap-5 pt-[90px] pb-[90px] px-28'>
            <div className='box box1'>
                <span className='rate'>150%</span>
                <p className='font-medium'>Conversion Rate Increased</p>
            </div>
            <div className='box box2'>
                <span className='rate'>87K</span>
                <p className='font-medium'>Conversion Rate Increased</p>
            </div>
            <div className='box box2'>
                <span className='rate'>20M</span>
                <p className='font-medium'>Conversion Rate Increased</p>
            </div>
        </div>
    )
}
