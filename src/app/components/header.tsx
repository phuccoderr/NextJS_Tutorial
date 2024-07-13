import Link from "next/link";
import React from "react";
import Navigation from "./navigation";

const Header = () => {
  return (
    <header className="p-20 border border-yellow-200">
      <Navigation />
    </header>
  );
};

export default Header;
