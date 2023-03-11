import React from "react";
import Link from "next/link";

import { siteName } from "@config/siteConfig";

const MenuItemLink = ({ name, href = "#" }) => {
  return (
    <li className="nav-item">
      <Link className="nav-link" href={href}>
        {name}
      </Link>
    </li>
  );
};

const Header: React.FC = () => {
  return (
    <header className="position-sticky top-0">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <div className="d-flex justify-content-between w-100">
            <Link className="navbar-brand" href="/">
              {siteName}
            </Link>
            <button
              className="navbar-toggler btn btn-primary"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end bg-dark"
              tabIndex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">
                  Menu
                </h5>
                <button
                  type="button"
                  className="btn-close text-reset bg-danger"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body justify-content-end">
                <ul className="navbar-nav">
                  <MenuItemLink name="Home" href="/" />
                  <MenuItemLink name="Catalog" href="#" />
                  <MenuItemLink name="About us" href="#" />
                  <MenuItemLink name="Contacts" href="#" />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
