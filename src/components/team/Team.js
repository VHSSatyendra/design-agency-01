import React from "react";
import p01 from '../../assets/images/p01.jpg';
import p02 from '../../assets/images/p02.jpg';
import p03 from '../../assets/images/p03.jpg';

function Team() {
  return (
    <div className="mt-28">
      <h6 className="border-b text-text-muted font-regular pb-4 uppercase text-xs">
        Our Team
      </h6>

      <div className="w-full flex justify-between items-center mt-8">
        <h2 className="text-2xl md:text-5xl capitalize font-light">Our Team of Experts</h2>
        <button className="px-2 w-32 mx:px-5 py-2 font-light text-sm border rounded-full font-light border-primary-color text-primary-color hover:text-white hover:bg-primary-color">
          About Us
        </button>
      </div>

      <div class="grid gap-8 md:grid-cols-4 grid-rows-1 mt-16">
      <div className="p-10 bg-blue-50">
          <h6 className="text-xs font-light uppercase mb-4 text-text-muted">join the team</h6>
          <h4 className="font-light text-3xl mb-4">
          Want to shape <br /> the future of branding?
          </h4>
          <p className="font-extralight text-sm leading-6 mb-20">Join us and shape the future of branding today!</p>
          <button className="px-6 py-3  w-fit border rounded-full font-light text-white bg-primary-color mt-24">
            Apply Now
          </button>
        </div>

        <div className="flex flex-col">
            <div className="w-full overflow-hidden">
          <img src={p02} alt="branding" className="h-full w-full object-cover"/>
            </div>
          <div className="flex w-full mt-4 justify-between align-items">
            <h4 className="font-light">Steve Harry</h4>
            <button className="px-3 py-1 font-light text-xs border rounded-full font-light border-primary-color text-primary-color hover:text-white hover:bg-primary-color">
              Branding
            </button>
          </div>
        </div> 
        <div className="flex flex-col">
            <div className="w-full overflow-hidden">
          <img src={p03} alt="branding" className="h-full w-full object-cover"/>
            </div>
          <div className="flex w-full mt-4 justify-between align-items">
            <h4 className="font-light">Jessica</h4>
            <button className="px-3 py-1 font-light text-xs border rounded-full font-light border-primary-color text-primary-color hover:text-white hover:bg-primary-color">
              Branding
            </button>
          </div>
        </div> 
        <div className="flex flex-col">
            <div className="w-full overflow-hidden">
          <img src={p01} alt="branding" className="h-full w-full object-cover"/>
            </div>
          <div className="flex w-full mt-4 justify-between align-items">
            <h4 className="font-light">Mark Brunet</h4>
            <button className="px-3 py-1 font-light text-xs border rounded-full font-light border-primary-color text-primary-color hover:text-white hover:bg-primary-color">
              Marketing
            </button>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default Team;
