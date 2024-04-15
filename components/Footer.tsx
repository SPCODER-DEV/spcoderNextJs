import React from "react";
import Links from "./naveBare/Links";


export default function Footer() {
  const date = Date().split(" ")[3];
  return (
    <div className="w-full  bg-slate-200 m-auto p-4 text-center rounded-t-md mt-10">
      <Links/>
      <div className="pt-10 font-medium">
        <p>@{date} جميع الحقوق محفوظة | ©Logo</p>
      </div>
    </div>
  );
}
