import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X, LayoutDashboard, LogOut, User as UserIcon } from "lucide-react";
import AuthDialog from "@/pages/auth/AuthDialog";
import { useAuth } from "@/hooks/AuthContext";
import { useLogout } from "@/hooks/auth.hook";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import LogoImg from "@/assets/Logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Categories", path: "/categories" },
  { name: "Winners", path: "/winner" },
  { name: "How It Works", path: "/howitwork" },
  { name: "Contest", path: "/contest" },
  { name: "Megazine", path: "/megazine" },
  { name: "Manifesto", path: "/manifestos" },
  { name: "About", path: "/about" },
  { name: "Subscription Plan", path: "/subscription" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, isAuthenticated } = useAuth();
  const { mutate: logout } = useLogout();

  return (
    <nav className="bg-[#202020] px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <img
          src={LogoImg}
          alt="AVA ART VISION AWARDS"
          className="h-15 w-auto  object-contain"
        />


        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm transition pb-1 ${isActive
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
            <Button className="bg-[#CAA844] hover:bg-yellow-700 text-white  hover:text-black">
              Submit a Photo
            </Button>
          </Link>

          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0 hover:bg-transparent cursor-pointer">
                  <Avatar className="h-10 w-10 border border-yellow-600/30 transition-transform hover:scale-105">
                    <AvatarImage src={user?.image} alt={user?.first_name} />
                    <AvatarFallback className="bg-yellow-600/10 text-yellow-600">
                      {user?.first_name?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-zinc-900 border-zinc-800 text-gray-200" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none text-yellow-600">
                      {user?.first_name} {user?.last_name}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user?.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-zinc-800" />
                <DropdownMenuItem asChild className="focus:bg-zinc-800 focus:text-yellow-600 cursor-pointer">
                  <Link to={user?.role === "jury" ? "/jury/dashboard" : "/dashboard"} className="flex w-full items-center">
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="focus:bg-zinc-800 focus:text-yellow-600 cursor-pointer">
                  <Link to="/profile" className="flex w-full items-center">
                    <UserIcon className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-zinc-800" />
                <DropdownMenuItem
                  onClick={() => logout()}
                  className="focus:bg-zinc-800 focus:text-red-500 cursor-pointer text-red-400"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <AuthDialog />
          )}

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
            <div className="flex flex-col space-y-6 mt-10 p-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm transition pb-1 ${isActive
                      ? "text-yellow-600 border-b-2 border-yellow-600"
                      : "text-gray-300 hover:text-yellow-600"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <div className="pt-6 space-y-3">
                <Button className="w-full bg-[#CAA844] text-white">
                  Submit a Photo
                </Button>

                {isAuthenticated ? (
                  <>
                    <div className="text-gray-300 text-center py-2 border-b border-zinc-800">
                      <div className="font-medium text-yellow-600">
                        {user?.first_name} {user?.last_name}
                      </div>
                      <div className="text-xs text-muted-foreground">{user?.email}</div>
                    </div>
                    <Link
                      to={user?.role === "jury" ? "/jury/dashboard" : "/dashboard"}
                      onClick={() => setOpen(false)}
                      className="flex items-center text-sm text-gray-300 hover:text-yellow-600 transition-colors py-2"
                    >
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      Dashboard
                    </Link>
                    <Link
                      to="/profile"
                      onClick={() => setOpen(false)}
                      className="flex items-center text-sm text-gray-300 hover:text-yellow-600 transition-colors py-2"
                    >
                      <UserIcon className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                    <Button
                      onClick={() => {
                        logout();
                        setOpen(false);
                      }}
                      variant="outline"
                      className="w-full border-red-500/50 text-red-400 hover:bg-red-500/10 hover:text-red-500 border-yellow-600! text-yellow-600! hover:bg-yellow-600/10!"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </Button>
                  </>
                ) : (
                  <AuthDialog />
                )}

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
