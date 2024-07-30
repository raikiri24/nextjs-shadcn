import React from "react";
import { Separator } from "@/components/ui/separator";

import { UserRoundPlus, Link as LinkIcon, Users } from "lucide-react";
import Link from "next/link";

const ListEmployeesPage = () => {
  return (
    <div className=" w-full py-10">
      <div className="grid grid-cols-9 grid-rows-5 gap-4 ">
        <div className="col-span-7 row-span-5 h-screen">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-10">
            <Users />
            List all Employees
          </h2>
          <div>
            <h1
              className="text-2xl font-bold flex items-center gap-2"
              id="Overview"
            >
              <LinkIcon />
              Overview
            </h1>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In,
              inventore.
            </p>
          </div>
          <Separator className="my-4" />
        </div>
        <div className="col-span-2 row-span-5 col-start-8">
          <h1 className="font-bold">On This Page</h1>
          <Separator className="my-4" />
          <div className="flex flex-col text-sm gap-2">
            <Link href="#Overview" scroll={true}>
              <span className=" font-bold">Overview</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListEmployeesPage;
