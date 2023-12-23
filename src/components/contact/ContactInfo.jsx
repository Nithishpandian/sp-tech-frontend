import React from "react";
import workingImg from "../../assets/images/common/working.jpeg";

const ContactInfo = () => {
  return (
    <div className=" grid lg:grid-cols-2 lg:gap-8 xl:gap-12 pt-5 sm:pt-16 pb-12 sm:pb-20 px-10 sm:px-20 md:px-24 lg:px-12 xl:px-40 2xl:px-44 ">
      <div className=" p-5 xl:p-4 2xl:p-5 flex flex-col gap-4 sm:gap-10">
        <div>
          <h1 className=" text-gray text-3xl sm:text-5xl font-krona-one font-bold">
            CONTACT US
          </h1>
        </div>
        <div className=" grid min-[450px]:grid-cols-2 justify-between gap-4 min-[450px]:gap-2">
          <div>
            <h1 className=" font-krona-one text-gray text-lg">CONTACTS</h1>
            <div className=" flex flex-col mt-1">
              <p className=" font-dm-sans font-light text-stone-500 text-sm">
                123-456-789
              </p>
              <p className=" font-dm-sans font-light text-stone-500 text-sm">
                nithish@gmail.com
              </p>
            </div>
          </div>
          <div>
            <h1 className=" font-krona-one text-gray text-lg">ADDRESS</h1>
            <div className=" flex flex-col mt-1">
              <p className=" font-dm-sans font-light text-stone-500 text-sm">
                1st Floor, S.F. No. 461/2 CRPF Road, Thoppampatti post,
                Coimbatore, Tamil Nadu, 641017
              </p>
            </div>
          </div>
        </div>
        <div className=" h-full w-full flex justify-end items-end">
          <div className=" h-fit py-1.5 min-[450px]:py-2 px-10 min-[450px]:px-14 bg-gray rounded-sm"></div>
        </div>
      </div>
      <div className="">
        <img
          className=" opacity-80 grayscale rounded h-80 w-full object-cover"
          src={workingImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default ContactInfo;
