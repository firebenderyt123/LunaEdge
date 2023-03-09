import React from "react";

import { Header, Footer } from "@components/simple";

const Layout: React.FC = ({ children }) => {
  return (
    <div id="main">
      <div className="background"></div>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
