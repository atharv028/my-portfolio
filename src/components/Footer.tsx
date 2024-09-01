import React from "react";
import MagicButton from "./ui/magic-button";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "../data";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="footer grid"
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let's discuss how I can help you achieve
          your goals.
        </p>
        <a href="mailto:atharv.tare.03@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="text-sm md:text-base md:font-normal font-light">
          © 2024 Atharv Tare. All rights reserved.
        </p>
        <div className="flex items-center gap-3 md:gap-6 md:mt-10">
          {socialMedia.map(({ id, img }) => (
            <a key={id}>
              <div className="flex items-center justify-center bg-black-200  rounded-lg border border-black-300 w-10 h-10 cursor-pointer backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 sm:mt-10">
                <img src={img} alt="social" className="p-2" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
