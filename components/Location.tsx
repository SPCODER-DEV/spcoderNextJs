import React from "react";
import { FaChevronDown } from "react-icons/fa6";

export default function Location() {
  return (
    <div>
      <div className="m-auto text-center w-full  text-white bg-zinc-700 text-2xl p-2 my-8 font-medium rounded-md">
        <div className="flex gap-2 text-center text-lg">
          <FaChevronDown />
          <h1>Extra Information / معلومات اضافية </h1>
        </div>
      </div>
      <div
        className="md:flex w-full  mt-4 rounded-md p-1 bg-slate-100 shadow-md"
        dir="ltr"
      >
        <div className="md:w-[50%] rounded-md ">
          <iframe
            className="rounded-md w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d103379.81480968228!2d0.1841972718026338!3d35.93181955864735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x1282028a2c083fab%3A0xf3744b059607d95e!2z2LTYp9ix2Lkg2KfZhNmC2K_Ys9iMINmF2LPYqti62KfZhtmF!3m2!1d35.9318522!2d0.1141112!5e0!3m2!1sar!2sdz!4v1712994599640!5m2!1sar!2sdz"
            loading="lazy"
          ></iframe>
        </div>
        <div className="md:w-[50%] md:p-10 p-2  ">
          <div className="text-sm bg-white rounded-md">
            <p className="font-semibold p-2  text-lg">
              Working times / أوقات العمل
            </p>
            <div className="flex flex-col justify-between  gap-2 p-2">
              <div className="  " dir="rtl">
                <div className="flex gap-2 font-medium">
                  <p className="font-semibold">ايام العمل : </p>
                  <p> الاحد/الخميس</p>
                </div>
                <div className="flex gap-2 ">
                  <p className="font-semibold">ساعات العمل :</p>
                  <p> 9ص/16م</p>
                </div>
              </div>
              <div className="" dir-ltr>
                <div className="flex gap-2 ">
                    <p className="font-semibold">workdays :</p>
                    <p> Sunday/Thursday</p>
                  </div>
                  <div className="flex gap-2 ">
                    <p className="font-semibold">work hours :</p>
                    <p>9am/16pm</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
}
