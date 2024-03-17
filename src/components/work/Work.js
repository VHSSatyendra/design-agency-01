import React from "react";
import work01 from "../../assets/images/branding.jpg";
import work02 from "../../assets/images/pkg01.jpg";
import work03 from "../../assets/images/sm.avif";
// import work04 from "../../assets/images/branding.jpg";

function Work() {
  return (
    <div className="">
      <h6 className="border-b text-text-muted font-regular pb-4 uppercase text-xs">
        Our Work
      </h6>

      <div className="w-full flex justify-between items-center mt-8">
        <h2 className="text-2xl md:text-5xl capitalize font-light">selected work</h2>
        <button className="px-3 md:px-5 py-2 font-light text-sm border rounded-full font-light border-primary-color text-primary-color hover:text-white hover:bg-primary-color">
          All Work
        </button>
      </div>

      <div class="grid gap-6 md:grid-cols-2 md:grid-rows-2 mt-16">
        <div className="flex flex-col ">
            <div className="w-full h-full overflow-hidden">
          <img src={work03} alt="branding" className="h-full max-w-full transition-all duration-700 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 object-cover hover:scale-105"/>
            </div>
          <div className="flex w-full mt-4 justify-between align-items">
            <h4>XYZ Company</h4>
            <button className="px-3 py-1 font-light text-xs border rounded-full font-light border-primary-color text-primary-color hover:text-white hover:bg-primary-color">
              Social Media
            </button>
          </div>
        </div> 
        <div className="flex flex-col">
            <div className="w-full h-full overflow-hidden">
          <img src={work02} alt="branding" className="h-full max-w-full transition-all duration-700 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 object-cover hover:scale-105" />
            </div>
          <div className="flex w-full mt-4 justify-between align-items">
            <h4>XYZ Company</h4>
            <button className="px-3 py-1 font-light text-xs border rounded-full font-light border-primary-color text-primary-color hover:text-white hover:bg-primary-color">
            Branding
            </button>
          </div>
        </div> 
        <div className="flex flex-col">
            <div className="w-full h-full overflow-hidden">
          <img src={work01} alt="branding" className="h-full max-w-full transition-all duration-700 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 object-cover hover:scale-105"/>
            </div>
          <div className="flex w-full mt-4 justify-between align-items">
            <h4>XYZ Company</h4>
            <button className="px-3 py-1 font-light text-xs border rounded-full font-light border-primary-color text-primary-color hover:text-white hover:bg-primary-color">
              Marketing
            </button>
          </div>
        </div> 
        <div className="flex flex-col">
            <div className="w-full h-full overflow-hidden">
          <img src={work02} alt="branding" className="h-full max-w-full transition-all duration-700 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 object-cover hover:scale-105"/>
            </div>
          <div className="flex w-full mt-4 justify-between align-items">
            <h4>XYZ Company</h4>
            <button className="px-3 py-1 font-light text-xs border rounded-full font-light border-primary-color text-primary-color hover:text-white hover:bg-primary-color">
              Branding
            </button>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default Work;
