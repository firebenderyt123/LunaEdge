import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <header>Header</header>
      <main>
        <div className="container">{children}</div>
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
