import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionComponent = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <span className="font-bold">Can Anyone access ProcureNet?</span>
        </AccordionTrigger>
        <AccordionContent>
          <span>
            ProcureNet access will be limited to Managers, and assigned POC’s
            for requisition.
          </span>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionComponent;
