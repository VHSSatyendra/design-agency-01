import React from "react";
import prod1 from "../../assets/images/prod1.jpg";
import prod2 from "../../assets/images/prod2.jpg";
import prod3 from "../../assets/images/prod3.jpg";
import prod4 from "../../assets/images/prod4.jpg";

function Blog() {
  return (
    <div className="mt-12 md:mt-32">
      <h6 className="border-b text-text-muted font-regular pb-4 uppercase text-xs">
        blog
      </h6>
      <div className="w-full flex justify-between items-center mt-8">
        <h2 className="text-2xl md:text-5xl capitalize font-light">Insights on Branding</h2>
        <button className="px-5 py-2 font-light text-sm border rounded-full font-light border-primary-color text-primary-color hover:text-white hover:bg-primary-color">
          See All
        </button>
      </div>

      <div class="grid gap-8 md:grid-cols-4 mt-16">
        <div className="flex flex-col  h-96 ">
          <div className="h-2/3 w-full mb-4 overflow-hidden ">
            <img
              src={prod1}
              alt="Product"
              className="w-full h-full object-cover hover:scale-105 transition all duration-500"
            />
          </div>
          <h4 className="font-light text-lg mb-4">
            The Importance of a Strong Brand Positioning
          </h4>
          <a href="#" className="text-sm font-light underline">
            Read More
          </a>
        </div>
        <div className="flex flex-col  h-96">
          <div className="h-2/3 w-full mb-4 overflow-hidden ">
            <img
              src={prod2}
              alt="Product"
              className="w-full h-full object-cover hover:scale-105 transition all duration-500"
            />
          </div>
          <h4 className="font-light text-lg mb-4 overflow-hidden ">
            Creating a Consistent Brand Identity Across All Touchpoints
          </h4>
          <a href="#" className="text-sm font-light underline">
            Read More
          </a>
        </div>
        <div className="flex flex-col  h-96">
          <div className="h-2/3 w-full mb-4 overflow-hidden ">
            <img
              src={prod3}
              alt="Product"
              className="w-full h-full object-cover hover:scale-105 transition all duration-500"
            />
          </div>
          <h4 className="font-light text-lg mb-4">
            The Role of Market Research in Branding Strategy
          </h4>
          <a href="#" className="text-sm font-light underline">
            Read More
          </a>
        </div>
        <div className="flex flex-col  h-96">
          <div className="h-2/3 w-full mb-4 overflow-hidden ">
            <img
              src={prod4}
              alt="Product"
              className="w-full h-full object-cover hover:scale-105 transition all duration-500"
            />
          </div>
          <h4 className="font-light text-lg mb-4">
            The Impact of Social Media on Branding
          </h4>
          <a href="#" className="text-sm font-light underline">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Blog;
