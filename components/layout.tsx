import { PropsWithChildren } from "react";
import Footer from "@/components/footer";

const Layout = ({ children }: PropsWithChildren): JSX.Element => (
  <div className="container mx-auto px-5">
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
