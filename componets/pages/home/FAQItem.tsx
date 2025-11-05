import React from "react";

type FAQItemProps = {
  item: {
    question: string;
    answer: string;
  };
  index: number;
  activeAccordion: number | null;
  toggleAccordion: (i: number) => void;
};

const FAQItem: React.FC<FAQItemProps> = ({ item, index, activeAccordion, toggleAccordion }) => {
  return (
    <div className="accordion-item border-b border-gray-300">
      <button
        type="button"
        className="w-full flex items-center justify-between gap-4 py-7 pt-0 pr-4 pl-0 focus:outline-none"
        onClick={() => toggleAccordion(index)}
      >
        <p className="text-start text-[#131313] leading-tight">
          {item.question}
        </p>
        <span className="circle ml-4 shrink-0 relative">
          <div
            className={`w-6 h-6 rounded-full transition-colors ${
              activeAccordion === index ? "bg-orange-600" : "bg-orange-500"
            }`}
          ></div>
        </span>
      </button>
      <div
        className="panel overflow-hidden transition-all duration-350"
        style={{
          maxHeight: activeAccordion === index ? "500px" : "0",
          opacity: activeAccordion === index ? "1" : "0",
        }}
      >
        <p className="h6 text-[#777777] leading-relaxed max-w-3xl pb-[32px]">
          {item.answer}
        </p>
      </div>
    </div>
  );
};
export default FAQItem;
