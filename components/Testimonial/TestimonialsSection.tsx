import React from "react";
import { FaStar } from "react-icons/fa";
import testimonial from "@/public/testimonial1.svg";
import testimonial2 from "@/public/testimonial2.svg";
import testimonial3 from "@/public/testimonial3.svg";
import Image from "next/image";
interface TestimonialProps {
  name: string;
  title: string;
  company: string;
  quote: string;
  img: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  name,
  title,
  company,
  quote,
  img,
}) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:scale-105">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 mr-4">
          {/* <FcBusinessman className="w-full h-full rounded-full bg-gray-300" /> */}
          <Image
            src={img}
            alt="testimonial"
            style={{
              objectFit: "cover",
            }}
            className="w-full h-full rounded-full bg-gray-300"
          />
        </div>
        <div className="text-base">
          <p className="text-[#0F0E47]">{name}</p>
          <p className=" ext-[#4B5563]">
            {title}, {company}
          </p>
        </div>
      </div>
      <p className="text-[#4B5563] text-sm leading-relaxed">"{quote}"</p>
      <div className="flex gap-1 mt-2">
        {[1, 1, 1, 1, 1].map((_, index) => (
          <FaStar key={index} color="#fbaf35" className="" />
        ))}
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Julia",
      title: "IT Director",
      company: "TechCorp",
      img: testimonial,
      quote:
        "ShieldSync has simplified our backup strategy across multiple cloud providers. It's reliable and cost-effective.",
    },
    {
      name: "John Doe",
      title: "DevOps Lead",
      company: "CloudTech",
      img: testimonial2,
      quote:
        "The automated backup features and instant recovery options have saved us countless hours of manual work.",
    },
    {
      name: "Mike Davis",
      title: "CTO",
      company: "DataSafe",
      img: testimonial3,
      quote:
        "Enterprise-grade security at SMB-friendly pricing. ShieldSync delivers exactly what they promise.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl md:text-4xl text-[#0E1E4B] mb-12">
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
              img={testimonial.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
