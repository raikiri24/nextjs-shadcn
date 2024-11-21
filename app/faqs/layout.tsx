"use client";
import SharedLayout from "@/components/shared/SharedLayout";
import React from "react";
const DocumentationLayout = ({ children }: React.PropsWithChildren) => {
  return <SharedLayout>{children}</SharedLayout>;
};

export default DocumentationLayout;
