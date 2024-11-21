import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionComponent = ({ title, content }: any) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <span className="font-bold">{title}</span>
        </AccordionTrigger>
        <AccordionContent>
          <span>{content}</span>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionComponent;
