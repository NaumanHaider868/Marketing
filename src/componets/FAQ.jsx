import React, { useState } from "react";
import Img1 from '../assets/images/10034.jpg';
import ContactForm from './ContactForm'
export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(1);

    const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const faqs = [
        "Ut Neque Augue Interdum Ad Integer Tempus Convallis?",
        "Dictum Feugiat Tincidunt Nam Commodo?",
        "Scelerisque Metus Sem Nostra Pulvinar Sagittis?",
        "Consectetur Scelerisque Lacus Gravida Proin Dolor Sem?",
    ];

    const faqDetails = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    In vitae turpis massa sed elementum tempus egestas sed. Diam in arcu cursus euismod.
  `;

    return (
        <div className="bg-[#212322] text-white px-10 py-20">
            <div className="flex items-center justify-center">
                <div className="w-full">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-gray-700 py-4 cursor-pointer"
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold">{faq}</h3>
                                <span className={`text-xl font-bold ${activeIndex === index ? 'text-white' : 'text-[#fecf1d]'}`}>
                                    {activeIndex === index ? "−" : "+"}
                                </span>
                            </div>
                            {activeIndex === index && (
                                <p className="mt-3 text-gray-400">{faqDetails}</p>
                            )}
                        </div>
                    ))}
                </div>

                <div className="w-full flex justify-center">
                    <div className="relative w-[500px] h-[500px] rounded-full flex items-center">
                        <img
                            src={Img1}
                            alt="FAQ"
                            className="rounded-full object-cover"
                        />
                        <h1 className="absolute text-[60px] left-[17px] font-bold text-white">FAQ</h1>
                    </div>
                </div>

            </div>
            <div>
                <ContactForm />
            </div>
        </div>

    );
}