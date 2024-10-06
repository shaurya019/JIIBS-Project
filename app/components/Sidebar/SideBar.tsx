import React from "react";
import HomeImg from "../../assets/Images/HomeImg"
import Program from "../../assets/Images/Program"
import Activity from "../../assets/Images/Activity"
import Insight from "../../assets/Images/Insight"
import PeopleImg from "../../assets/Images/People"
import Billing from "../../assets/Images/Bill"
import Marketplace from "../../assets/Images/Marketplace"
import Help from "../../assets/Images/Question"

interface SideBarProps {
    togglePanel: () => void;
    sideBar: boolean;
}

export const SideBar: React.FC<SideBarProps> = ({ togglePanel, sideBar }) => {
    return (
        <div className={` ${sideBar ? "block" : "hidden"} z-10 md:block md:w-1/6 lg:1/6 sticky top-20  w-[100vw] h-full py-10 pl-6`}>

          <ul className="gap-y-5 flex flex-col overflow-x-hidden ">
            <li className="flex items-center gap-x-4 hover:bg-gray-100 cursor-pointer px-4 py-2">
              <HomeImg />
              <p className="w-fit">Home</p>
            </li>
            <li className="flex items-center gap-x-4 hover:bg-gray-100 cursor-pointer px-4 py-2">
              <Program />
              <p className="w-fit">Program</p>
            </li>
            <li className="flex items-center gap-x-4 border-l-4 bg-gray-100 py-2 px-4 border-[#595959]">
              <PeopleImg />
              <p className="w-fit">People</p>
            </li>
            <li className="flex items-center gap-x-4 hover:bg-gray-100 cursor-pointer px-4 py-2">
              <Activity />
              <p className="w-fit">Activity</p>
            </li>
            <li className="flex items-center gap-x-4 hover:bg-gray-100 cursor-pointer px-4 py-2">
              <Billing />
              <p>Billing</p>
            </li>
            <li className="flex items-center gap-x-4 hover:bg-gray-100 cursor-pointer px-4 py-2">
              <Marketplace />
              <p className="w-fit">Marketplace</p>
            </li>
            <li className="flex items-center gap-x-4 hover:bg-gray-100 cursor-pointer px-4 py-2">
              <Insight />
              <p className="w-fit">Insight</p>
            </li>
          </ul>
          <ul className="w-fit flex flex-col mt-3 ml-2 gap-4  md:hidden ">

            <li className="bg-gray-100 rounded-l-full flex justify-center items-center gap-x-3 rounded-r-full  px-4 py-2 "> <p className="p-1 w-1 h-1 rounded-full bg-green-400"
            ></p> Active</li>
            <li className="bg-gray-100 rounded-l-full flex justify-center items-center gap-x-3 rounded-r-full px-4 py-2"> <Help /> Help</li>
            <li className="bg-black w-fit text-white  rounded-full ml-2 p-2">CV </li>
          </ul>

        </div>
    )
}