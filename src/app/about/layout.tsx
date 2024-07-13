import React, { ReactNode } from "react";

const AboutLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h1>Header About</h1>
      {children}
    </div>
  );
};

export default AboutLayout;
