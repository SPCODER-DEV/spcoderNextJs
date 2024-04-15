import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook, FaFacebookMessenger } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
export default function Links() {
  return (
    <div className="text-xl text-zinc-800/80 flex gap-2 justify-between">
        <div className="p-4">
         
          <a href="https://www.messenger.com/t/100043082314644"> <FaFacebookMessenger /></a>
        </div>
        <div className="p-4">
        
        <a href="mailto:test@test.comtest"><MdEmail /></a>
        </div>
        <div className="p-4">
          
          <a href="tel:+2138556566"><FaPhoneAlt /></a>
        </div>
        <div className="p-4">
        <FaFacebook />
        <a href="https://www.facebook.com/facebookLinkTest-1"></a>
        </div>
        
      </div>
  )
}
