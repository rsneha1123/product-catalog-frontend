import { Fragment, ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  console.log("Dashboard Layout");
  return (
    <div className="border border-green-700">
      <article>Dashboard Sidebar</article>
      {children}
    </div>
  );
};

export default DashboardLayout;
