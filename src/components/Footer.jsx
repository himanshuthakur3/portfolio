import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaArrowUp
} from "react-icons/fa";


const Footer = () => {

  const scrollTop = () => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
  };


  return (

    <footer className="
    bg-black
    text-white
    border-t
    border-gray-800
    px-6
    md:px-20
    py-12
    ">


      <div className="
      max-w-6xl
      mx-auto
      grid
      md:grid-cols-3
      gap-10
      ">


        {/* Brand */}

        <div>

          <h2 className="
          text-3xl
          font-bold
          text-blue-500
          ">
            Himanshu.
          </h2>


          <p className="
          text-gray-400
          mt-4
          ">
            Full Stack Developer creating
            modern and scalable web applications.
          </p>

        </div>




        {/* Navigation */}

        <div>

          <h3 className="
          text-xl
          font-semibold
          mb-4
          ">
            Quick Links
          </h3>


          <ul className="space-y-3 text-gray-400">


            <li>
              <a href="#home">
                Home
              </a>
            </li>


            <li>
              <a href="#about">
                About
              </a>
            </li>


            <li>
              <a href="#projects">
                Projects
              </a>
            </li>


            <li>
              <a href="#contact">
                Contact
              </a>
            </li>


          </ul>


        </div>





        {/* Social */}

        <div>


          <h3 className="
          text-xl
          font-semibold
          mb-4
          ">
            Follow Me
          </h3>


          <div className="
          flex
          gap-5
          text-3xl
          ">


            <a
            href="https://github.com/himanshuthakur3"
            className="
            hover:text-blue-500
            transition
            "
            >
              <FaGithub/>
            </a>


            <a
            href="https://www.linkedin.com/in/himanshu-thakur"
            className="
            hover:text-blue-500
            transition
            "
            >
              <FaLinkedin/>
            </a>




          </div>


        </div>


      </div>





      {/* Bottom */}

      <div className="
      mt-10
      pt-6
      border-t
      border-gray-800
      flex
      justify-between
      items-center
      ">


        <p className="
        text-gray-500
        ">
          © 2026 Himanshu Thakur. All Rights Reserved.
        </p>



        <button
        onClick={scrollTop}
        className="
        bg-blue-600
        p-3
        rounded-full
        hover:scale-110
        transition
        "
        >

          <FaArrowUp/>

        </button>


      </div>


    </footer>

  );
};


export default Footer;