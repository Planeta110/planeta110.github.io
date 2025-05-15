import Ventoskills from "./ventoskills";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills({ lang }) {

  const skills = lang.main.skills;
  const skillskillsfrontend = [
    { techno: "JS", routeimg: "/js-svgrepo-com.svg" },
    { techno: "React", routeimg: "/react-svgrepo-com.svg" },
    { techno: "CSS", routeimg: "/css.svg" },
    { techno: "HTML", routeimg: "/html-5-svgrepo-com.svg" },
    { techno: "Astro", routeimg: "/astro-svgrepo-com.svg" },
    { techno: "Next", routeimg: "/nextjs-fill-svgrepo-com.svg" },
    { techno: "React-Native", routeimg: "/react-svgrepo-com.svg" },
  ];
  const skillskillsbackend = [
    { techno: "Python", routeimg: "/python-svgrepo-com.svg" },
    { techno: "C++", routeimg: "/cpp_logo.svg" },
    { techno: "JS", routeimg: "/js-svgrepo-com.svg" },
  ];

  return (
    <section className="mt-5 ">
      <h1>{skills.title}</h1>
      <div className="flex md:flex-row flex-wrap gap-3 flex-col md:items-start  md:justify-center mt-4">
        <div className=" p-2">
          <h1>Frontend and Frameworks</h1>
          <div className="flex  flex-row flex-wrap gap-3 max-w-[400px] md:mt-8 mt-2">
            {skillskillsfrontend.map((item, key) => (
              <div
                className="relative h-20 w-20 group  hover:scale-110 transition-all"
                key={key}
              >
                <img
                  id="image1"
                  src={item.routeimg}
                  className="h-full w-full  object-contain z-10 relative"
                  alt={item.techno}
                />
                <div className=" group-hover:opacity-40 absolute inset-0 blur-md bg-yellow-400 dark:bg-white opacity-0 rounded-full pointer-events-none z-0"></div>
              </div>
            ))}
          </div>
        </div>
        <div className=" p-2">
          <h1>Backend</h1>
          <div className="flex  flex-row flex-wrap gap-3 max-w-[400px] md:mt-8 mt-2">
            {skillskillsbackend.map((item, key) => (
              <div
                className="relative group h-20 w-20 hover:scale-110 transition-all"
                key={key}
              >
                <img
                  id="image2"
                  src={item.routeimg}
                  className="h-full w-full  object-contain z-10 relative"
                  alt={item.techno}
                />
                <div className="absolute group-hover:opacity-40 transition-all inset-0 blur-lg bg-yellow-400 dark:bg-white opacity-0 rounded-full pointer-events-none z-0"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
