/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

/*
 * TODO: Skill name text color change.
 */

import React from 'react';
import { IoLogoJavascript, IoLogoNodejs } from 'react-icons/io';
import {
  SiExpress,
  SiFigma,
  SiGithub,
  SiMongodb,
  SiReact,
  SiTailwindcss,
  SiBulma
} from 'react-icons/si';
import { BsCodeSlash } from 'react-icons/bs';
import skills from '../Assets/Data/skills';

function Skills() {
  const RenderIcon = (props) => {
    switch (props.icon) {
      case 'JavaScript':
        return (
          <IoLogoJavascript className="sm:w-8 sm:h-8 sm:m-1 md:w-9 md:h-9 md:m-2 text-skills-javascript" />
        );
      case 'React':
        return <SiReact className="sm:w-8 sm:h-8 sm:m-1 md:w-9 md:h-9 md:m-2 text-skills-react" />;
      case 'Node JS':
        return (
          <IoLogoNodejs className="sm:w-8 sm:h-8 sm:m-1 md:w-9 md:h-9 md:m-2 text-skills-node" />
        );
      case 'Express JS':
        return (
          <SiExpress className="sm:w-8 sm:h-8 sm:m-1 md:w-9 md:h-9 md:m-2 text-skills-express" />
        );
      case 'Figma':
        return <SiFigma className="sm:w-8 sm:h-8 sm:m-1 md:w-9 md:h-9 md:m-2 text-skills-figma" />;
      case 'GitHub':
        return <SiGithub className="sm:w-8 sm:h-8 sm:m-1 md:w-9 md:h-9 md:m-2 text-skills-git" />;
      case 'Mongo DB':
        return (
          <SiMongodb className="sm:w-8 sm:h-8 sm:m-1 md:w-9 md:h-9 md:m-2 text-skills-mongodb" />
        );
      case 'Tailwind CSS':
        return (
          <SiTailwindcss className="sm:w-8 sm:h-8 sm:m-1 md:w-9 md:h-9 md:m-2 text-skills-tailwind" />
        );
      case 'Bulma CSS':
        return <SiBulma className="sm:w-8 sm:h-8 sm:m-1 md:w-9 md:h-9 md:m-2 text-skills-bulma" />;
      default:
        return <BsCodeSlash className="sm:w-8 sm:h-8 sm:m-1 md:w-9 md:h-9 md:m-2 text-primary" />;
    }
  };

  const RenderSkills = () => (
    <div className="grid grid-cols-2 gap-0 md:grid-cols-3 md:gap-3 md:justify-items-center">
      {skills.map((skill) => (
        <div className="flex m-2 items-center sm:flex-col-2 md:flex-col-3 py-2 px-4 sm:w-52 md:w-60 lg:py-10">
          <RenderIcon icon={skill.name} />
          <h2 className="text-center sm:text-xl md:text-2xl px-1 ml-2 text-secondary font-semibold">
            {skill.name}
          </h2>
        </div>
      ))}
    </div>
  );

  return (
    <div className="md:flex md:flex-row md:justify-around md:items-center bg-primary ">
      <h1 className="text-3xl md:text-5xl font-bold text-secondary mx-0 text-center md:tracking-widest">
        Tech I am Familiar With
      </h1>
      <RenderSkills />
    </div>
  );
}

export default Skills;
