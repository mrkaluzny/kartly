import { PropsWithChildren } from "react";
import Topbar from "@/components/Topbar";

const Layout = ({ children }: PropsWithChildren): JSX.Element => (
  <div className="container mx-auto px-5">
    <Topbar />
    <main>{children}</main>
  </div>
);

export default Layout;
