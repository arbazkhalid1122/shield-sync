
'use client'
import React, { useState } from 'react';
// import { ChevronDown } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqItems: FAQItem[] = [
    {
        question: "How does ShieldSync secure my backups?",
        answer: "We use AES-256 encryption and immutable storage to ensure your backups are completely secure and protected against ransomware attacks."
    },
    {
        question: "Can I restore files instantly?",
        answer: "Yes, our platform allows for immediate file restoration with just a few clicks. Our quick recovery system ensures minimal downtime for your business."
    },
    {
        question: "What happens if I exceed my storage?",
        answer: "If you exceed your storage limit, you'll receive a notification. You can either upgrade your plan for more storage or manage your existing backups to free up space."
    }
];

const FAQSection = () => {
    const [openItem, setOpenItem] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setOpenItem(openItem === index ? null : index);
    };

    return (
        <section className="w-full bg-[#f9f9fb] py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-[#1A1F2C] text-3xl md:text-4xl font-semibold text-center mb-12">
                    Frequently Asked Questions
                </h2>

                <div className="bg-white rounded-lg shadow-sm">
                    {faqItems.map((item, index) => (
                        <div key={index} className={`border-b last:border-b-0`}>
                            <button
                                onClick={() => toggleItem(index)}
                                className="w-full py-5 px-6 flex justify-between items-center text-left focus:outline-none"
                            >
                                <span className="text-[#1A1F2C] font-medium text-base">{item.question}</span>
                                {/* <ChevronDown
                                    className={`h-5 w-5 text-[#1A1F2C] transition-transform duration-200 ${openItem === index ? 'transform rotate-180' : ''
                                        }`}
                                /> */}
                            </button>

                            <div
                                className={`px-6 pb-5 text-gray-600 overflow-hidden transition-all duration-300 ${openItem === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                {openItem === index && <div className="pt-1">{item.answer}</div>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;