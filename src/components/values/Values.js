import React from "react";

function Values() {
  return (
    <div className="mt-12 md:mt-24">
      <h6 className="border-b text-text-muted font-regular pb-4 uppercase text-xs">
        Our Values
      </h6>

      <div class="grid gap-8 md:grid-cols-4 md:grid-rows-2 mt-16">
        <div className="p-10 bg-blue-50">
          <h6 className="text-xs font-light uppercase mb-4">Services</h6>
          <h4 className="font-light text-2xl mb-32">
            Our Approach to Branding.
          </h4>
          <button className="px-6 py-3  w-fit border rounded-full font-light text-white bg-primary-color">
            About Nite
          </button>
        </div>
        <div className="p-10 bg-green-50 flex flex-col justify-between">
          <h6 className="text-xs font-light uppercase mb-32">
            HELPING BRANDS <br /> STAND OUT
          </h6>
          <h4 className="font-light text-2xl ">
            Bold Moves, <br /> Big Impact.
          </h4>
        </div>
        <div className="p-10 bg-red-50 flex flex-col justify-between">
          <h6 className="text-xs font-light uppercase mb-32">
            HOW WE WORK <br /> WITH OUR CLIENTS
          </h6>
          <h4 className="font-light text-2xl">
            Honesty is the <br /> Best Policy.
          </h4>
        </div>
        <div className="hidden md:block"></div>
        <div className="hidden md:block"></div>
        <div className="p-10 bg-gray-50 flex flex-col justify-between">
          <h6 className="text-xs font-light uppercase mb-32">
            COLLABORATION IS KEY
          </h6>
          <h4 className="font-light text-2xl">
            Building Strong <br />
            Partnerships.
          </h4>
        </div>
        <div className="p-10 bg-orange-50 flex flex-col justify-between">
          <h6 className="text-xs font-light uppercase mb-32">OUR APPROACH</h6>
          <h4 className="font-light text-2xl">
            Achieving Real <br /> Results.
          </h4>
        </div>
        <div className="p-10 bg-yellow-50 flex flex-col justify-between">
          <h6 className="text-xs font-light uppercase mb-32">OUR PHILOSOPHY</h6>
          <h4 className="font-light text-2xl">
            Building Trust, <br />
            Not Pitching.
          </h4>
        </div>
      </div>

      <div className="md:w-1/2 mx-auto mt-24">
        <div className="flex flex-col">
          <h2 className="font-light text-justify text-2xl md:text-5xl">
            Crafting Exceptional Digital
            <br /> Experiences Across All <br /> Platforms: Our Goal at Nite.
          </h2>
          <div className="flex-col md:flex md:flex-row mt-6 gap-4 ">
            <p className="text-sm font-light text-text-muted leading-6 mb-4">
              At Nite, our goal is to craft exceptional digital experiences
              across all platforms. In today's digitally driven world, having a
              strong online presence is paramount for businesses to connect with
              their target audience effectively. We understand the importance of
              delivering seamless and engaging experiences that leave a lasting
              impression
            </p>
            <p className="text-sm font-light text-text-muted leading-6">
              Our team of skilled designers, developers, and digital strategists
              collaborate to create customized digital solutions tailored to
              your unique business needs. Whether it's designing a user-friendly
              website, developing a mobile application, or enhancing your
              e-commerce platform, we strive to provide solutions that not only
              meet but exceed your expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Values;
