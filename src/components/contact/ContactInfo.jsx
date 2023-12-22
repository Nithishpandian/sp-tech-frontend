import React from "react";
import workingImg from "../../assets/images/common/working.jpeg";

const ContactInfo = () => {
  return (
    <div className=" grid grid-cols-2 gap-12 pt-16 pb-20 px-44 ">
      <div className=" p-5 flex flex-col gap-10">
        <div>
          <h1 className=" text-gray text-5xl font-krona-one font-bold">
            CONTACT US
          </h1>
        </div>
        <div className=" grid grid-cols-2 justify-between gap-2">
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
          <div className=" h-fit py-2 px-14 bg-gray rounded-sm"></div>
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
