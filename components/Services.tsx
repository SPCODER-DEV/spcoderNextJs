import Image from "next/image";
import React from "react";
import img from "../public/img.png";
export default function Services() {
  return (
    <>
     <div className="m-auto text-center w-full text-4xl p-2 my-8 font-medium bg-slate-50">
            <h1> خدماتنا SERVICES </h1>
        </div>
      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="md:flex w-full bg-slate-100 rounded-md">
          <div className="w-full text-xl font-medium text-center p-2">
            <p>التمثيل القانوني والترافع والتنفيذ </p>
            <p>Legal Representation, Pleading and Enforcement</p>
          </div>
          <Image
            className="rounded-md md:block hidden w-20 h-20 p-1"
            src={img}
            alt="Picture of the author"
            //    width={80}
            //    height={80}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
        

        
        <div className="md:flex w-full bg-slate-100 rounded-md">
          <div className="w-full text-xl font-medium text-center p-2">
            <p>الدراسات والاستشارات القانونية</p>
            <p>Legal Studies & Consultations</p>
          </div>
          <Image
            className="rounded-md md:block hidden w-20 h-20 p-1"
            src={img}
            alt="Picture of the author"
            //    width={80}
            //    height={80}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
        

        
        <div className="md:flex w-full bg-slate-100 rounded-md">
          <div className="w-full text-xl font-medium text-center p-2">
            <p>تأسيس الكيانات القانونية</p>
            <p>Legal Entity</p>
          </div>
          <Image
            className="rounded-md md:block hidden w-20 h-20 p-1"
            src={img}
            alt="Picture of the author"
            //    width={80}
            //    height={80}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
        

        
        <div className="md:flex w-full bg-slate-100 rounded-md">
          <div className="w-full text-xl font-medium text-center p-2">
            <p> صياغة ومراجعة العقود    </p>
            <p>Contracts Formulation and Revision</p>
          </div>
          <Image
            className="rounded-md md:block hidden w-20 h-20 p-1"
            src={img}
            alt="Picture of the author"
            //    width={80}
            //    height={80}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
        

        
      </div>
    </>
  );
}
