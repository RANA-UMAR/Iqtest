import React from "react";
import Footer from "./Footer";

const Newsletter = () => {
  return (
    <div className="bg-new min-h-screen md:mx-16 rounded-[38px] md:mx-auto">
      <div className="flex flex-col md:flex-row justify-center">
        <div className="text-white pt-20 md:pl-16">
          <img
            src="/images/mail.png"
            alt=""
            className="pb-10 mx-auto md:mx-0"
          />
          <h1 className="text-5xl pb-10 text-center md:text-left">
            Keep up with the latest
          </h1>
          <h1 className="text-xl text-center md:text-left">
            Join our newsletter to stay up to date on features and releases.
          </h1>
        </div>

        <div className="pt-10 md:pt-28 flex items-center flex-col md:pl-10">
          <h1 className="text-white text-2xl font-semibold pb-7 text-center md:text-left">
            Stay up to date
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-5">
            <input
              type="text"
              placeholder="Enter Your Name"
              name="search"
              className="py-3 px-12 rounded-full bg-[#EDF2F7] focus:outline-none"
            />
            <button className="bg-btn py-3 px-5 rounded-full text-white">
              Subscribe
            </button>
          </div>
          <h1 className="text-white pt-7 text-center md:text-left">
            By subscribing you agree with our Privacy Policy
          </h1>
        </div>
      </div>
      <hr className="h-[0.1px] my-8 mx-4 md:mx-14 bg-gray-200 border-0 dark:bg-gray-700" />
      <Footer />
    </div>
  );
};

export default Newsletter;
