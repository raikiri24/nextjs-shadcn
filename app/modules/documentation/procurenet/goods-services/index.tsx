import React from "react";
import { Separator } from "@/components/ui/separator";

import { FilePen, ScanEye } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CarouselComponent } from "./components/carousel-component";
import OnThisPage from "./components/on-this-page";

const GoodsServicesPage = () => {
  return (
    <div className=" w-full py-10 mb-20">
      <div className="grid grid-cols-9 grid-rows-5 gap-4">
        <div className="col-span-7 row-span-5">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <FilePen />
            Goods and Services
          </h2>
          <div>
            <h1
              className="text-2xl font-bold flex items-center gap-2"
              id="Overview"
            >
              <ScanEye />
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
          <div className="flex justify-center">
            <CarouselComponent />
          </div>
          <Separator className="mt-4" />
          <div className="flex flex-col gap-4">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <span className="font-bold">
                    What is the recommended lead time for creating a purchase
                    request? <span className="text-[#1d364e]">Normal PR.</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  Requests must be submitted 14 days prior to the required
                  delivery/service date. Requestors are encouraged to do our due
                  diligence in estimating our PR submission in line with the
                  provided lead time.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <span className="font-bold">
                    What is a <span className="text-[#e83760]">rush</span> PR?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  If the request was placed 7 days from the required
                  delivery/service date. However, rush requests are highly
                  discouraged.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <span className="font-bold">
                    For urgent purchase requests, are we supposed to send these
                    within ProcureNet?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <span>
                    No, Urgent/Rush PR requests must be submitted to
                    <span className="text-[#e83760]">
                      {" "}
                      procurement@enshored.com.
                    </span>
                  </span>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <span className="font-bold">
                    Can Anyone access ProcureNet?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <span>
                    ProcureNet access will be limited to Managers, and assigned
                    POC’s for requisition.
                  </span>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <span className="font-bold">
                    Who will I reach out to to add/change/remove POCs?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <span>
                    You can reach out to our procurement team
                    <span className="text-[#e83760]">
                      {" "}
                      procurement@enshored.com
                    </span>{" "}
                    to update the approval workflow The team will then send the
                    requests to update the needed credentials to our IT and Data
                    science team.
                  </span>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <span className="font-bold">
                    What are the requirements needed when submitting a purchase
                    request for both Goods and Service?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <span>
                    Refer to the policy that will be released after the
                    completion of all walkthrough sessions.
                  </span>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <span className="font-bold">
                    Do we have a purchasing threshold? And who will need to
                    approve?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <span>
                    Yes. Any purchases reaching or exceeding 100k will require
                    the approval of the CFO. SaaS and Fitout Projects and 500k
                    and above will require the CEO’s approval.
                  </span>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <span className="font-bold">
                    I cannot access the ProcureNet, what can I do to
                    troubleshoot?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <span>
                    Check if you are using Enshored email, or reach out to
                    <span className="text-[#e83760]">
                      {" "}
                      procurement@enshored.com.
                    </span>
                  </span>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <span className="font-bold">
                    I submitted a request but its not reflecting in my
                    dashboard, what can I do?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <span>
                    Depending on your internet speed, data can take some time to
                    sync. To manually refresh and sync the data, you can click
                    the SYNC button near the dropdown button.
                  </span>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <span className="font-bold">
                    Can I submit/approve purchase requests using my mobile
                    device? Or any other device?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <span>
                    As long as you have work profile on those devices, yes you
                    can
                  </span>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <span className="font-bold">
                    Where do I go to edit my request in case the approver
                    rejects it?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <span>Purchase Request dashboard - Goods/Service</span>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <span className="font-bold">
                    Can I still edit my purchase request once it has been
                    submitted?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <span>
                    No. Submitted PR’s are already routed in the approvers
                    dashboard.
                  </span>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <span className="font-bold">
                    Can I submit a single request for multiple transactions?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <span>
                    Service requests are required to submit different PRs. Mixed
                    items in a single Goods request are accepted given that
                    these are for the same purpose and department.
                  </span>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <OnThisPage />
      </div>
    </div>
  );
};

export default GoodsServicesPage;
