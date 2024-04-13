import React from "react";
import Image from "next/image";
import Office from "../public/Office.jpg";
export default function Specialties() {
  return (
    <div>
      <div className="m-auto text-center w-full text-4xl p-2 my-8 font-medium bg-slate-50">
        <h1>اختصاصاتنا Our Specialties</h1>
      </div>
      <div className="md:flex w-full  mt-4 rounded-md p-1" dir="rtl">
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
          <div className=" m-1 " dir="rtl">
            <h2 className="text-3xl"> الشركات</h2>
            <p className="text-gray-950">
              نوظف خبراتنا المتعمقة بالشركات لدعم العملاء في جميع الجوانب
              القانونية والاستراتيجية المتعلقة بأنشطتهم التجارية، والقيام بجميع
              إجراءات تأسيس الكيانات القانونية بأنواعها لمختلفة، وإجراءات عمليات
              الاندماج والاستحواذ
            </p>
          </div>
          <div className=" m-1" dir="ltr">
            <h2 className="text-3xl"> COMPANIES </h2>
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
