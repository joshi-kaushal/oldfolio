/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

/*
 * TODO: Modify tailwind config js
 * Landing page h-screen fix
 */
import React from 'react';
import '../App.css';
import { SiHashnode, SiLinkedin, SiGmail, SiGithub, SiTwitter } from 'react-icons/si';
import Myself from '../Assets/Images/Myself.png';

const Landing = () => {
  const SocialLinkButton = (props) => (
    <div
      className="flex justify-center items-center bg-white rounded-full w-10 h-10 md:w-12 md:h-12"
      onClick={() => {
        window.open(props.url);
      }}
    >
      {props.children}
    </div>
  );

  return (
    <div className="bg-primary h-screen flex flex-col place-content-center items-center md:pb-24">
      <div className="flex flex-wrap md:px-40 overflow-hidden items-center sm:-mx-1 md:-mx-1 lg:-mx-3 xl:-mx-3">
        {/* Column 01: Photo */}
        <div
          className="w-full overflow-hidden 
                          sm:my-1 sm:px-1 sm:w-full 
                          md:my-1 md:px-1 md:w-1/2 lg:my-3 
                          lg:px-3 lg:w-1/2 xl:my-3
                          xl:px-3 xl:w-1/2"
        >
          <div className="image pt-12 px-12">
            <img src={Myself} alt="Jaushal Koshi😎" height="420px" width="420px" />
          </div>
        </div>

        {/* Column 02: Information */}
        <div
          className="w-full overflow-hidden text pt-12 px-12 
                          sm:my-1 sm:px-1 sm:w-full 
                          md:my-1 md:px-1 md:w-1/2 
                          lg:my-3 lg:px-3 lg:w-1/2 
                          xl:my-3 xl:px-3 xl:w-1/2"
        >
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Hello <span className="wave-emoji text-5xl">👋</span>
          </h2>
          <h1 className="text-5xl font-bold text-secondary hover:text-skills-javascript md:text-7xl  transition duration-500">
            Kaushal Joshi{' '}
            <span className="text-2xl font-medium md:text-3xl text-white">here! </span>
          </h1>
          <h2 className="text-2xl pt-6 font-mono text-white md:text-3xl">Full Stack Developer</h2>
          <p className="py-3 text-center text-xl text-white  md:text-left">
            I am a Computer Science Junior at Mumbai University, interested in web, cloud, design
            and cinema.
          </p>

          {/* Social Links */}
          <div className="flex justify-between py-2 gap-3 md:py-6 md:px-0 md:pr-20">
            <SocialLinkButton url="https://www.twitter.com/clumsy_coder/">
              <SiTwitter className="w-7 h-7 md:w-8 md:h-8 text-twitter" />
            </SocialLinkButton>

            <SocialLinkButton url="https://www.linkedin.com/in/7JKaushal">
              <SiLinkedin className="w-6 h-7 md:w-7 md:h-9 text-linkedin" />
            </SocialLinkButton>

            <SocialLinkButton url="https://www.github.com/joshi-kaushal/">
              <SiGithub className="w-7 h-7 md:w-8 md:h-8 text-github" />
            </SocialLinkButton>

            <SocialLinkButton url="https://clumsycoder.hashnode.dev">
              <SiHashnode className="w-7 h-7 md:w-8 md:h-8 text-hashnode" />
            </SocialLinkButton>

            <SocialLinkButton url="7joshikaushal@gmail.com">
              <SiGmail className="w-7 h-7 md:w-8 md:h-8 text-gmail" />
            </SocialLinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
