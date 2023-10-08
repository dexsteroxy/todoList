import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";

const Nav: FC = () => {
  return (
    //nav mobile state

    <header className=" h-[94px] shadow-sm shadow-white  fixed containe borderb   bg-amazon_blue left-0 right-0 z-40 mx-w-[1920px] w-full mx-auto  transition-all duration-300  ">
      <div className="flex  justify-between items-center  h-full pl-[50px] pr-[60px]">
        {/* logo */}
        <a>
          <div className="hover:text-red-600">
            {/* <img className="w-20 rounded-2xl h-16  " src={black} alt=""></img> */}
            <h1 className=" text-white font-semibold md:text-2xl">
              Seroxy.TodoList
            </h1>
          </div>
        </a>
        {/* nav initally hidden show on destop */}
        <div className=" mdl:flex hidden">
          <ul className=" text-white flex gap-x-8 cursor-pointer transition-all">

          <NavLink to="/home" className="px-4 text-center hover:text-red-600 transition-all duration-300">
              Home
            </NavLink>
            {/* <NavLink to="/todo" className="px-4 text-center hover:text-red-600 transition-all duration-300">
              
            </NavLink> */}
            <NavLink to="/setting" className="px-4 text-center hover:text-red-600 transition-all duration-300">
              About
            </NavLink>
            <NavLink to="/contact" className="px-4 text-center hover:text-red-600 transition-all duration-300">
              Contact
            </NavLink>

           
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Nav;
