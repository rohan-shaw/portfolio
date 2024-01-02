import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  const [isDeviceAllowed, setDeviceAllowed] = useState(window.matchMedia("(min-width: 800px)").matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 800px)");
    setDeviceAllowed(mediaQuery.matches);
    // setIsMobile(mediaQuery.matches);
    // const handleMediaQueryChange = (event) => {
    //   setDeviceAllowed(event.matches);
    //   setIsMobile(event.matches);
    // };
    // mediaQuery.addEventListener("change", handleMediaQueryChange);
    // return () => {
    //   mediaQuery.removeEventListener("change", handleMediaQueryChange);
    // };
  })
  console.log(isDeviceAllowed)

if (!isDeviceAllowed) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center mobile-only-message">
      <img
        className="w-20 h-20 rounded-full mb-4"
        src="\assets\dp-5.jpg"
        alt="Profile"
      />
      <p className="text-lg font-bold mb-2">Rohan Shaw</p>
      <div className="flex space-x-4">
        {/* Social Icons with hover effect */}
        <a
          href="https://www.linkedin.com/in/rohan-shaw-rs"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors duration-300"
        >
          <img className="w-6 h-6 rounded-full" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/rohan-shaw"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors duration-300"
        >
          <img className="w-6 h-6 rounded-full" src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="Github" />
        </a>
        <a
          href="https://x.com/heyMeRohan"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors duration-300"
        >
          <img className="w-6 h-6 rounded-full" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-logo-icon.png" alt="Twitter" />
        </a>
        {/* Add more social icons as needed */}
      </div>
      <a
        href="\assets\Resume-01-2024.pdf"
        download="rohan-shaw-resume.pdf"
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
      >
        Download My Resume
      </a>
      <p className="mt-4">
        Please open this site on a desktop device for the best experience.
      </p>
    </div>
  );
}

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
