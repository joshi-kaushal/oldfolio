import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

/*
 * TODO: Transition to Hamburger Menu
 *       Hamberger Menu full page
 */
const Header = () => {
  const [isHamburgerClicked, setHamburgerClicked] = useState(false);

  const handleHamburgerClick = () => setHamburgerClicked(!isHamburgerClicked);

  const renderMobileMenu = () => (
    <div className={isHamburgerClicked ? 'text-secondary text-xl md:hidden' : 'hidden'}>
      <div className="py-4 px-12">Projects</div>
      <div className="py-4 px-12">About</div>
      <div className="py-4 px-12">Blog</div>
      <div className="py-4 px-12">Contact</div>
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
          <div className="hidden md:flex py-4 space-x-4 px-9 text-secondary text-xl items-center ">
            <div className="py-3 px-4">About</div>
            <div className="py-3 px-4">Projects</div>
            <div className="py-3 px-4">Blog</div>
            <div
              className="py-2 px-2 border rounded-3xl bg-secondary text-primary 
                       hover:text-secondary hover:border-secondary hover:bg-primary transition duration-700"
            >
              <a href="#contact" className="p-2">
                Contact
              </a>
            </div>
          </div>

          {/* Mobile View HamburgerMenu */}
          <div className="md:hidden flex items-center">
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
