import React from 'react'

export default function Location() {
  return (
    <div>
    
  <div className="md:flex w-full  mt-4 rounded-md p-1" dir="ltr">
    <div className="md:w-[50%] rounded-md">
      
     <iframe className='rounded-md' src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d103379.81480968228!2d0.1841972718026338!3d35.93181955864735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x1282028a2c083fab%3A0xf3744b059607d95e!2z2LTYp9ix2Lkg2KfZhNmC2K_Ys9iMINmF2LPYqti62KfZhtmF!3m2!1d35.9318522!2d0.1141112!5e0!3m2!1sar!2sdz!4v1712994599640!5m2!1sar!2sdz" width="600" height="450"   loading="lazy" ></iframe>
    </div>
    <div className="md:w-[50%] md:p-10 p-2  ">
       <div className='text-xl font-medium' dir="rtl">
            <h1 className='text-4xl p-2'>معلومات اضافية</h1>
            <p>- اوقات العمل : 9 ص / 4 م
            </p>
            <p>
                - الايام :  من الاثنين الى الخميس
            </p>
            <p className='p-1 text-gray-800'>حجز موعد  </p>
           <p><a href="tel:0855554744">0855554744</a></p>
           <p><a href="mailto:test@test.com">email.email.nocom</a></p>
        </div> 
       <div className='text-xl font-medium' dir="ltr">
            <h1 className='text-4xl p-2'> Appointment Booking</h1>
            <p>- Working hours: 9 am / 4 pm
            </p>
            <p>
            - Days: Monday to Thursday
            </p>
            <p className='p-1 text-gray-800'>Communication ways  </p>
           <p><a href="tel:0855554744">0855554744</a></p>
           <p><a href="mailto:test@test.com">email.email.nocom</a></p>
        </div> 
    </div>
  </div>
</div>
);
  
}
