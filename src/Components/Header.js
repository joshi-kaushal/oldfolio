import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

/*
 * TODO: Transition to Hamburger Menu
 *       Hamberger Menu full page
 */
const Header = () => {
  const [isHamburgerClicked, setHamburgerClicked] = useState(false);

  const handleHamburgerClick = () => setHamburgerClicked(!isHamburgerClicked);

  // Mobile view Hamburger Menu
  const renderMobileMenu = () => (
    <div
      className={
        isHamburgerClicked
          ? 'text-secondary text-xl md:hidden flex flex-col h-screen place-content-center items-center pb-32'
          : 'hidden'
      }
    >
      <div className="pb-10 mx-0 text-2xl font-semibold hover:underline transition duration-500">
        Projects
      </div>
      <div className="py-10 mx-0 text-2xl font-semibold hover:underline transition duration-500">
        About
      </div>
      <div className="py-10 mx-0 text-2xl font-semibold hover:underline transition duration-500">
        Blog
      </div>
      <div className="py-10 mx-0 text-2xl font-semibold hover:underline transition duration-500">
        Contact
      </div>
    </div>
  );

  return (
    <nav className="bg-primary">
      <div className="mx-auto px-8">
        <div className="flex justify-between">
          {/* Name */}
          <div className="flex py-5 items-center">
            <div>
              <h1 className="py-1 px-4 text-secondary text-3xl font-semibold">Kaushal Joshi</h1>
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden lg:flex py-4 space-x-4 px-9 text-secondary text-xl align-middle">
            <div className="pt-3 pb-1 px-4 af ">About</div>
            <div className="pt-3 pb-1 px-4 af ">Projects</div>
            <div className="pt-3 pb-1 px-4 af ">Blog</div>
            <div
              className=" text-primary
                          bg-secondary
                          border border-solid border-primary hover:border-secondary
                          hover:bg-primary hover:text-secondary
                          active:bg-secondary active:text-primary
                          font-bold
                          uppercase
                          text-sm
                          mr-1
                          mb-1
                          px-6
                          py-3
                          rounded-full
                          ease-linear
                          transition-all
                          duration-150"
            >
              <a href="#contact" className="p-2">
                Contact
              </a>
            </div>
          </div>

          {/* Mobile View HamburgerMenu */}
          <div className="lg:hidden flex items-center">
            <button type="button" onClick={handleHamburgerClick}>
              <GiHamburgerMenu className="w-6 h-6 text-secondary" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile View Menu */}
      {isHamburgerClicked && renderMobileMenu()}
    </nav>
  );
};
export default Header;
