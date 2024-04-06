import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import { IoMenu } from "react-icons/io5";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg">
      <nav className="container mx-auto flex items-center justify-between py-4 ">
        <div className="flex items-center">
          <Link to="/" className="mr-4">
            <img src={logo} alt="Logo" className="h-20" />
          </Link>
        </div>

        <div className="hidden md:flex  space-x-12 font-bold">
          <Link to="#" className="text-black hover:text-yellow-600">
            Home
          </Link>
          <Link to="#" className="text-black hover:text-yellow-600">
            Home
          </Link>
          <Link to="#" className="text-black hover:text-yellow-600">
            Home
          </Link>
          <Link to="#" className="text-black hover:text-yellow-600">
            Home
          </Link>
          <Link to="#" className="text-black hover:text-yellow-600">
            Home
          </Link>
          <Link to="#" className="text-black hover:text-yellow-600">
            Home
          </Link>
          <Link to="#" className="text-black hover:text-yellow-600">
            Home
          </Link>
          <Link to="#" className="text-black hover:text-yellow-600">
            Home
          </Link>
          <Link to="#" className="text-black hover:text-yellow-600">
            Home
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            <IoMenu />
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden  bg-gray-700 absolute">
          <div className="px-2 py-3 space-y-2">
            <Link to="#" className="text-black hover:text-yellow-600">
              Home
            </Link>
            <Link to="#" className="text-black hover:text-yellow-600">
              Home
            </Link>
            <Link to="#" className="text-black hover:text-yellow-600">
              Home
            </Link>
            <Link to="#" className="text-black hover:text-yellow-600">
              Home
            </Link>
            <Link to="#" className="text-black hover:text-yellow-600">
              Home
            </Link>
            <Link to="#" className="text-black hover:text-yellow-600">
              Home
            </Link>
            <Link to="#" className="text-black hover:text-yellow-600">
              Home
            </Link>
            <Link to="#" className="text-black hover:text-yellow-600">
              Home
            </Link>
            <Link to="#" className="text-black hover:text-yellow-600">
              Home
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;


