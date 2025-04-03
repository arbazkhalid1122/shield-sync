'use client'
import React, { useState } from 'react';
import { IoChevronDownOutline } from "react-icons/io5";

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "How does ShieldSync secure my backups?",
        answer: "We use AES-256 encryption and immutable storage to ensure your backups are completely secure and protected against ransomware attacks."
    },
    {
        question: "What is your refund policy?",
        answer: "We offer a 30-day money-back guarantee on all purchases."
    },
    {
        question: "How do I recover lost data?",
        answer: "You can restore lost data by logging into your account and following the recovery instructions in the dashboard."
    }
];



const FAQSection = () => {
    const [openItem, setOpenItem] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setOpenItem(openItem === index ? null : index);
    };

    return (
        <section className="w-full py-16 text-[#0F0E47]">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl md:text-4xl text-center mb-12">
                    Frequently Asked Questions
                </h2>
                <div className='flex flex-col gap-4'>
                    {faqData.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-sm">
                            <div className={`border-b last:border-b-0`}>
                                <button
                                    onClick={() => toggleItem(index)}
                                    className="w-full py-5 px-6 flex justify-between items-center text-left focus:outline-none"
                                >
                                    <span className="font-medium text-base">{item.question}</span>
                                    <IoChevronDownOutline
                                        className={`h-5 w-5 transition-transform duration-200 ${openItem === index ? 'transform rotate-180' : ''
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openItem === index ? 'max-h-96 px-6 pb-5 ' : 'max-h-0'
                                        }`}
                                >
                                    {openItem === index && <div className="pt-1">{item.answer}</div>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;



