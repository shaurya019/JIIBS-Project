 "use client" 
import { SideBar } from '@/app/components/Sidebar/SideBar';
import React,{useState} from 'react';
import Add from '../../assets/Images/Add';
import Export from '../../assets/Images/Export';
import Download from '../../assets/Images/Download';
import Search from '../../assets/Images/Search';
import DownVector from '../../assets/Images/DownVector'

interface PeopleProps {
    togglePanel: () => void;
    sideBar: boolean;
}

export const People: React.FC<PeopleProps> = ({ togglePanel, sideBar }) => {
    return (
        <>
            <div className={`${sideBar ? "hidden" : "block"} divide-y px-4 md:w-5/6 lg:5/6 w-full md:block`}>
          <div className="py-6 gap-y-6 flex flex-col">
            <h1 className="text-2xl font-bold md:text-3xl">People</h1>

            <div className="flex flex-row text-xs font-medium gap-x-4 relative">
              <h3 className="relative">
                People
                <div className="absolute left-0 bottom-[-6px] w-[50px] h-1 bg-[#595959]"></div>
              </h3>
              <h3 className="relative">Properties</h3>
              <div className="absolute left-0 bottom-[-6px] w-full h-1 bg-[#F3F3F3] z-[-1]"></div>
            </div>


            <div className="flex flex-col w-full">

              <div className="flex flex-row text-xs w-full mb-4 justify-between items-center md:hidden">
                <div className="flex flex-row justify-center items-center w-full gap-x-2">
                  <div className="flex basis-5/6 flex-row justify-normal items-center pl-6 pr-3 py-2 mr-2 border rounded-[36px] border-[#F3F3F3] bg-[#F3F3F3] text-black">
                    <div className="pr-[5px]">
                      <Search />
                    </div>
                    <h3>Search by name or email</h3>
                  </div>
                  <button
                    onClick={togglePanel}
                    className="flex justify-center items-center basis-1/6 border py-1 rounded bg-[#F3F3F3]"
                  >
                    <DownVector />
                  </button>

                </div>
              </div>

              <div className="flex flex-row text-xs w-full justify-between items-center md:hidden">
                <div className="flex flex-row justify-center items-center w-full gap-x-2">
                  <button className="flex flex-row justify-center items-center flex-grow px-3 py-1 border rounded-[36px] border-black bg-black text-white text-center">
                  <Export color="white"/>
                  <h3 className="ml-2">Export</h3>
                  </button>
                  <button
                    onClick={togglePanel} className="flex flex-row justify-center items-center flex-grow px-3 py-1 border rounded-[36px] bg-[#F3F3F3] text-center">
                  <Add color="black" />
                  <h3 className="ml-2">Add</h3>
                  </button>
                </div>
              </div>

              {/* This part will show for screens larger than md */}
              <div className="hidden md:flex flex-row text-xs justify-between items-center">
                <div className="flex flex-row justify-start items-center">
                  <div className="px-3 py-1 mr-2 border rounded-[36px] border-black bg-black text-white">
                    <h3>Approved</h3>
                  </div>
                  <div className="px-3 py-1 border rounded-[36px] bg-[#F3F3F3]">
                    <h3>Awaiting Approval</h3>
                  </div>
                </div>
                <div className="flex flex-row justify-end items-center">
                  <div className="flex flex-row justify-normal items-center pl-6 pr-3 py-2 mr-2 border rounded-[36px] border-[#F3F3F3] bg-[#F3F3F3] text-black">
                    <div className="pr-[5px]">
                      <Search />
                    </div>
                    <h3>Search by name or email</h3>
                  </div>
                  <button className="flex flex-row justify-normal items-center py-2 px-3 border rounded bg-[#F3F3F3]">
                    <Export color="black"/>
                    <h3 className="ml-2">Export</h3>
                  </button>
                  <button className="flex flex-row mx-3 justify-normal items-center py-2 px-3 border rounded bg-[#F3F3F3]">
                    <Download />
                    <h3 className="ml-2">Bulk Add</h3>
                  </button>
                  <button
                    onClick={togglePanel}
                    className="flex flex-row justify-normal items-center py-2 px-3 border rounded bg-black text-white"
                  >
                    <Add />
                    <h3 className="ml-2">Add</h3>
                  </button>
                </div>
              </div>
            </div>



            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-black text-[15px] font-medium">
                    <th className="px-4 py-2 text-left">
                      <div className="flex flex-row items-center">
                        <input
                          type="checkbox"
                          className="w-[17px] h-[17px] mr-2 text-blue-600 border border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                        />
                        <span>Name</span>
                      </div>
                    </th>
                    <th className="px-4 py-2 text-left">Status</th>
                    <th className="px-4 py-2 text-left">Property</th>
                    <th className="px-4 py-2 text-left">Unit</th>
                    <th className="px-4 py-2 text-left">Role</th>
                    <th className="px-4 py-2 text-left">Last Invited</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-black text-[13px] font-medium">
                    <td className="flex flex-row items-center space-x-2 py-3 px-4">
                      <input
                        type="checkbox"
                        className="w-[17px] h-[17px] text-blue-600 border border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                      />
                      <div className="flex flex-col">
                        <h3>John Doe</h3>
                        <h3>John@gmail.com</h3>
                      </div>
                    </td>
                    <td className="px-4 py-2">
                      <div className="bg-[#EAF6ED] h-5 w-[56px] text-center text-[#1E6E3F] rounded-[3.5px]">
                        Active
                      </div>
                    </td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2">Admin</td>
                    <td className="px-4 py-2">ABC</td>
                    <td className="px-4 py-2">08/15/2024</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        </>
    );
};
