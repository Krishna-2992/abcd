import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/xception-logo.png";

export default function PuruNavbar({ active }) {
  const [navbar, setNavbar] = useState(false);
  // const [currActive, setcurrActive] = useState(active);
  const Tag = ({ title }) => {
    return (
      <div
        className={`text-white hover:font-medium hover:opacity-75 hover:text-black hover:bg-gradient-to-b from-gray-400 to-white rounded-lg p-2 ${
          title === active ? "white-glassmorphism" : ""
        }`}
        onClick={() => setNavbar(!navbar)}
      >
        {title}
      </div>
    );
  };
  return (
    <nav className="w-full shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <NavLink to="/">
              {/* <img src={logo} alt="logo" className="w-32 h-4 cursor-pointer " /> */}
              <div className="text-[#808080] text-4xl font-bold">
                Xception 4.0
              </div>
            </NavLink>
            <div className="md:hidden">
              <button
                className="p-2 text-white rounded-md outline-none focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <NavLink to={"/"}>
                <Tag title="Home" />
              </NavLink>
              <NavLink to="/schedule">
                <Tag title="Schedule" />
              </NavLink>
              <NavLink to="/events">
                <Tag title="Events" />
              </NavLink>
              <NavLink to="/merchandise">
                <Tag title="Merchandise" />
              </NavLink>
              <NavLink to="/gallery">
                <Tag title="Gallery" />
              </NavLink>
              <NavLink to="/team">
                <Tag title="Team" />
              </NavLink>
              <NavLink to="/sponsors">
                <Tag title="Sponsors" />
              </NavLink>
              <NavLink to="/about">
                <Tag title="About" />
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
