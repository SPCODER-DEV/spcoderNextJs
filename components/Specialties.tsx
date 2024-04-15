import React from "react";
import Image from "next/image";
import Office from "../public/Office.jpg";
import { FaChevronDown } from "react-icons/fa6";
export default function Specialties() {
  return (
    <div>
      <div className="m-auto text-center w-full  text-white bg-zinc-700 text-2xl p-2 my-8 font-medium rounded-md ">
        <div className="flex gap-2 text-center text-lg">
        <FaChevronDown />
          <h1> Our Specialties / اختصاصاتنا  </h1>
          
        </div>
      </div>
      <div className="md:flex w-full  mt-4 rounded-md p-1 bg-slate-100 shadow-md" dir="rtl">
        <div className="md:w-[50%]">
          <Image
            className="rounded-md"
            src={Office}
            alt="Picture of the author"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
        <div className="md:w-[50%] md:p-10 p-2  font-medium text-lg flex flex-col justify-between">
          <div className=" m-1 bg-white p-2 rounded-md " dir="rtl">
            <h2 className="text-2xl"> الشركات</h2>
            <p className="text-gray-950">
              نوظف خبراتنا المتعمقة بالشركات لدعم العملاء في جميع الجوانب
              القانونية والاستراتيجية المتعلقة بأنشطتهم التجارية، والقيام بجميع
              إجراءات تأسيس الكيانات القانونية بأنواعها لمختلفة، وإجراءات عمليات
              الاندماج والاستحواذ
            </p>
          </div>
          <div className=" m-1 bg-white p-2 rounded-md" dir="ltr">
            <h2 className="text-2xl"> COMPANIES </h2>
            <p className="text-black/80">
              We employ our deep experiences of companies to support clients
              with all legal and strategic aspects related to their business
              activities, covering the establishment of different types of legal
              entities, integration and possession procedures
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
