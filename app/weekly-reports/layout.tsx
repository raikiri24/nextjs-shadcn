"use client";
import SharedLayoutLoggedIn from "@/components/shared/SharedLayoutLoggedIn";
import React from "react";
const DocumentationLayout = ({ children }: React.PropsWithChildren) => {
  return <SharedLayoutLoggedIn>{children}</SharedLayoutLoggedIn>;
};

export default DocumentationLayout;
