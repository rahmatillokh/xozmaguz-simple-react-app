import React, { useState } from "react";
import { logo, menu, close } from "../assets/assets";
import { navigationLinks } from "../utils/constants";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = (loginModal, setLoginModal) => {

  const [toggleNav, setToggleNav] = useState(false)

  const toggleHandler = () => setToggleNav(prev => !prev)

  const showModal = () =>{
    setLoginModal(false)
  }

  return (
    <div className="w-full flex py-6 justify-between items-center">
      <Link to={`/`}>
        <div className={`cursor-pointer flex font-montserrat font-semibold xs:text-[48px] text-[30px] text-white xs:leading-[76.8px] leading-[66.8px] w-[135px] h-[35px] items-center`}><img src="./images/icon.png" className="xs:h-[65px] xs:w-[65px] h-[45px] w-[45px]" alt="logo" />Xozmag.uz</div>
      </Link>
      <ul className="list-none md:flex hidden justify-end items-center flex-1">
        {navigationLinks.map((nav, idx) => (
          <li key={nav.id} className={`font-montserrat font-medium cursor-pointer text-[16px] text-white ${idx === navigationLinks.length -1 ? "mr-0" : "mr-10"} hover:text-ligthWhite transition-all duration-500`}>          
          <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
        ))}

      </ul>

      {/* Navigation Btn */}

      <div className={`md:hidden flex flex-1 justify-end items-center max-w-full`}>
          <img src={toggleNav ? close : menu} alt="nav" className="w-[30px] h-[30px] object-contain" onClick={toggleHandler} />
          <div className={`${!toggleNav ? 'hidden' : 'flex'} p-6 absolute top-20 right-0 left-0 w-full sidebar bg-primary`}>
              <ul className="list-none flex-wrap justify-center items-center flex-1">
                {navigationLinks.map((nav, idx) => (
                  <li key={nav.id} className={`mr-0 font-montserrat font-medium cursor-pointer text-[12px] text-white hover:text-ligthWhite transition-all duration-500 ${idx === navigationLinks.length -1 ? "mr-0" : "mr-5"}`}>{nav.title}</li>
                ))}
            </ul>
          </div>
      </div>

    </div>
  );
};

export default Navbar;
