"use client";
import React, { useState, useEffect } from "react"; 
import Image from "next/image";
import LogoutIcon from "../../public/icon/logout.svg";
import Logo from "./logo";
import More from "../../public/icon/more.svg";
import Star from "../../public/icon/star.svg";
import AddMore from "../../public/icon/addSquare.png";

// Function to generate a random hex color
const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default function Sidebar({ workspaces = [], favoriteWorkspaces = [], onAddWorkspace }) {
  const [showForm, setShowForm] = useState(false);
  const [newWorkspace, setNewWorkspace] = useState("");
  const [selectedWorkspace, setSelectedWorkspace] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  // Handle the form submission for updating workspace details
  const handleUpdateWorkspace = (e) => {
    e.preventDefault();
    if (selectedWorkspace && newWorkspace) {
      // Update logic for the selected workspace
      console.log(`Updated workspace: ${selectedWorkspace.workspaceName} to ${newWorkspace}`);
      setShowForm(false); // Hide the form after update
    }
  };

  // Handle adding a new workspace
  const handleAddWorkspace = (e) => {
    e.preventDefault();
    if (newWorkspace) {
      onAddWorkspace(newWorkspace); // Trigger the function to add a new workspace
      setNewWorkspace(""); // Clear input after adding
    }
  };

  // Set mounted to true after the component has mounted (client-side only)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Only render the component after it has mounted on the client side
  if (!isMounted) {
    return null; // Avoid hydration error
  }

  return (
    <aside className="hidden w-[500px] bg-[#F8FAFC] md:block h-screen overflow-auto">
      <div className="p-10 text-2xl uppercase text-center tracking-wides">
        <a href="/">
          <Logo />
        </a>
      </div>
      <nav className="text-sm text-gray-300">
        {/* Workspaces and Add More button */}
        <div className="flex justify-between items-center px-4">
          <h2 className="text-[#94A3B8] font-bold text-2xl">Workspaces</h2>
          <Image
            src={AddMore}
            alt="Add More"
            className="cursor-pointer"
            onClick={() => setShowForm(true)} // Show form to add workspace
          />
        </div>
        <ul>
          {workspaces.length > 0 ? (
            workspaces.map((workspace) => (
              <li key={workspace.workspaceId} className="px-4 py-2 flex justify-between">
                {/* Random color circle */}
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: generateRandomColor() }}
                ></div>
                <a href="#" className="text-[#94A3B8] font-bold">
                  {workspace.workspaceName}
                </a>
                <Image
                  src={More}
                  alt="More"
                  className="cursor-pointer"
                  onClick={() => {
                    setSelectedWorkspace(workspace);
                    setShowForm(true); // Show form for updating workspace
                  }}
                />
              </li>
            ))
          ) : (
            <p className="text-gray-500 px-4 py-2">No workspaces available</p>
          )}
        </ul>

        {/* Favorite Workspace Section */}
        <div className="px-4 flex items-center gap-2 justify-between">
          <h2 className="text-[#94A3B8] font-bold text-2xl">Favorite</h2>
          <Image src={Star} alt="Star icon" />
        </div>

        <ul>
          {favoriteWorkspaces.length > 0 ? (
            favoriteWorkspaces.map((workspace) => (
              <li key={workspace.workspaceId} className="px-4 py-2 flex justify-between">
                {/* Random color circle for favorite */}
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: generateRandomColor() }}
                ></div>
                <a href="#" className="text-[#94A3B8] font-bold">
                  {workspace.workspaceName}
                </a>
                <Image src={More} alt="image" />
              </li>
            ))
          ) : (
            <p className="text-gray-500 px-4 py-2">No favorite workspaces available</p>
          )}
        </ul>

        {/* Logout Button */}
        <a
          href="/"
          className="px-4 my-20 flex items-center gap-2 text-[#94A3B8] font-bold text-2xl"
        >
          <Image src={LogoutIcon} alt="logout" className="w-6 h-6" />
          Logout
        </a>
      </nav>

      {/* Form to add or update workspace */}
      {showForm && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">{selectedWorkspace ? "Update Workspace" : "Add Workspace"}</h2>
            <form onSubmit={selectedWorkspace ? handleUpdateWorkspace : handleAddWorkspace}>
              <input
                type="text"
                className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                value={newWorkspace}
                onChange={(e) => setNewWorkspace(e.target.value)}
                placeholder="Enter workspace name"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-md"
              >
                {selectedWorkspace ? "Update" : "Add"} Workspace
              </button>
            </form>
            <button
              className="mt-4 w-full bg-red-500 text-white p-2 rounded-md"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}
