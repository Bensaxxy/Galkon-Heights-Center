import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/training", label: "Training" },
  { to: "/request", label: "Make a Request" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white/90 backdrop-blur sticky top-0 z-40 border-b border-gray-100">
      <div className="container-page flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" width={45} />
          <span className="font-semibold text-md lg:text-lg xl:xl 2xl:text-2xl">
            Galkon Heights
          </span>
        </Link>
        <button
          onClick={() => setOpen((v) => !v)}
          className="sm:hidden btn btn-ghost"
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <nav
          className={`sm:flex gap-6 items-center ${
            open
              ? "absolute top-16 left-0 w-full bg-white shadow-md flex flex-col p-4"
              : "hidden"
          } sm:static sm:w-auto sm:bg-transparent sm:shadow-none`}
        >
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-2 py-1 rounded-lg transition ${
                  isActive
                    ? "text-brand font-semibold"
                    : "text-gray-700 hover:text-brand"
                }`
              }
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/request" className="btn-primary hidden sm:inline-flex">
            Start a Request
          </Link>
        </nav>
      </div>
    </header>
  );
}
