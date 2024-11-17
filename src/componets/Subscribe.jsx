import React from "react";
import { FiSend } from "react-icons/fi";

const Subscribe = () => {
    return (
        <div className="flex justify-center items-center py-16 bg-white">
            <div className="w-11/12 md:w-2/3 bg-[#E6B938] text-center p-10 rounded-xl flex flex-col justify-center items-center">
                <h2 className="font-bold text-black mb-6 text-[30px] w-[665px]">
                    Subscribe Our Newsletter To Get Best Advice On Marketing
                </h2>
                <div className="flex justify-center items-center w-full">
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="w-full md:w-2/3 px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none"
                    />
                    <button className="px-5 pt-[0.80rem] pb-[0.80rem] bg-red-500 text-white rounded-r-md hover:bg-red-600">
                        <FiSend className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
