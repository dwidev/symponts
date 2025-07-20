"use client";
import { Moon, Sun } from "lucide-react";
import React from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = React.useState(false);
  return (
    <div className="flex justify-center">
      <button
        onClick={() => setIsDark(!isDark)}
        className={`
                relative h-10 w-20 rounded-full p-1 transition-all duration-500 ease-in-out
                ${!isDark ? "app-gradient" : "app-dark-gradient"}
                hover:scale-80
                transform active:scale-80
                scale-70
              `}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      >
        <div
          className={`
                  absolute top-1 w-8 h-8 bg-white rounded-full shadow-md
                  transform transition-all duration-500 ease-in-out
                  flex items-center justify-center
                  ${isDark ? "translate-x-10" : "translate-x-0"}
                `}
        >
          <div className="relative w-5 h-5">
            <Sun
              className={`
                      absolute inset-0 w-5 h-5 text-orange-400
                      transition-all duration-500 ease-in-out
                      ${
                        isDark
                          ? "opacity-0 rotate-90 scale-75"
                          : "opacity-100 rotate-0 scale-100"
                      }
                    `}
            />
            <Moon
              className={`
                      absolute inset-0 w-5 h-5 text-cyan-700
                      transition-all duration-500 ease-in-out
                      ${
                        isDark
                          ? "opacity-100 rotate-0 scale-100"
                          : "opacity-0 -rotate-90 scale-75"
                      }
                    `}
            />
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-between px-2">
          <Sun
            className={`
                    w-4 h-4 text-white/70 transition-all duration-300
                    ${isDark ? "opacity-30" : "opacity-70"}
                  `}
          />
          <Moon
            className={`
                    w-4 h-4 text-white/70 transition-all duration-300
                    ${isDark ? "opacity-70" : "opacity-30"}
                  `}
          />
        </div>
      </button>
    </div>
  );
}
