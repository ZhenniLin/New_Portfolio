import Link from "next/link";
// components
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Header: React.FC = () => {
  return (
    <header className="py-8 xl:py-12 text-black ">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1>
            Zhenni <span className="text-accent">.</span>
          </h1>
        </Link>
        {/* nav & click me button*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button
              variant="outline"
              className="border-accent border-2 rounded-[2rem] hover:text-white"
            >
              Click me
            </Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
