import React from "react";
import Img1 from '../assets/images/10032.jpg'
import Img2 from '../assets/images/10033.jpg'

export default function Testimonials() {
    return (
        <div className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-28">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold">Testimonials</h1>
                <p className="text-gray-600 mt-4">
                    Lorem ipsum dolor sit amet consectetur. In nulla nunc arcu velit
                    consectetur massa mauris molestie hac.
                </p>
            </div>
            <div className="flex flex-col gap-7">
                <div className="flex items-center h-[330px] justify-between">
                    <div className="bg-[#FFF7E2] p-[60px] pb-0 pt-[48px] rounded-[60px] h-full w-[690px]">
                        <h2 className="text-[24px] font-medium">GREAT DESIGNING AGENCY!</h2>
                        <p className="text-gray-600 my-3">
                            Lorem ipsum dolor sit amet consectetur. Nunc risus pellentesque
                            vehicula enim aenean aliquam. Ac quam enim feugiat nam. Nunc risus pellentesque
                            vehicula enim aenean aliquam. Ac quam enim
                        </p>
                        <div className="flex items-center text-[#E6BB33] mb-3 text-[24px]">
                            {"★ ★ ★ ★ ★"}
                        </div>
                        <p className="font-bold text-[20px] text-[#E6BB33]">Indra Muliana</p>
                        <p className="text-sm text-gray-500">Graphic Designer</p>
                    </div>
                    <div className="h-full w-[410px]">
                        <img
                            src={Img1}
                            alt="Indra Muliana"
                            className="object-cover w-full h-full rounded-[60px]"
                        />
                    </div>
                </div>
                <div className="flex items-center h-[330px] justify-between">
                    <div className="h-full w-[410px]">
                        <img
                            src={Img2}
                            alt="Indra Muliana"
                            className="object-cover w-full h-full rounded-[60px]"
                        />
                    </div>
                    <div className="bg-[#FFF7E2] p-[60px] pb-0 pt-[48px] rounded-[60px] h-full w-[690px]">
                        <h2 className="text-[24px] font-medium">GREAT DESIGNING AGENCY!</h2>
                        <p className="text-gray-600 my-3">
                            Lorem ipsum dolor sit amet consectetur. Nunc risus pellentesque
                            vehicula enim aenean aliquam. Ac quam enim feugiat nam. Nunc risus pellentesque
                            vehicula enim aenean aliquam. Ac quam enim
                        </p>
                        <div className="flex items-center text-[#E6BB33] mb-3 text-[24px]">
                            {"★ ★ ★ ★ ★"}
                        </div>
                        <p className="font-bold text-[20px] text-[#E6BB33]">Indra Muliana</p>
                        <p className="text-sm text-gray-500">Graphic Designer</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
