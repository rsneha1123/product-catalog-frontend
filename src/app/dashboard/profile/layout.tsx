import { Fragment, ReactNode } from "react";

const ProfileLayout = ({ children }: { children: ReactNode }) => {
  console.log("Profile Layout");
  return (
    <div className="border border-blue-700">
      <article>Profile Sidebar</article>
      {children}
    </div>
  );
};

export default ProfileLayout;
