import React from 'react'

interface SidePanelProps {
  togglePanel: () => void;
  isOpen: boolean;
}

export const SidePanel: React.FC<SidePanelProps> = ({ togglePanel, isOpen }) => {
  return (
    <div className="relative">
      <div
        className={`fixed top-0 right-0 h-full w-2/3 md:w-1/2 bg-white shadow-lg transition-transform duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "translate-x-full"
          } z-50`}>
        <div className="flex flex-col mt-16 text-[13px] font-semibold text-start items-start p-4">
          <h2 className="text-left">Edit</h2>
          <label className="mt-4">First Name</label>
          <input
            type="text"
            className="bg-[#F3F3F3] rounded px-2 py-1 mb-2 w-full"
          />

          <label>Last Name</label>
          <input
            type="text"
            className="bg-[#F3F3F3] rounded px-2 py-1 mb-2 w-full"
          />

          <label>Phone Number</label>
          <input
            type="text"
            className="bg-[#F3F3F3] rounded px-2 py-1 mb-2 w-full"
          />

          <label>Email</label>
          <input
            type="email"
            className="bg-[#F3F3F3] rounded px-2 py-1 mb-2 w-full"
          />

          <label>Property</label>
          <select
            className="bg-[#F3F3F3] rounded px-2 py-1 mb-2 w-full"
          >
            <option value="" disabled selected> </option>
            <option value="ABC1">ABC</option>
            <option value="ABC2">ABC</option>
            <option value="ABC3">ABC</option>
          </select>

          <label>Unit</label>
          <input
            type="text"
            className="bg-[#F3F3F3] rounded px-2 py-1 mb-2 w-full"
          />

          <div className="flex flex-col items-center gap-2 mt-4 w-full">
            <button
              onClick={togglePanel}
              className="bg-black w-full h-[43px] text-white rounded"
            >
              Save
            </button>
            <button
              onClick={togglePanel}
              className="bg-[#F3F3F3] w-full h-[43px] text-black rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

