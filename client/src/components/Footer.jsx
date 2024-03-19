import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-wrap justify-around p-4">
      <div className="w-full sm:w-1/2 md:w-auto lg:w-auto xl:w-auto mb-4">
        <div className="logo">
          <div className="flex items-center">
            <img src="/images/logo.svg" alt="" />
            <Link to="/">
              <h1 className="text-white text-3xl ml-2">IQTEST.ai</h1>
            </Link>
          </div>
          <h1 className="text-gray-500 mt-3">
            Test your IQ in a very easy and simple <br />
            step not complex.
          </h1>
        </div>
      </div>
      <div className="">
        <div className="IQTEST">
          <h1 className="text-white mb-2">IQTEST</h1>
          <ul className="text-gray-500 mb-2">
            <li className="mb-2">
              <Link to="/">Quiz</Link>
            </li>
            <li className="mb-2">
              <Link to="/">Results</Link>
            </li>
            <li className="mb-2">
              <Link to="/">Pricing</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="">
        <div className="support">
          <h1 className="text-white mb-2">Support</h1>
          <ul className="text-gray-500 mb-2">
            <li className="mb-2">
              <Link to="/">Help</Link>
            </li>
            <li className="mb-2">
              <Link to="/">FAQ</Link>
            </li>
            <li className="mb-2">
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="">
        <div className="legal">
          <h1 className="text-white mb-2">Legal</h1>
          <ul className="text-gray-500 mb-2">
            <li className="mb-2">
              <Link to="/">Privacy Policy</Link>
            </li>
            <li className="mb-2">
              <Link to="/">Terms of Service</Link>
            </li>
            <li className="mb-2">
              <Link to="/">Cookies Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
