"use client";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Home() {
  const { setTheme } = useTheme();

  return (
    <main className="px-10 py-4">
      <div className="w-full">
        <NavigationMenu className="max-w-full justify-between ">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  UNITE
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/documentation" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/faqs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  FAQs
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/login" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Login
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="h-screen bg-[url('/image/homepage-bg.svg')] bg-cover relative">
        <div className="pt-10 flex flex-col gap-12 justify-center items-center">
          <h1 className="text-center ">Software Development</h1>
          <h1 className="text-7xl font-bold ">
            Unified Integration Technology Engine
          </h1>
        </div>
        <div className=" px-96 py-10 ">
          <div className="w-full h-96 shadow-xl rounded-2xl relative">
            <div className=" w-1/6 h-96   shadow-xl rounded-2xl absolute bottom-[-10rem] left-10"></div>
          </div>
        </div>
        <div className="absolute w-28 h-28 rounded-full bg-gray-700 border-white border-8 bottom-28 right-28"></div>
        <div className="absolute w-28 h-28 rounded-full bg-gray-700 border-white border-8 bottom-64 left-28"></div>
        <div className="absolute w-28 h-28 rounded-full bg-gray-700 border-white border-8 bottom-[-4rem] right-44"></div>
        <div className="absolute w-36 h-36 rounded-full bg-gray-700 border-white border-8 bottom-[-4rem] left-44"></div>
      </div>

      <div className=" h-screen flex py-24 px-44">
        <div className="w-1/3 flex flex-col gap-10">
          <h1 className="font-bold">Introduction</h1>
          <h1 className="font-bold text-4xl">About the Platform</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque consectetur finibus purus, quis efficitur quam.
            Vestibulum at congue nulla. Pellentesque et tristique leo.
          </p>
          <h1 className=" font-bold text-xl">Main Goals</h1>
          <div className="flex gap-4">
            <span className="px-1 border-4 border-white rounded-full bg-[#2EC7FF] h-4 shadow-md"></span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              dolores cum incidunt quasi! Cupiditate, vitae at. Similique, et
              beatae. Nulla, doloremque quos iste facilis, pariatur libero
              voluptatem natus voluptatibus nemo ad impedit dicta asperiores
              quidem doloribus. Consectetur magni alias modi molestiae optio?
            </p>
          </div>
          <h1 className=" font-bold text-xl">Project Tasks</h1>
          <div className="flex gap-4">
            <span className="px-1 border-4 border-white rounded-full bg-[#2EC7FF] h-4 shadow-md"></span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              dolores cum incidunt quasi! Cupiditate, vitae at. Similique, et
              beatae. Nulla, doloremque quos iste facilis, pariatur libero
              voluptatem natus voluptatibus nemo ad impedit dicta asperiores
              quidem doloribus. Consectetur magni alias modi molestiae optio?
            </p>
          </div>
        </div>

        <div className="w-2/3 bg-[url('/image/homepage-2-art.svg')] bg-contain bg-center bg-no-repeat flex justify-center items-center">
          <div className=" w-1/2 bg-gray-200 shadow-xl h-1/2 rounded-2xl relative">
            <div className=" w-44 bg-gray-200 shadow-xl h-12 rounded-2xl absolute left-6 bottom-[-4rem]"></div>
            <div className=" w-44 bg-gray-200 shadow-xl h-12 rounded-2xl absolute right-32 bottom-[-6rem]"></div>
            <div className=" w-44 bg-gray-200 shadow-xl h-12 rounded-2xl absolute left-[-4rem] bottom-12"></div>
          </div>
        </div>
      </div>

      <div className="h-screen flex p-20 ">
        <div className="flex flex-col bg-[#D9D9D9] w-full rounded-2xl p-20">
          <h1 className="text-[#C82951] font-bold">NAVIGATION ARCHITECTURE</h1>
          <h1 className="text-[#525051] font-bold text-4xl ">
            UNITE project manager side
          </h1>
        </div>
      </div>
      <div className="h-screen flex flex-col">
        <div className="flex flex-col p-20 w-full leading-10">
          <h1 className="text-[#F74A5C] font-bold text-center w-full">
            OVERVIEW
          </h1>
          <h1 className="text-[#F74A5C] text-4xl font-bold text-center w-full">
            Scope of the Project
          </h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque consectetur finibus purus, quis efficitur quam.
            Vestibulum at congue nulla. Pellentesque et tristique leo.
          </p>
        </div>
        <div className="p-20 justify-center gap-24 items-center flex">
          <div className="h-32 w-32 bg-[#D9D9D9] rounded-2xl"></div>
          <div className="h-32 w-32 bg-[#D9D9D9] rounded-2xl"></div>
          <div className="h-32 w-32 bg-[#D9D9D9] rounded-2xl"></div>
          <div className="h-32 w-32 bg-[#D9D9D9] rounded-2xl"></div>
          <div className="h-32 w-32 bg-[#D9D9D9] rounded-2xl"></div>
        </div>
        <div className="p-20 justify-center gap-24 items-center flex">
          <div className="h-32 w-32 bg-[#D9D9D9] rounded-2xl"></div>
          <div className="h-32 w-32 bg-[#D9D9D9] rounded-2xl"></div>
          <div className="h-32 w-32 bg-[#D9D9D9] rounded-2xl"></div>
          <div className="h-32 w-32 bg-[#D9D9D9] rounded-2xl"></div>
          <div className="h-32 w-32 bg-[#D9D9D9] rounded-2xl"></div>
        </div>
      </div>
    </main>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
