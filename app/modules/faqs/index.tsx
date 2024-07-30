"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const FAQPage = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  );

  return (
    <div className="w-full">
      <div className="flex gap-4 flex-col">
        <h1 className=" font-bold text-2xl">
          How to create a Purchase Request?
        </h1>
        <Carousel
          className="w-full max-w-lg"
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            <CarouselItem>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="flex flex-col gap-4">
                      <Image
                        src="/image/Homepage.jpg"
                        alt="test"
                        width={400}
                        height={400}
                        className=" shadow-lg"
                      />
                      <p>1. Choose what request you will file</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="flex flex-col gap-4 justify-center items-center">
                      <Image
                        src="/image/Homepage-Goods-Drawer.jpg"
                        alt="test"
                        width={400}
                        height={400}
                        className=" shadow-lg"
                      />
                      <p>2. Fill up the needed information in Product Form</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="flex flex-col gap-4">
                      <Image
                        src="/image/After-Goods-Form.jpg"
                        alt="test"
                        width={400}
                        height={400}
                        className=" shadow-lg"
                      />
                      <p>
                        3. Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Officiis vitae earum, ex autem quisquam rem
                        commodi cum, ipsa et corrupti eveniet aliquid ullam
                        delectus molestiae sequi fuga ab?
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQPage;
