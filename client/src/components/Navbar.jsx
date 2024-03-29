import React, { useState } from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import Newsletter from "./Newsletter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Navbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    setShowDropdown(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="mx-5">
      <div className="flex justify-between items-center my-1 p-6 mx-5">
        <div className="logo flex items-center">
          <img src="/images/logo.svg" alt="" width="32px" height="30px" />
          <Link to="/">
            <h1 className="ml-2">IQTEST.ai</h1>
          </Link>
        </div>

        <div className="links hidden lg:flex">
          <ul className="flex justify-center items-center gap-20">
            <li>
              <Link to="/" className="text-btn">
                Home
              </Link>
            </li>
            <li>
              <Link to="/">Start Test</Link>
            </li>
            <li>
              <Link to="/">Check Certificate</Link>
            </li>
            <li>
              <Link to="/">Pro Pricing</Link>
            </li>
          </ul>
        </div>

        <div className="lg:hidden">
          <MenuIcon onClick={toggleMenu} className="cursor-pointer" />
        </div>

        <div className="hidden lg:flex">
          <ul className="flex items-center gap-8">
            <li className="bg-btn1 p-2 px-5 rounded-lg">
              <div className="relative">
                <button onClick={toggleDropdown} className="cursor-pointer">
                  {selectedLanguage}
                  <KeyboardArrowDownIcon />
                </button>
                {showDropdown && (
                  <ul className="absolute top-10 right-70 bg-white border rounded-lg shadow-lg pt-2 pb-2">
                    <li className=" pr-40 pl-3 py-1 hover:text-white hover:bg-btn ">
                      <button onClick={() => changeLanguage("English")}>
                        English
                      </button>
                    </li>
                    <li className=" pr-40 pl-3 py-1 hover:text-white hover:bg-btn ">
                      <button onClick={() => changeLanguage("French")}>
                        French
                      </button>
                    </li>
                    <li className=" pr-40 pl-3 py-1 hover:text-white hover:bg-btn ">
                      <button onClick={() => changeLanguage("German")}>
                        German
                      </button>
                    </li>
                    <li className=" pr-40 pl-3 py-1 hover:text-white hover:bg-btn ">
                      <button onClick={() => changeLanguage("Spanish")}>
                        Spanish
                      </button>
                    </li>
                    <li className=" pr-40 pl-3 py-1 hover:text-white hover:bg-btn ">
                      <button onClick={() => changeLanguage("Swedish")}>
                        Swedish
                      </button>
                    </li>
                    <li className=" pr-40 pl-3 py-1 hover:text-white hover:bg-btn ">
                      <button onClick={() => changeLanguage("Danish")}>
                        Danish
                      </button>
                    </li>
                    <li className=" pr-40 pl-3 py-1 hover:text-white hover:bg-btn ">
                      <button onClick={() => changeLanguage("Italian")}>
                        Italian
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li className="bg-btn p-2 px-6 rounded-full text-white">
              <Link to="/">Login</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${showMenu ? "block" : "hidden"} lg:hidden`}>
        <ul className="flex flex-col items-center gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Start Test</Link>
          </li>
          <li>
            <Link to="/">Check Certificate</Link>
          </li>
          <li>
            <Link to="/">Pro Pricing</Link>
          </li>
          <li className="bg-btn1 p-2 px-5 rounded-lg">
            <div className="relative">
              <button onClick={toggleDropdown} className="cursor-pointer">
                {selectedLanguage}
                <KeyboardArrowDownIcon />
              </button>
              {showDropdown && (
                <ul className="absolute top-10 left-[-50px] bg-white border rounded-lg shadow-lg pt-2 pb-2 ">
                  <li className=" pr-40 pl-3 py-1 hover:text-white hover:bg-btn ">
                    <button onClick={() => changeLanguage("English")}>
                      English
                    </button>
                  </li>
                  <li className=" pr-40 pl-3 py-1 hover:text-white hover:bg-btn ">
                    <button onClick={() => changeLanguage("French")}>
                      French
                    </button>
                  </li>
                  <li className=" pr-40 pl-3 py-1 hover:text-white hover:bg-btn ">
                    <button onClick={() => changeLanguage("German")}>
                      German
                    </button>
                  </li>
                  <li className=" pr-40 pl-3 py-1 hover:text-white hover:bg-btn ">
                    <button onClick={() => changeLanguage("Spanish")}>
                      Spanish
                    </button>
                  </li>
                  <li className=" pr-40 pl-3 py-1 hover:text-white hover:bg-btn ">
                    <button onClick={() => changeLanguage("Swedish")}>
                      Swedish
                    </button>
                  </li>
                  <li className=" pr-40 pl-3 py-1 hover:text-white hover:bg-btn ">
                    <button onClick={() => changeLanguage("Danish")}>
                      Danish
                    </button>
                  </li>
                  <li className=" pr-40 pl-3 py-1 hover:text-white hover:bg-btn ">
                    <button onClick={() => changeLanguage("Italian")}>
                      Italian
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li className="bg-btn p-2 px-6 rounded-full text-white">
            <Link to="/">Login</Link>
          </li>
        </ul>
      </div>
      <div className={`${showMenu ? "hidden" : "block"} `}>
        <Newsletter />
      </div>
      <div className={`${showMenu ? "hidden" : "block"} `}>
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center mx-4 md:mx-20 mb-10">
          <p className="mb-4 md:mb-0">© 2023 IQTEST.AI</p>
          <div className="flex gap-4">
            <div className="bg-btn rounded-full p-2">
              <InstagramIcon className="text-white" />
            </div>
            <div className="bg-btn rounded-full p-2">
              <FacebookIcon className="text-white" />
            </div>
            <div className="bg-btn rounded-full p-2">
              <TwitterIcon className="text-white" />
            </div>
            <div className="bg-btn rounded-full p-2">
              <LinkedInIcon className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
