"use client";
import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How much does it cost to set up a store?",
      answer: "The cost depends on the plan you choose. We offer free and premium plans tailored to your needs.",
    },
    {
      question: "What kind of digital products can I sell?",
      answer: "You can sell eBooks, courses, music, software, digital art, templates, and much more.",
    },
    {
      question: "Do I need technical skills to use the platform?",
      answer: "No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It's as simple as a few clicks to get started!",
    },
    {
      question: "Is there a limit to the number of products I can list?",
      answer: "No, there’s no limit! You can list as many products as you want on your store.",
    },
    {
      question: "How do I receive payments for my sales?",
      answer: "Payments are processed through secure gateways like PayPal, Stripe, or bank transfers. You can choose your preferred method.",
    },
    {
      question: "Can I sell internationally on this marketplace?",
      answer: "Yes, you can! Our platform supports global transactions, so you can reach customers worldwide.",
    },
    {
      question: "What support and resources are available for sellers?",
      answer: "We provide 24/7 customer support, detailed guides, video tutorials, and a community forum to help you succeed.",
    },
    {
      question: "Is there a review process for uploaded products?",
      answer: "Yes, all uploaded products go through a quick review process to ensure quality and compliance with our guidelines.",
    },
  ];

  return (
    <div className='w-[619px] max-h-[582px] flex flex-col gap-[16px]  '>

      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-2 rounded-[24px] p-4  py-4 cursor-pointer bg-white text-black "
          onClick={() => toggleFAQ(index)}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium">{faq.question}</h2>
            <span className="text-xl">{openIndex === index ? "-" : "+"}</span>
          </div>
          {openIndex === index && (
            <p className="mt-3 text-gray-600">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;











