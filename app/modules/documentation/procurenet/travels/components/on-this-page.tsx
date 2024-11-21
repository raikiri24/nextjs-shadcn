import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const OnThisPage = () => {
  return (
    <div className="col-span-2 row-span-5 col-start-8">
      <h1 className="font-bold">On This Page</h1>
      <Separator className="my-4" />
      <div className="flex flex-col text-sm gap-2">
        <Link href="#Overview" scroll={true}>
          <span className=" font-bold">Overview</span>
        </Link>

        <div>
          <Link href="#Goods" scroll={true}>
            <span className=" font-bold">Goods</span>
          </Link>
          <ul className=" list-disc ml-4 text-xs text-gray-600">
            <li>
              <Link href="#SyncVendors" scroll={true}>
                <span className="font-semibold">Sync Vendors</span>
              </Link>
            </li>
            <li>
              <Link href="#SyncDepartments" scroll={true}>
                <span className="font-semibold">Sync Departments</span>
              </Link>
            </li>
            <li>
              <Link href="#SyncClassifications" scroll={true}>
                <span className="font-semibold">Sync Classifications</span>
              </Link>
            </li>
            <li>
              <Link href="#SyncItems" scroll={true}>
                <span className="font-semibold">Sync Items</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OnThisPage;
