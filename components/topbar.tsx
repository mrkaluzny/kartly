import Link from "next/link";

const Topbar = (): JSX.Element => (
  <nav className="font-sans text-5xl font-bold text-center py-10 h-16">
    <Link className="primary-text-color" href="/">
      Kartly
    </Link>
  </nav>
);

export default Topbar;
