import React from "react";

function Footer() {
  return (
    <div className="mt-10 md:mt-20">
      <div class="grid gap-8 md:grid-cols-4">
        <h4 className="text-xl border-2 border-primary-color border-dashed px-2 w-fit h-fit">
          Nite
        </h4>

        <div className="">
          <h6 className="font-light  text-text-muted">Pages</h6>
          <div className="border-b mt-2 mb-8"></div>
          <div className="flex flex-col space-y-4">
            <a
              href="#"
              className="text-xs text-primary-color font-light hover:underline"
            >
              Home
            </a>
            <a
              href="#"
              className="text-xs text-primary-color font-light hover:underline"
            >
              Services
            </a>
            <a
              href="#"
              className="text-xs text-primary-color font-light hover:underline"
            >
              About
            </a>
            <a
              href="#"
              className="text-xs text-primary-color font-light hover:underline"
            >
              Jobs
            </a>
            <a
              href="#"
              className="text-xs text-primary-color font-light hover:underline"
            >
              Contact
            </a>
            <button className="w-32 md:px-6 py-2 md:py-3 text-sm w-fit border rounded-full font-light text-white bg-primary-color">
              Know More
            </button>
          </div>
        </div>
        <div className="">
          <h6 className="font-light  text-text-muted">CMS</h6>
          <div className="border-b mt-2 mb-8"></div>
          <div className="flex flex-col space-y-4">
            <a
              href="#"
              className="text-xs text-primary-color font-light hover:underline"
            >
              Home
            </a>
            <a
              href="#"
              className="text-xs text-primary-color font-light hover:underline"
            >
              Services
            </a>
            <a
              href="#"
              className="text-xs text-primary-color font-light hover:underline"
            >
              About
            </a>
            <a
              href="#"
              className="text-xs text-primary-color font-light hover:underline"
            >
              Jobs
            </a>
            <a
              href="#"
              className="text-xs text-primary-color font-light hover:underline"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="">
          <h6 className="font-light  text-text-muted">Utility</h6>
          <div className="border-b mt-2 mb-8"></div>
          <div className="flex flex-col space-y-4">
            <a
              href="#"
              className="text-xs text-primary-color font-light hover:underline"
            >
              Home
            </a>
            <a
              href="#"
              className="text-xs text-primary-color font-light hover:underline"
            >
              Services
            </a>
            <a
              href="#"
              className="text-xs text-primary-color font-light hover:underline"
            >
              About
            </a>
            <a
              href="#"
              className="text-xs text-primary-color font-light hover:underline"
            >
              Jobs
            </a>
            <a
              href="#"
              className="text-xs text-primary-color font-light hover:underline"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
