import * as React from "react";

import Image from "next/image";

export function CarouselComponent() {
  return (
    <div className="">
      <h1 className="text-2xl font-bold">Workflow Design</h1>
      <Image
        src="/workflow.png"
        alt="workflow-image"
        width={1000}
        height={1000}
      ></Image>
    </div>
  );
}
