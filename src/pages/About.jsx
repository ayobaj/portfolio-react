import { useEffect, useRef } from "react";
import gsap from "gsap";
import html from "../PreImg/html.webp"
import java from "../PreImg/javascript.svg"
import react from "../PreImg/react.svg"
import git from "../PreImg/git.svg"
import redux from "../PreImg/redux.svg"
import tailwind from "../PreImg/tailwindcss.svg"
import ts from "../PreImg/ts.png"
import next from "../PreImg/next.png"
import { FaCode } from "react-icons/fa";

const About = () => {

  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.from(aboutRef.current, {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: 'power2.out',
    });
  }, []);
  

  return (
    <div className="bg-gradient-to-b h-full">
      
      <div  className=" space-y-3 md:space-y-8 pl-[22px] pr-[22px]  lg:pl-[22px] lg:pr-[22px] lg:pt-6 pt-4">
        
        <h1 className="text-center lg:text-center text-2xl lg:text-4xl  transition-transform transform-gpu hover:rotate-3 origin-center duration-300 font-bold ">PERSONAL INFO</h1>

        <h3 className="w-[97%] md:w-[100%] lg:w-[100%] lg:text-xl  md:text-[20px]"> Hi, I'm <span className="font-bold tilt">Ayomide</span>. I'm a Frontend Engineer. I like to look for original 
          answers to challenging issues. I first became interested in app development 
          in late 2022, at which point I made the decision to study HTML and CSS</h3>

        <h3 className="lg:text-xl md:text-[20px] w-[100%] md:[100%]">
            Today, having learned about a variety of web technologies and their best practices, I have completed a number of enjoyable and fascinating tasks.
        </h3>

        <h3 className="lg:text-xl md:text-[20px] ">
            I adore programming because it is so useful and allows me to overcome obstacles in the real world. I use programming as a method to creatively express myself. In addition, there's always so much to discover, which excites me!
        </h3> 

        <h3 className="lg:text-xl md:text-[20px]">
          During my leisure time, I experiment with new technologies and draw inspiration from the work of others to create side projects. Apart from that you can find me on the football pitch or playing the drums. 
        </h3>

        <div className="lg:text-xl md:text-[20px]">
          Here are a few technologies i utilize:
            <div className="flex space-x-7 font-bold pt-3 ">
              <ul className="">
                <li className="flex items-center gap-2 tilt"><FaCode /> Javascript</li>
                <li className="flex items-center gap-2 tilt"><FaCode /> ReactJS</li>
                <li className="flex items-center gap-2 tilt"><FaCode /> Tailwind CSS</li>
              </ul>
            
              <ul>
                <li className="flex items-center gap-2 tilt"><FaCode /> Redux</li>
                <li className="flex items-center gap-2 tilt"><FaCode /> GSAP</li>
                <li className="flex items-center gap-2 tilt"><FaCode /> Typescript</li>
              </ul>
            </div>
        </div>

      <div className="flex flex-col space-y-7 pt-5">
        <h1 className="text-center font-bold text-2xl tilt">TECH STACK</h1>
        <div className=" flex items-center justify-center space-x-3 ">
          <img className="inline-block transition-transform transform-gpu hover:rotate-6 origin-center duration-300 w-[60px]" src={html}/>
          <img className="inline-block transition-transform transform-gpu hover:rotate-6 origin-center duration-300 w-[60px]" src={java}/>
          <img className="inline-block transition-transform transform-gpu hover:rotate-6 origin-center duration-300 w-[60px]" src={react}/>
        </div>

        <div className="flex items-center justify-center space-x-3">
          <img className="inline-block transition-transform transform-gpu hover:rotate-6 origin-center duration-300 w-[60px]" src={redux}/>
          <img className="inline-block transition-transform transform-gpu hover:rotate-6 origin-center duration-300 w-[60px] bg-blue-200 rounded-sm" src={tailwind}/>
          <img className="inline-block transition-transform transform-gpu hover:rotate-6 origin-center duration-300 w-[60px]" src={git}/>
        </div>

        <div className="flex items-center justify-center space-x-3">
          <img className="inline-block transition-transform transform-gpu hover:rotate-6 origin-center duration-300 w-[60px]" src={ts}/>
          <img className="inline-block transition-transform transform-gpu hover:rotate-6 origin-center duration-300 w-[60px]" src={next}/>
        </div>
      </div>

      <div className="space-y-5 lg:text-xl">
        
        <h1 className="font-bold text-2xl text-center mt-[80px]">GET IN TOUCH </h1>
        
        <p>Are you prepared to advance your web projects?
            Together, let's work to develop outstanding user experiences.
            Get in touch with me right now to talk about how I can help with your frontend development requirements. Reach out, and together let's create something truly magnificent!
        </p>

          <div className="flex justify-center">
            
            <a href="mailto:ayobaj007@gmail.com" className="buttons">
            
            <button className=" mb-9 w-[100px] pt-2 pb-3 bg-gradient-to-r bg-blue-950 text-white hover:from-blue-500 hover:to-blue-950 focus:outline-none focus:ring focus:ring-blue-100 active:bg-blue-700 rounded-lg font-bold shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              Send Email
              </button>
            
            </a>
            
          </div>


      </div>

      </div>
    </div>
  )
}

export default About
