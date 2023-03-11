import React from "react";

import { siteName } from "@config/siteConfig";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-3">
        <div className="d-flex justify-content-center">
          <p className="m-0">&copy; 2023 {siteName}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
