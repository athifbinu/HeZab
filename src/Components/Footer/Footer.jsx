import React from "react";

import { Link } from "react-router-dom";
import footerlogo from "../../assets/Images/footerlogo.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="py-32 " style={{ backgroundColor: "#e6e2e2" }}>
      <div className="container flex  justify-between d-n  ">
        <div className="logo-col col-span-2 sm:col-span-1">
          <Link>
            <img className="mb-10 w-72" alt="Omnifood logo" src={footerlogo} />
          </Link>

          <div className="flex gap-5">
            <FaFacebook />
            <FaTwitterSquare />
            <FaLinkedin />
            <FaInstagramSquare />
          </div>
        </div>

        <div>
          <nav className="nav-col col-span-1 sm:col-span-1">
            <p className="footer-heading text-lg font-bold mb-3">Quick Links</p>
            <ul className="footer-nav space-y-3">
              <li className="flex items-center gap-5">
                <IoMdArrowDropright />
                <p>Home</p>
              </li>
              <li className="flex items-center gap-5">
                <IoMdArrowDropright />
                <p>About Us</p>
              </li>
              <li className="flex items-center gap-5">
                <IoMdArrowDropright />
                <p>Our Team</p>
              </li>
              <li className="flex items-center gap-5">
                <IoMdArrowDropright />
                <p>Library</p>
              </li>
              <li className="flex items-center gap-5">
                <IoMdArrowDropright />
                <p>Blogs</p>
              </li>

              <li className="flex items-center gap-5">
                <IoMdArrowDropright />
                <p>Contact Us</p>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <nav className="nav-col col-span-1 sm:col-span-1">
            <p className="footer-heading text-lg font-bold mb-3">Quick Links</p>
            <p className="mb-4">
              Adress:salam Tower,13 floor Alcorniche street,Doha
            </p>
            <ul className="footer-nav space-y-3">
              <li className="flex items-center gap-5">
                <IoIosCall />
                <p>91+ 848485445151</p>
              </li>
              <li className="flex items-center gap-5">
                <FaMobileAlt />
                <p>941d744848484</p>
              </li>
              <li className="flex items-center gap-5">
                <IoMdArrowDropright />
                <p>Our Team</p>
              </li>
              <li className="flex items-center gap-5">
                <IoLogoWhatsapp />
                <p>91 844544444</p>
              </li>
              <li className="flex items-center gap-5">
                <MdOutlineEmail />
                <p>info@alhedgmail.com</p>
              </li>

              <li className="flex items-center gap-5">
                <FaRegClock />
                <p>Working hours: Sunday - Thursday 8:00 AM to 5:00 PM</p>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
