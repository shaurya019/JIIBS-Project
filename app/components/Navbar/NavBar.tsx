import React from "react";
import Logo from "../../assets/Images/Logo"
import Help from "../../assets/Images/Question"
import Vector from "../../assets/Images/Vector"

interface NavBarProps {
    toggleSideBar: () => void;
    sideBar: boolean;
}

  export const NavBar: React.FC<NavBarProps> = ({ toggleSideBar, sideBar }) => {
    return (
        <div className="flex justify-between py-6 px-4 sticky top-0 z-40 bg-white ">
        <span className="bg-white w-fit h-auto">
          <Logo />
            </span>
        {!sideBar && <div className="flex flex-row"><button className="md:hidden sm:block bg-black text-white flex justify-center  items-center px-3 rounded-full mr-4">
            {" "}
            CV{" "}</button> <button onClick={() => toggleSideBar()} className=" cursor-pointer md:hidden sm:block"><Vector /></button></div>}
        {sideBar && <button onClick={() => toggleSideBar()} className="cursor-pointer md:hidden sm:block hover:animate-spin">X</button>}
        <ul className="md:flex hidden gap-4">
          <li className="bg-gray-100 rounded-l-full flex justify-center items-center gap-x-3 rounded-r-full py-1 px-3 ">
            {" "}
            <p className="p-1 w-1 h-1 rounded-full bg-green-400"></p> Active
          </li>
          <li className="bg-gray-100 rounded-l-full flex justify-center items-center gap-x-3 rounded-r-full py-1 px-3">
            {" "}
            <Help /> Help
          </li>
          <li className="bg-black text-white  flex justify-center  items-center px-3 rounded-full">
            {" "}
            CV{" "}
          </li>
        </ul>
      </div>
    )
}