import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 gap-5">
      <Image
        src="/page-not-found.svg"
        width={400}
        height={400}
        alt="page not found"
      ></Image>
      <h1 className="font-bold text-2xl ">Page not found</h1>
      <Button>
        <Link href="/">Return to home</Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;
