import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-14 bg-background border-b flex items-center">
      <div className="w-full flex items-center justify-between gap-6 max-w-screen-md mx-auto px-4">
        <span className="text-base font-medium text-emerald-500">AI-AGENT</span>
        <span className="text-base font-medium text-emerald-500">AI-AGENT</span>
      </div>
    </nav>
  );
};

export default Navbar;
