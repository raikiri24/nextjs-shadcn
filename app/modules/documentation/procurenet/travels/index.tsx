import React from "react";
import { Separator } from "@/components/ui/separator";

import { ScanEye, Plane } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CarouselComponent } from "./components/carousel-component";
import OnThisPage from "./components/on-this-page";
import AccordionComponent from "./components/accordion-component";

const TravelsPage = () => {
  return (
    <div className=" w-full py-10 mb-20">
      <div className="grid grid-cols-9 grid-rows-5 gap-4">
        <div className="col-span-7 row-span-5">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <Plane />
            Travels
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
            <AccordionComponent
              title="Can Anyone access ProcureNet?"
              content="Travel PR will be accessible to all. But the Goods and
                    Service PR will be limited to Managers, and assigned POC’s
                    for requisition."
            />
            <AccordionComponent
              title="How do I track my purchase and travel requests?"
              content="You can track it through the Travel PR dashboard"
            />
            <AccordionComponent
              title="Can Anyone access ProcureNet?"
              content="Travel PR will be accessible to all. But the Goods and
                    Service PR will be limited to Managers, and assigned POC’s
                    for requisition."
            />
            <AccordionComponent
              title="Where do I go to edit my purchase or travel request in case the approver rejects it?"
              content="TPR Dashboard under the “Rejected” bucket."
            />
            <AccordionComponent
              title="Can I create a purchase or travel request and save it as a draft, then come back to it a later time?"
              content="Yes. It will appear on the Travel Module draft dashboard"
            />
            <AccordionComponent
              title="Can I still edit my purchase or travel request once it has been submitted?"
              content="No. Submitted PR’s are already routed in the approvers dashboard."
            />

            <AccordionComponent
              title="What will happen to requests that were not completed and submitted?"
              content="It will be saved as a draft and you can access it in the TPR dashboard"
            />

            <AccordionComponent
              title="What if I don't have the estimated costs of flights and/or hotels, can I leave them blank and still submit the request?"
              content="No, travelers are encouraged to conduct travel services research."
            />

            <AccordionComponent
              title="What is the recommended lead time for creating a purchase and travel request?"
              content="30 calendar days."
            />

            <AccordionComponent
              title="For urgent purchase and travel requests, are we supposed to send these within ProcureNet?"
              content="30 calendar days."
            />

            <AccordionComponent
              title="Can I choose any airline/hotel for my travel request?"
              content="Refer to the Travel Policy"
            />

            <AccordionComponent
              title="If I will be travelling multiple times in a certain period, can I submit just 1 request?"
              content="Different request per travel; If multiple travels are planned - we encourage for the departments to share their travel calendars to procurement and EA for budget planning"
            />

            <AccordionComponent
              title="My request is not moving and still pending with the approver. Is there a way to follow up the PR within ProcureNet?"
              content="None. You need to reach out directly to the approver."
            />

            <AccordionComponent
              title="As a traveller, do I need to submit a separate request for budget?"
              content="No. A ticket will automatically generate to Finance for the processing of the budget based on the approved requests"
            />

            <AccordionComponent
              title="Can I cancel my request if the request has been approved by my immediate supervisor?"
              content="Need - answer"
            />

            <AccordionComponent
              title="For travel request, can I attach or upload an attachment of approval for additional travel specific requests if the request has been already approved by the Procurement Officer?"
              content="Need - answer"
            />
            <AccordionComponent
              title="Can I add the details of my preferred vendor on both purchase or travel request if the vendor is not on the list?"
              content="Need - answer"
            />
            <AccordionComponent
              title="Who will I reach out to to add/change/remove POCs?"
              content="Need - answer"
            />

            <AccordionComponent
              title="What are the requirements needed when submitting a purchase request for both Goods and Service?"
              content="Need - answer"
            />

            <AccordionComponent
              title="Do we have a purchasing threshold? And who will need to approve?"
              content="Yes. Any purchases reaching or exceeding 100k will require the approval of the CFO. SaaS and Fitout Projects and 500k and above will require the CEO’s approval."
            />

            <AccordionComponent
              title="I submitted a request but it's not reflecting in my dashboard, what can I do?"
              content="Depending on your internet speed, data can take some time to sync. To manually refresh and sync the data, you can click the SYNC button near the dropdown button. "
            />

            <AccordionComponent
              title="Can I submit/approve purchase requests using my mobile device? Or any other device?"
              content="As long as you have work profile on those devices, yes you can"
            />

            <AccordionComponent
              title="Where do I go to edit my request in case the approver rejects it?"
              content="Need answer"
            />
            <AccordionComponent
              title="Can I submit a single request for multiple transactions? "
              content="Need answer"
            />
            <AccordionComponent
              title="Where can I submit feedback or suggestions for improvement?"
              content="Need answer"
            />
          </div>
        </div>
        <OnThisPage />
      </div>
    </div>
  );
};

export default TravelsPage;
