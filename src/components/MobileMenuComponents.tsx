import React, { useState } from "react";
import { Link } from 'react-router-dom';
import MobileSubMenu from "./MobileSubMenu";

const MobileMenuComponents = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const MobileMenuIcon = ()=>{

      return(
        <button
          onClick={toggleMenu}
          className="absolute left-[-50px] z-40 h-[30px] scale-[200%] bg-navy text-white p-3 rounded-md focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      )
    }
  
  const MobileMenu = () =>{

    return (
      
        <div className="relative">
          {/* Mobile Menu */}
          <div
            className={`z-30 fixed top-0 right-0 h-full w-3/4 bg-navy opacity-[98%] text-white transform transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/*flex flex-col items-center justify-center h-full space-y-6 */}
            <ul className="mt-[150px] border border-red-400 pl-[40px] font flex-col items-center justify-center space-y-6">
              <li className="border border-white">
                {/*
                <a href="#home" className="text-[20px] hover:text-gray-400">
                  Home
                </a>*/}
                <Link to="/">Home</Link>
              </li>
              <li className="border border-white">
                {/*<a href="#about" className="text-[20px] hover:text-gray-400">
                  About
                </a>*/}
                <Link to="/About">About US</Link>
              </li>
              <li>
                Services
              </li>
              <li>
                <a href="#contact" className="text-[20px] hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>

            <MobileSubMenu className="" heading="Services"
              links={[
                'Spending Support',
                'Living Support',
                'Behaviour Support',
                'Skills Development',
                'Transport Management',
                'Gaming and Drug counselling',
                'Group Activities',
                'Court Assistance'

              ]}
            ></MobileSubMenu>
          


          </div>

          {/* Overlay */}
          {/*
            {isOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-10 z-40"
                onClick={toggleMenu}
              ></div>
            )}
          */}
        </div>
      
    )
  }

  return { MobileMenu, MobileMenuIcon}
};


export default MobileMenuComponents;
