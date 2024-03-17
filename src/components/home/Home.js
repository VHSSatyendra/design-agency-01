import React from "react";
import Logo01 from "../../assets/images/logo01.svg";
import Logo02 from "../../assets/images/logo02.svg";
import Logo03 from "../../assets/images/logo3.svg";
import Logo04 from "../../assets/images/logo04.svg";
import Logo05 from "../../assets/images/logo05.svg";
import Logo06 from "../../assets/images/logo06.svg";

function Home() {
  return (
    <div className="flex flex-col py-6 md:py-24 md:px-12 md:overflow-x-hidden">
      <h1 className="text-primary-color text-5xl md:text-8xl font-light">
        Building Brands, One <br />
        Success Story at a Time.
      </h1>
      <h4 className="md:leading-8 text-lg md:text-2xl font-light my-2 md:my-4">
        Create a Brand That Resonates: We Can Help You <br /> Define and
        Communicate Your Unique Message.
      </h4>

      <button className="px-7 py-4 mt-6 md:mt-12 mb-10 md:mb-20 w-fit border rounded-full font-light text-white bg-primary-color">
        Our Services
      </button>

      <div className="flex overflow-hidden space-x-8 md:space-x-16">
        <div className="flex space-x-16 animate-loop-scroll ">
          <img loading="lazy" src={Logo01} class="max-w-none" alt="1" />
          <img loading="lazy" src={Logo02} class="max-w-none" alt="2" />
          <img loading="lazy" src={Logo03} class="max-w-none" alt="3" />
          <img loading="lazy" src={Logo04} class="max-w-none" alt="4" />
          <img loading="lazy" src={Logo05} class="max-w-none" alt="5" />
          <img loading="lazy" src={Logo06} class="max-w-none" alt="6" />
        </div>
        <div className="flex space-x-8 md:space-x-16 animate-loop-scroll" aria-hidden="true">
          <img loading="lazy" src={Logo01} class="max-w-none" alt="1" />
          <img loading="lazy" src={Logo02} class="max-w-none" alt="2" />
          <img loading="lazy" src={Logo03} class="max-w-none" alt="3" />
          <img loading="lazy" src={Logo04} class="max-w-none" alt="4" />
          <img loading="lazy" src={Logo05} class="max-w-none" alt="5" />
          <img loading="lazy" src={Logo06} class="max-w-none" alt="6" />
        </div>
        <div className="flex space-x-8 md:space-x-16 animate-loop-scroll" aria-hidden="true">
          <img loading="lazy" src={Logo01} class="max-w-none" alt="1" />
          <img loading="lazy" src={Logo02} class="max-w-none" alt="2" />
          <img loading="lazy" src={Logo03} class="max-w-none" alt="3" />
          <img loading="lazy" src={Logo04} class="max-w-none" alt="4" />
          <img loading="lazy" src={Logo05} class="max-w-none" alt="5" />
          <img loading="lazy" src={Logo06} class="max-w-none" alt="6" />
        </div>
      </div>

      <div class="grid gap-6 md:grid-cols-4 my-12">
        <div className="bg-card-color space-y-8 flex flex-col p-10">
          <h4 className="font-normal text-xl">Brand Strategy</h4>
          <p className="font-light text-text-muted text-sm mb-24">
            We help businesses define <br /> their unique brand message <br />{" "}
            and branding positioning.
          </p>
          <a href="#" className="text-sm font-light underline pb-6">
            About Strategy
          </a>
        </div>
        <div className="bg-card-color space-y-8 flex flex-col p-12">
          <h4 className="font-normal text-xl">Visual Identity</h4>
          <p className="font-light text-text-muted text-sm mb-24">
            We create visual elements such
            <br />
            as logos, packaging, and <br /> marketing materials for your brand.
          </p>
          <a href="#" className="text-sm font-light underline pb-6">
            About Strategy
          </a>
        </div>
        <div className="bg-card-color space-y-8 flex flex-col p-12">
          <h4 className="font-normal text-xl">Digital Marketing</h4>
          <p className="font-light text-text-muted text-sm mb-24">
            We help businesses to promote <br /> their brand online and create{" "}
            <br /> engaging digital experiences.
          </p>
          <a href="#" className="text-sm font-light underline pb-6">
            About Strategy
          </a>
        </div>
        <div className="bg-card-color space-y-8 flex flex-col p-12">
          <h4 className="font-normal text-xl">Brand Manage­ment</h4>
          <p className="font-light text-text-muted text-sm mb-24">
            We help businesses to <br /> implement their brand across <br /> all
            touchpoints and ensure consistency.
          </p>
          <a href="#" className="text-sm font-light underline pb-6">
            About Strategy
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
