import React from "react";
import Image from "next/image";
import img from "../public/img.png";
export default function Header() {
  return (
    
      <div className="md:flex w-full  mt-4 rounded-md p-1 bg-slate-100 shadow-md">
        <div className="md:w-[50%]">
          <Image
            className="rounded-md"
            src={img}
            alt="Picture of the author"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
        <div className="md:w-[50%] md:p-10 p-1 font-medium text-lg flex flex-col justify-between">
          <div className=" m-1 rounded-md bg-white p-2" dir="rtl">
            <h2 className="text-2xl">من نحن</h2>
            <p className="text-gray-950 p-2">
              في [اسم الموقع او الشركة] نقدم خدماتنا على المستوى المحلي والإقليمي، ونؤمن بأن
              نكون لعملائنا أساس قانوني للنجاح ونتطلع للوصول بأعمالنا إلى أعلى
              معايير الجودة والمهنية من خلال محامين ذو رؤية وخبراء ذو جودة عالي
            </p>
          </div>
          <div className=" m-1 rounded-md bg-white p-2" dir="ltr">
            <h2 className="text-2xl"> ABOUT US </h2>
            <p className="text-black/80 p-2 ">
              At Alomer we provide our services on a local and regional range,
              our principle is to create a legal foundation of success to our
              clients, and we look forward to reach the highest standards of
              quality and professionalism through lawyers and experts with
              insights an professional background
            </p>
          </div>
        </div>
      </div>
    
  );
}
