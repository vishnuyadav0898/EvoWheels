import React from "react";
import CommonBtn from "./CommonBtn";

function FAQSection({title,description,questions, toggleFAQ, activeIndex }) {
  return (
   
    <div className="p-4 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:mb-10">
      <h1 className="text-2xl font-semibold 2xl:text-5xl">{title}</h1>
      <p className="mt-2 2xl:text-3xl">{description}</p>
      <div className="w-full max-w-3xl mx-auto p-4">
        {questions.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 mb-2">
            <div
              className="flex justify-between items-center cursor-pointer py-3"
              onClick={() => toggleFAQ(index)} >
              <p className="font-medium text-lg 2xl:text-2xl 2xl:mt-5">{faq.question}</p>
              <span className="text-xl">
                {activeIndex === index ? "▲" : "▼"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="p-3 text-gray-600 2xl:text-xl">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
      <CommonBtn btnText={" View All Questions "}/>
    
    </div>
  );
}

export default FAQSection;
