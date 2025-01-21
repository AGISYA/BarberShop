"use client";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaMapMarkerAlt, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { IoPhonePortraitOutline } from "react-icons/io5";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isScrolling = useRef(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling.current) {
        isScrolling.current = true;
        requestAnimationFrame(() => {
          setShowNavbar(window.scrollY <= lastScrollY);
          setLastScrollY(window.scrollY);
          isScrolling.current = false;
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-gray-900 text-white px-6 py-4 fixed w-full z-50 transition-transform duration-200 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Location */}
        <div className="flex items-center space-x-2">
          <a
            href="https://goo.gl/maps/your-location-link"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition duration-200"
          >
            <FaMapMarkerAlt size={20} className="mr-2 text-yellow-500" />
          </a>
        </div>

        {/* Center Section: Logo */}
        <div className="flex-grow text-center">
          <Link href="/" className="hover:opacity-80 transition duration-200">
            <h1 className="text-2xl font-bold text-white">BARBER SHOP</h1>
          </Link>
        </div>

        {/* Right Section: Menu and Contact */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link
                href="#hero"
                className="hover:text-yellow-500 transition duration-200"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="#call-to-action"
                className="hover:text-yellow-500 transition duration-200"
              >
                Call to Action
              </Link>
            </li>
            <li>
              <Link
                href="#pricing"
                className="hover:text-yellow-500 transition duration-200"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="#our-barber"
                className="hover:text-yellow-500 transition duration-200"
              >
                Our Barber
              </Link>
            </li>
            <li>
              <Link
                href="#about-us"
                className="hover:text-yellow-500 transition duration-200"
              >
                About Us
              </Link>
            </li>
          </ul>
          <a
            href="tel:+1234567890"
            className="hover:text-yellow-500 transition duration-200 flex items-center space-x-2"
          >
            <IoPhonePortraitOutline size={20} className="text-yellow-500" />
            <span className="ml-2 text-sm">+1234567890</span>
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-yellow-500"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-center bg-gray-900 py-4 border-t border-gray-800">
          <li>
            <Link
              href="#hero"
              className="block hover:text-yellow-500 transition duration-200"
            >
              Hero
            </Link>
          </li>
          <li>
            <Link
              href="#about-us"
              className="block hover:text-yellow-500 transition duration-200"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="#call-to-action"
              className="block hover:text-yellow-500 transition duration-200"
            >
              Call to Action
            </Link>
          </li>
          <li>
            <Link
              href="#pricing"
              className="block hover:text-yellow-500 transition duration-200"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="#our-barber"
              className="block hover:text-yellow-500 transition duration-200"
            >
              Our Barber
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
