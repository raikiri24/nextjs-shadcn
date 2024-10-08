import React from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import CodeBlock from "@/components/CodeBlock";
import { SquareArrowUpRight, Link as LinkIcon, RefreshCw } from "lucide-react";

const OutboundDocsPage = () => {
  return (
    <div className=" w-full py-10">
      <div className="grid grid-cols-9 grid-rows-5 gap-4 ">
        <div className="col-span-7 row-span-5 h-screen">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-10">
            <SquareArrowUpRight />
            ProcureNet Outbound
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
              This API facilitates the synchronization of departments, vendors,
              classifications, and items from NetSuite to Google Sheets. The API
              ensures that data is consistently updated and available in Google
              Sheets for reporting and analysis purposes.
            </p>
          </div>
          <Separator className="my-4" />
          <div className="flex flex-col gap-4">
            <h1
              className="text-2xl font-bold flex items-center gap-2"
              id="Endpoints"
            >
              <LinkIcon /> Endpoints
            </h1>
            <div className="flex flex-col gap-2">
              <h3
                className="text-sm font-semibold flex items-center gap-2"
                id="CreatePO"
              >
                <RefreshCw size={16} /> Create Purchase Order
              </h3>

              <p>
                Syncs vendor data from NetSuite to a specified Google Sheets
                document.
              </p>

              <h1 className="font-bold text-gray-600">Request Example</h1>
              <CodeBlock
                language="bash"
                value={`curl -X POST https://api.example.com/procurenet/outbound`}
              />
            </div>
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

            <div>
              <Link href="#Endpoints" scroll={true}>
                <span className=" font-bold">Endpoints</span>
              </Link>
              <ul className=" list-disc ml-4 text-xs text-gray-600">
                <li>
                  <Link href="#CreatePO" scroll={true}>
                    <span className="font-semibold">Create Purchase Order</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutboundDocsPage;
