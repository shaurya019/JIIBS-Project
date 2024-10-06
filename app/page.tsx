"use client";
import { SideBar } from "@/app/components/Sidebar/SideBar";
import React, { useState } from "react";
import {NavBar} from "./components/Navbar/NavBar";
import { People } from "./pages/People/People";
import { SidePanel } from "./components/SidePanel/SidePanel";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [sideBar, setSlideState] = useState(false);


  const toggleSideBar = () => {
    setSlideState(!sideBar);
  }

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="divide-y">
      <NavBar toggleSideBar={toggleSideBar} sideBar={sideBar} />
      <main className="flex flex-grow md:divide-x">
        <SideBar togglePanel={togglePanel}  sideBar={sideBar}/>
        <People togglePanel={togglePanel} sideBar={sideBar}/>
      </main>
      <SidePanel togglePanel={togglePanel} isOpen={isOpen} />
    </div>
  );
}
