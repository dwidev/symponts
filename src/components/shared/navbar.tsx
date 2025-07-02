"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";
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
import { cn } from "@/lib/utils";

type NavItem = {
  name: string;
  href: string;
};

export default function Navbar() {
  const path = usePathname();
  const includeNav = path.includes("/dashboard");

  const navItems: NavItem[] = [
    { name: "Symptom Checker", href: "/dashboard" },
    { name: "Track Symptom", href: "/track" },
    { name: "My Conditions", href: "/conditions" },
  ];

  return (
    includeNav && (
      <header className="z-20 top-0 w-full fixed bg-white dark:bg-black">
        <div className="flex flex-row items-center justify-between px-15 py-2">
          <div className="flex flex-row items-center">
            <h1 className="font-bold mr-3">SymptomAI</h1>
            <button
              className="p-2 mr-5 rounded-full border hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer"
              aria-label="Toggle theme"
            >
              <BsMoon />
            </button>
          </div>
          <div className="flex flex-row items-center">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((nav, index) => {
                  const isActive = path.includes(nav.href);
                  return (
                    <React.Fragment key={index}>
                      <NavigationMenuItem>
                        <NavigationMenuLink
                          asChild
                          className={cn(
                            "mx-1 px-4 py-2",
                            isActive && "bg-muted"
                          )}
                        >
                          <Link
                            href={nav.href}
                            className={cn(isActive && "font-semibold")}
                          >
                            {nav.name}
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    </React.Fragment>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    hiddenIcon={false}
                    className="bg-transparent p-0 hover:bg-transparent focus:outline-none mx-3"
                  >
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
                          <Link href="/signout">Logout</Link>
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
