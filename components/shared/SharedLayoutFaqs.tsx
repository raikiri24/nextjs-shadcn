"use client";
import React from "react";

import { Provider } from "react-redux";
import store from "@/lib/_redux/store";
import NavigationHeader from "./components/navigation-header";
import SidebarFaqs from "./components/sidebar-menu-faqs";

const SharedLayoutFaqs = ({ children }: React.PropsWithChildren) => {
  return (
    <Provider store={store}>
      <NavigationHeader />
      <div className="flex gap-2  px-10">
        <SidebarFaqs className=" w-96 " />
        {children}
      </div>
    </Provider>
  );
};

export default SharedLayoutFaqs;
