import { useState } from "react";
import profile from "../assets/images/profile.jpeg";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0f172a]/90 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={profile}
            alt="Himanshu"
            className="w-12 h-12 rounded-full border-2 border-cyan-400 object-cover"
          />

          <div>
            <h1 className="text-white text-xl font-bold">
              Himanshu Thakur
            </h1>
            <p className="text-gray-400 text-xs">
              Full Stack Developer
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          {navLinks.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="hover:text-cyan-400 transition duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          

          <button className="hidden md:block bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-lg text-white transition-all">
            Hire Me
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <ul className="bg-[#0f172a] border-t border-gray-700 text-white flex flex-col">

          {navLinks.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-4 hover:bg-cyan-500 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}

          <li className="px-6 py-4">
            <button className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-lg transition">
              Hire Me
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;