import profile from "../assets/images/profile.jpeg";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <>
    <nav className="fixed top-0 left-0 w-full bg-[#0f172a]/90 backdrop-blur-md shadow-lg z-50 ">
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

        {/* Navigation */}
        <ul className="hidden md:flex gap-8 text-white font-medium">

          <li>
            <a href="#home" className="hover:text-cyan-400 duration-300">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-cyan-400 duration-300">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-cyan-400 duration-300">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-cyan-400 duration-300">
              Projects
            </a>
          </li>

          <li>
            <a href="#experience" className="hover:text-cyan-400 duration-300">
              Experience
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-cyan-400 duration-300">
              Contact
            </a>
          </li>

        </ul>

        {/* Button */}
        <button className="hidden md:block bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-lg text-white transition-all">
          Hire Me
        </button>

    <ThemeToggle/>
      </div>
    </nav>
    </>
  );
}

export default Navbar;