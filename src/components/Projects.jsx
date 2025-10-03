import React from 'react';
import { motion } from 'framer-motion';
import { github, pineapple, pineappleHover } from '../assets';
import { fadeIn } from '../utils/motion';

const ProjectCard = ({
  id,
  name,
  description,
  image,
  repo,
  demo,
  index,
  active,
  handleClick,
}) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] 
      h-[420px] cursor-pointer card-shadow`}
      onClick={() => handleClick(id)}>
      <div className="absolute top-0 left-0 z-10 bg-jetLight h-full w-full opacity-[0.5] rounded-[24px]"></div>
      <img src={image} alt={name} className="absolute w-full h-full object-cover rounded-[24px]" />
      {/* You can still use ProjectCard somewhere else */}
    </motion.div>
  );
};

export default ProjectCard;
