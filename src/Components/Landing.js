/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import '../App.css';
import { SiHashnode, SiLinkedin, SiGmail, SiGithub, SiTwitter } from 'react-icons/si';
import Myself from '../Assets/Images/Myself.png';

const Landing = () => (
  <div className="bg-primary">
    <div className="grid-cols-2	">
      <div className="image pt-12 px-12">
        <img src={Myself} alt="Kaushal Joshi😎" height="420px" width="420px" />
      </div>

      <div className="text pt-12 px-12">
        <h2 className="text-3xl font-bold text-white">
          Hello 👋 <span className="text-2xl font-medium">I am </span>
        </h2>
        <h1 className="text-5xl font-bold text-secondary">Kaushal Joshi</h1>
        <h2 className="text-2xl pt-6 font-mono text-white">Full Stack Developer</h2>
        <p className="font-2xl py-3 text-center text-white">
          I am a Computer Scince Junior at Mumbai University, interested in web, cloud, design and
          cinema.
        </p>
      </div>

      <div className="py-5 px-12 flex justify-between">
        <div
          onClick={() => {
            window.open('https://www.twitter.com/clumsy_coder/');
          }}
        >
          <SiTwitter className="w-7 h-7 text-twitter" />
        </div>
        <div
          onClick={() => {
            window.open('https://www.linkedin.com/7JKaushal/');
          }}
        >
          <SiLinkedin className="w-7 h-7 text-linkedin" />
        </div>
        <div
          onClick={() => {
            window.open('https://www.github.com/joshi-kaushal/');
          }}
        >
          <SiGithub className="w-7 h-7 text-white" />
        </div>
        <div
          onClick={() => {
            window.open('https://clumsycoder.hashnode.dev');
          }}
        >
          <SiHashnode className="w-7 h-7 text-hashnode" />
        </div>
        <div
          onClick={() => {
            alert('7joshikaushal@gmail.com');
          }}
        >
          <SiGmail className="w-7 h-7 text-gmail" />
        </div>
      </div>
    </div>
  </div>
);

export default Landing;
