"use client";
import { Sidebar } from "@/components/shared/SideNav";
import React from "react";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";
import { useStore } from "@/hooks/use-store";
import { cn } from "@/lib/utils";
import NavigationHeader from "@/components/shared/components/navigation-header";
const Page = () => {
  const sidebar = useStore(useSidebarToggle, (state) => state);
  return (
    <div className="flex">
      <Sidebar />
      <main
        className={cn(
          "min-h-[calc(100vh_-_56px)] transition-[margin-left] ease-in-out duration-300 w-full",
          sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
        )}
      >
        <NavigationHeader />
      </main>
    </div>
  );
};

export default Page;
