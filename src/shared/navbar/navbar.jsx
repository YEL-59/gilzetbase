import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import AuthDialog from "@/pages/auth/AuthDialog";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Categories", path: "/categories" },
  { name: "Winners", path: "/winner" },
  { name: "How It Works", path: "/how-it-works" },
  { name: "Contest", path: "/contest" },
  { name: "megazine", path: "/megazine" },
  { name: "Manifesto", path: "/manifestos" },
  { name: "About", path: "/about" },
  // { name: "Home", path: "/" },
  // { name: "Categories", path: "/categories" },
  // { name: "Winners", path: "/winner" },
  // { name: "How It Works", path: "/howitwork" },
  // { name: "Contest", path: "/contest" },
  // { name: "Megazine", path: "/megazine" },
  // { name: "Manifesto", path: "/manifestos" },
  // { name: "About", path: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-zinc-900 px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-yellow-600">
          <div className="text-2xl font-serif">AVA</div>
          <div className="text-[8px] tracking-widest -mt-1">PHOTOGRAPHY</div>
          <div className="text-[7px] tracking-wider -mt-0.5">AWARDS</div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm transition pb-1 ${
                  isActive
                    ? "text-yellow-600 border-b-2 border-yellow-600"
                    : "text-gray-300 hover:text-yellow-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <Link to="/submit-photo">
            <Button className="bg-yellow-600 hover:bg-yellow-700 text-black">
              Submit a Photo
            </Button>
          </Link>

          <AuthDialog />

          <Button variant="secondary">🌐 EN</Button>
        </div>

        {/* Mobile Sheet */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="lg:hidden text-gray-300">
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </SheetTrigger>

          <SheetContent side="right" className="bg-zinc-900 border-zinc-800">
            <div className="flex flex-col space-y-6 mt-10">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm transition pb-1 ${
                      isActive
                        ? "text-yellow-600 border-b-2 border-yellow-600"
                        : "text-gray-300 hover:text-yellow-600"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <div className="pt-6 space-y-3">
                <Button className="w-full bg-yellow-600 text-black">
                  Submit a Photo
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-gray-600 text-gray-300"
                >
                  Create an account
                </Button>

                <Button variant="secondary" className="w-full">
                  🌐 EN
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
