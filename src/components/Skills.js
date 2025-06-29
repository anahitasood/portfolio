import React from 'react';
import { techskills } from '../data/skills';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1536 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1536, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

function Skills() {
  return (
    <section id="skills" className="py-16 px-4 bg-background min-h-[60vh]">
      <h2 className="text-3xl font-bold mb-6 text-secondary text-center">Skills</h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        arrows={true}
        autoPlay={false}
        keyBoardControl={true}
        containerClass="skills-carousel"
        itemClass="px-2"
        renderButtonGroupOutside={false}
      >
        {techskills.map((skill, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center min-w-[140px] h-[140px] bg-white rounded-full shadow-lg shadow-accent/40 text-secondary text-lg font-semibold border-2 border-primary mx-auto">
            {skill.name}
            <div className="flex mt-2">
              {[...Array(5)].map((_, i) =>
                i < skill.level ? (
                  <StarIcon key={i} fontSize="small" className="text-accent" />
                ) : (
                  <StarBorderIcon key={i} fontSize="small" className="text-accent" />
                )
              )}
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default Skills;
