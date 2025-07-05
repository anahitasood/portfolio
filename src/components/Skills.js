import React from 'react';
import { techskills } from '../data/skills';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1280 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 1280, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

// Custom arrow components for Carousel
const CustomLeftArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 bg-transparent text-white p-0 m-0 hover:text-accent transition"
    aria-label="Previous"
    style={{ transform: 'translateY(-50%)' }}
  >
    <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 bg-transparent text-white p-0 m-0 hover:text-accent transition"
    aria-label="Next"
    style={{ transform: 'translateY(-50%)' }}
  >
    <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
  </button>
);

function Skills() {
  return (
    <section id="skills" className="py-16 px-4 bg-background  relative">
      <h2 className="text-3xl font-bold mb-8 text-white text-center">Skills</h2>
      <div className="relative w-full px-8 xl:px-20 2xl:px-32 max-w-none mx-auto overflow-visible">
        <Carousel
          responsive={responsive}
          infinite={true}
          arrows={true}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          containerClass="skills-carousel"
          itemClass="px-2"
          renderButtonGroupOutside={true}
        >
          {techskills.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center w-[140px] h-[140px] bg-white rounded-2xl shadow-lg shadow-accent/40 text-secondary text-lg font-semibold border-2 border-primary mx-auto transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-2xl hover:shadow-primary/40 animate-fadeIn"
              style={{ boxShadow: '0 8px 24px 0 rgba(52, 112, 255, 0.15), 0 1.5px 6px 0 rgba(52, 112, 255, 0.10)', borderRadius: '1rem' }}
            >
              {skill.name}
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) =>
                  i < skill.level ? (
                    <StarIcon key={i} fontSize="small" className="text-primary" />
                  ) : (
                    <StarBorderIcon key={i} fontSize="small" className="text-accent" />
                  )
                )}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Skills;

/* Add fadeIn animation to index.css */
