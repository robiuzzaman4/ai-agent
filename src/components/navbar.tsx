import React from "react";
import ThemeToggle from "@/components/theme-toggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-14 bg-background border-b flex items-center z-50">
      <div className="w-full h-full flex items-center justify-between gap-6 max-w-screen-md mx-auto px-4 border-x">
        <Link href="/chat" className="text-base font-medium text-primary">
          AI-AGENT
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
