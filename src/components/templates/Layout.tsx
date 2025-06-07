import React from "react";
import { AppFooter } from "../molecules/Footer";
import AppHeader from "../molecules/Header";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppHeader />
      {children}
      <AppFooter />
    </>
  );
}

export default Layout;
