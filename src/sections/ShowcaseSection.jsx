import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <a href="https://github.com/Abhimanyusingh001/SKILLSWAP.git" target="_blank" rel="noopener noreferrer" className="first-project-wrapper group" ref={rydeRef}>
            <div className="image-wrapper relative overflow-hidden rounded-xl group-hover:border-2 group-hover:border-white/30">
              <img src="/images/Screenshot 2026-03-14 at 8.15.01 PM.png" alt="SkillSwap Website Interface" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300">View on GitHub →</span>
              </div>
            </div>
            <div className="text-content">
              <h2>
                SkillSwap - The Ultimate Skill Exchange Platform
              </h2>
              <p className="text-white-50 md:text-xl">
                A dynamic skill-sharing website built with modern web technologies.
              </p>
            </div>
          </a>

          <div className="project-list-wrapper overflow-hidden">
            <a href="https://github.com/Abhimanyusingh001/LIBRARY-MANAGEMENT-SYSTEM.git" target="_blank" rel="noopener noreferrer" className="project group" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB] relative overflow-hidden rounded-xl group-hover:border-2 group-hover:border-white/30">
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                  className="w-full h-full object-contain transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <span className="text-white font-bold text-lg px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300">View on GitHub →</span>
                </div>
              </div>
              <h2>The Library Management Platform</h2>
            </a>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="YC Directory App" />
              </div>
              <h2>YC Directory - A Startup Showcase App</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
