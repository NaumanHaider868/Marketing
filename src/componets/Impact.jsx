import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Added Autoplay module
import "swiper/css";
import "swiper/css/pagination";
import Img1 from "../assets/images/10024.jpg";
import Img2 from "../assets/images/10026.jpg";

const Impact = () => {
    const slides = [
        {
            image: Img1,
            title: "Creative Photography",
            description: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
            image: Img2,
            title: "Digital Marketing",
            description: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
            image: Img1,
            title: "Packaging Design",
            description: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
            image: Img2,
            title: "Online Management",
            description: "Lorem ipsum dolor sit amet consectetur.",
        },
    ];

    return (
        <div className="w-full pb-10 bg-white relative impact">
            <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                spaceBetween={20}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                }}
                className="w-full pl-2 pr-2 z-1"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative rounded-[30px] shadow-md overflow-hidden">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full object-cover"
                            />
                            <div className="p-4 absolute right-0 left-0 z-10 bottom-[0px] bg-img-text">
                                <h3 className="text-[30px] text-white font-bold">{slide.title}</h3>
                                <p className="text-sm text-white">{slide.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="absolute bg-[#E7B938] h-[200px] w-fill-available bottom-0"></div>
        </div>
    );
};

export default Impact;
