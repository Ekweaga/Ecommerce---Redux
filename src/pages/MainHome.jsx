import React from 'react'
import mainheadimg from "./images/Group 8425.png"
import mainimg from "./images/Group 8432.png"
import mainimg2 from "./images/Group 8433.png"
import calk from "./images/Group 8431.png"

export default function MainHome() {
  return (
    <>
    <div className="MainHeader flex  mt-[50px] justify-between">
      <div className="HeaderContent mt-[50px] w-[600px] flex flex-col justify-center">
        <div className="bg-[#FFF0DC] text-[#FCB572] w-[250px] rounded-full py-2 px-4 mb-[10px]">
          <p>Best Healthy Salad</p>
        </div>
        <div>
          <h1 className="text-7xl leading-[80px] mb-[20px]"><span className="text-[#FB9333]">Skip</span> The Diet,<br/>Just Eat Healthy <br/>With Jai-Salad</h1>
          <p>Imagine you don't need a diet because we provide healthy and delicious food for you</p>

          <div className="mt-[40px]">
            <button className="bg-[#FB9333] w-[150px] p-2 rounded-full">ORDER</button>
          </div>

          <div className="custcount flex gap-[10px]">
            <section className="flex flex-col items-center justify-center">
              <h3 className="font-bold">300+</h3>
              <span>Customer</span>
            </section>
            <section  className="flex flex-col items-center justify-center">
              <h3 className="font-bold">600+</h3>
              <span>Delivery</span>
            </section>
            <section  className="flex flex-col items-center justify-center">
              <h3 className="font-bold">300+</h3>
              <span>Ratings</span>
            </section>

          </div>
        </div>

      </div>

      <div className="relative">
        <img className="absolute left-0 bottom-0 z-10" src={mainimg}/>
        <img className="absolute right-10 top-0 z-10" src={mainimg2}/>
        <div className="bg-white absolute right-20 bottom-20 h-[150px] z-10 text-black p-3 shadow-white" style={{borderRadius:'20px'}}>
          <span>Daily Calories</span>
          <h2 className="font-bold">200 Cal</h2>
          <img src={calk}/>

        </div>
        <img src={mainheadimg}/>
      </div>

    </div>
<br/>

    <div className="flex justify-between gap-[50px]">
      <div>
        <h1 className="text-5xl leading-[60px]">
          WHY JAI-SALAD FOR <span className="text-[#FB9333]">YOUR HEALTHY FOOD</span>
        </h1>

      </div>

      <div className="w-[600px]">
        <p>We continue to consistently choose and maintain the quality of the food served so that it remains fresh and healthy for you</p>
      </div>

    </div>

    <div>
      <div></div>
      <div></div>
      <div></div>
    </div>
      
    </>
  )
}
