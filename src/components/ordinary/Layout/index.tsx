import React from "react";

import { MetaTags, Header, Footer } from "@components/simple";

const Layout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <>
      <MetaTags />
      {children}
    </>
  );
};

export default Layout;
