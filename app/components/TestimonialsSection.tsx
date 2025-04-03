
import React from 'react';
import { FcBusinessman } from "react-icons/fc";

interface TestimonialProps {
    name: string;
    title: string;
    company: string;
    quote: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, title, company, quote }) => {
    return (
        <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
                <div className="w-12 h-12 mr-4">
                    <FcBusinessman className="w-full h-full rounded-full  bg-gray-300" />
                </div>
                <div>
                    <h4 className="font-medium text-[#0E1E4B]">{name}</h4>
                    <p className="text-sm text-gray-600">{title}, {company}</p>
                </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">"{quote}"</p>
        </div>
    );
};

const TestimonialsSection: React.FC = () => {
    const testimonials = [
        {
            name: "John Smith",
            title: "IT Director",
            company: "TechCorp",
            quote: "ShieldSync has simplified our backup strategy across multiple cloud providers. It's reliable and cost-effective."
        },
        {
            name: "Sarah Johnson",
            title: "DevOps Lead",
            company: "CloudTech",
            quote: "The automated backup features and instant recovery options have saved us countless hours of manual work."
        },
        {
            name: "Mike Davis",
            title: "CTO",
            company: "DataSafe",
            quote: "Enterprise-grade security at SMB-friendly pricing. ShieldSync delivers exactly what they promise."
        }
    ];

    return (
        <section className="py-16">
            <div className="container mx-auto max-w-6xl px-4">
                <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0E1E4B] mb-12">
                    What Our Customers Say
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <Testimonial
                            key={index}
                            name={testimonial.name}
                            title={testimonial.title}
                            company={testimonial.company}
                            quote={testimonial.quote}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;