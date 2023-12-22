import React from "react";

const ContactMessage = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-20 bg-[#D9DFE5] py-14 sm:py-20 px-8 min-[450px]:px-20 sm:px-24 md:px-44 lg:px-36 xl:px-52 2xl:px-64 ">
      <div className=" flex flex-col gap-3 pr-12 pb-1">
        <h1 className=" font-krona-one text-4xl text-gray">
          SEND US A MESSAGE
        </h1>
        <p className="font-dm-sans text-stone-500 ">
          If you're interested in hearing more about the way we work, have a
          business proposal, or are interested in making a purchase, we'd love
          to hear from you.{" "}
        </p>
        <div className=" h-full w-full flex justify-start items-end">
          <div className=" h-fit py-2 px-14 bg-gray rounded-sm"></div>
        </div>
      </div>
      <div className=" flex flex-col gap-5 font-jost text-stone-600">
        <div className=" flex flex-col">
          <label htmlFor="">Name *</label>
          <input
            type="text"
            placeholder="Your name"
            className=" px-3 py-3 focus:outline-none bg-[#F1F1F1]"
          />
        </div>
        <div className=" flex flex-col">
          <label htmlFor="">Last name</label>
          <input
            type="text"
            placeholder="Your last name"
            className=" px-3 py-3 focus:outline-none bg-[#F1F1F1]"
          />
        </div>
        <div className=" flex flex-col">
          <label htmlFor="">Your email *</label>
          <input
            type="email"
            placeholder="Your email address"
            className=" px-3 py-3 focus:outline-none bg-[#F1F1F1]"
          />
        </div>
        <div className=" flex flex-col">
          <label htmlFor="">Message *</label>
          <textarea
            rows="3"
            placeholder="Enter your message"
            className=" px-3 py-3 focus:outline-none bg-[#F1F1F1]"
          ></textarea>
        </div>
        <div className=" flex items-center justify-end">
          <button className=" bg-gray hover:bg-black duration-300 py-2 px-10 font-krona-one text-[#fafafa] text-sm">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactMessage;
