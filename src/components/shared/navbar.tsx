import React from "react";
import ThemeToggle from "../ui/theme-toggle";

export default function Navbar() {
  return (
    <header className="z-20 top-0 w-full fixed">
      <div className="flex flex-row items-center justify-start px-2 py-3">
        <ThemeToggle />
      </div>
    </header>
  );
}
