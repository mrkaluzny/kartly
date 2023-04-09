import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren): JSX.Element => (
  <div className="container mx-auto px-5">
    <main>{children}</main>
  </div>
);

export default Layout;
