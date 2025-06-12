"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";
import React from "react";
import { BsMoon } from "react-icons/bs";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function Navbar() {
  const path = usePathname();
  const includeNav = path.includes("/dashboard");
  return (
    includeNav && (
      <header className="z-10 top-0 sticky bg-white dark:bg-black">
        <div className="flex flex-row items-center justify-between px-15 py-5">
          <div className="flex flex-row items-center">
            <h1 className="font-bold mr-3">SymptomAI</h1>
            <button
              //   onClick={toggleTheme}
              className="p-2 mr-5 rounded-full border hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer"
              aria-label="Toggle theme"
            >
              {/* <BsSun className="text-yellow-400 w-5 h-5" /> */}
              <BsMoon className="text-gray-800 w-5 h-5" />
            </button>
          </div>
          <div className="flex flex-row items-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-4 py-2">
                    <Link href="/dashboard">Symptom Checker</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-4 py-2">
                    <Link href="/medical-history">Health Records</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink>
                    <Link href="/">My Conditions</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent p-0 hover:bg-transparent focus:outline-none mx-3">
                    <Avatar className="size-10 cursor-pointer">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        className="object-center rounded-full"
                        alt="user avatar"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[200px] p-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href="/profile">My Profile</Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <button>Logout</button>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>EN</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>English</NavigationMenuLink>
                    <NavigationMenuLink>Indonesian</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </header>
    )
  );
}
