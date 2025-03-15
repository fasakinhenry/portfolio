import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    "home",
    "skills",
    "experience",
    "projects",
    "socials",
    "contact",
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white backdrop-blur-md border-b border-gray-200 z-50">
      <div className="container mx-auto py-4 px-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Fasakin Henry</h2>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link
              key={link}
              to={`#${link}`}
              className="capitalize text-gray-600 hover:text-black transition-colors duration-300"
            >
              {link}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="fixed top-0 right-0 w-3/4 h-screen bg-white shadow-lg p-6 flex flex-col space-y-6 md:hidden"
          >
            {links.map((link) => (
              <Link
                key={link}
                to={`#${link}`}
                className="text-gray-600 text-lg capitalize hover:text-black transition-colors duration-300"
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                {link}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
