import React from "react";

// Contact Form Component
const ContactForm = () => {
  return (
    <div className="form-div bg-white md:px-[32px] px-[15px] md:py-[40px] py-[30px] rounded-[20px]">
      <form
        className="flex md:gap-[24px] gap-[20px] flex-col"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="name flex flex-col gap-[8px]">
          <label className="cal-sans h6 font-semibold" htmlFor="name">
            Full Name
          </label>
          <input
            className="h6 lexend md:rounded-[10px] rounded-[8px] md:px-[16px] px-[10px] py-[12px] text-[#9D9D9D] border-[#E3E3E3] bg-[#F7F7F5] border-[1px] focus:outline-none focus:ring-2 focus:ring-[#FF6817]"
            type="text"
            name="name"
            id="name"
            placeholder="John Parker"
          />
        </div>

        <div className="mail-whatsapp grid grid-cols-1 lg:grid-cols-2 gap-[16px]">
          <div className="email flex flex-col gap-[8px]">
            <label className="cal-sans h6 font-semibold" htmlFor="email">
              Your mail
            </label>
            <input
              className="h6 lexend md:rounded-[10px] rounded-[8px] md:px-[16px] px-[10px] py-[12px] text-[#9D9D9D] border-[#E3E3E3] bg-[#F7F7F5] border-[1px] focus:outline-none focus:ring-2 focus:ring-[#FF6817]"
              type="email"
              name="email"
              id="email"
              placeholder="Example@example.com"
            />
          </div>
          <div className="email flex flex-col gap-[8px]">
            <label className="cal-sans h6 font-semibold" htmlFor="whatsapp">
              Whatsapp Number
            </label>
            <input
              className="h6 lexend md:rounded-[10px] rounded-[8px] md:px-[16px] px-[10px] py-[12px] text-[#9D9D9D] border-[#E3E3E3] bg-[#F7F7F5] border-[1px] focus:outline-none focus:ring-2 focus:ring-[#FF6817]"
              type="tel"
              name="whatsapp"
              id="whatsapp"
              placeholder="1 123 1234567"
            />
          </div>
        </div>

        <div className="textarea flex flex-col gap-[8px]">
          <label className="cal-sans h6 font-semibold" htmlFor="service">
            Select Service
          </label>
          <select
            id="service"
            className="w-full h6 bg-[#F7F7F5] px-[16px] py-[12px] border-[1px] border-[#E3E3E3] rounded-[10px] text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF6817]"
          >
            <option value="">Select...</option>
            <option value="design">Design</option>
            <option value="development">Development</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>

        <div className="email flex flex-col gap-[8px]">
          <label className="cal-sans h6 font-semibold" htmlFor="textarea">
            Project Details
          </label>
          <textarea
            className="h6 lexend md:rounded-[10px] rounded-[8px] md:px-[16px] px-[10px] py-[12px] text-[#9D9D9D] border-[#E3E3E3] bg-[#F7F7F5] border-[1px] focus:outline-none focus:ring-2 focus:ring-[#FF6817]"
            name="textarea"
            rows={5}
            id="textarea"
            placeholder="Tell us more about your project"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="bg-[#FF6817] text-white font-semibold px-[24px] py-[10px] rounded-full cursor-pointer hover:bg-orange-600 transition-colors"
          >
            <a
              href="#"
              className="cl-scroll-btn cal-sans h6"
              data-text="Let’s Connect"
            >
              <span>Let’s Connect</span>
            </a>
          </button>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
