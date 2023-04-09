import { PropsWithChildren } from "react";
import Footer from "@/components/footer";
import Topbar from "@/components/Topbar";

const Layout = ({ children }: PropsWithChildren): JSX.Element => (
  <div className="container mx-auto px-5">
    <Topbar />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
