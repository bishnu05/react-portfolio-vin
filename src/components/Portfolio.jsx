import React from "react";
import jcrew from "../assets/portfolio/jcrew.png";
import lifestore from "../assets/portfolio/lifestore.png";
import mynthresa from "../assets/portfolio/mynthresa.png";
import buffer from "../assets/portfolio/buffer.png"

import { Fade } from "react-reveal"
import { FaEye,FaGithub} from "react-icons/fa";
const Portfolio = () => {
  const portfolios = [

  
    {

      id: 1,
      src: buffer,
      link: 'https://vinodproject.vercel.app/',
      repo: 'https://github.com/vin9012d/moral-day-3198',
      text:"Lifestore site clone",
      skills: "React, Redux, React-redux, NPM packages,Javascript, Chakra UI, CSS",
      desc:`This project is clone of Buffer.com   which is digital marketing management site. Here I implemented some functionalities like genetate the graph from data,connect the channels..etc  `,
      title:"Buffer Clone"
    

  },
    {
      id: 2,
      src: lifestore,
      link: 'https://vinodproject.vercel.app/',
      repo: 'https://github.com/vin9012d/moral-day-3198',
      text: "Lifestore site clone",
      skills: "React, NPM packages,Javascript, Chakra UI, CSS",
      desc: "This project is about building an online e-commerce store. Here with the use of React I implemeted the functionalities of an e-commerce website like filtering,add to cart,checkout..etc  ",
      title:"Lifestore Clone"
    },
    {
      id: 3,
      src: jcrew,
      link: 'https://storied-platypus-db74f4.netlify.app/',
      repo: 'https://github.com/vin9012d/Project-unit-3',
      text: "Jcrew site clone",
      skills: "Javascript,HTML,CSS",
      desc: "This project is about building an online e-commerce store. We implemeted all the functionality of an e-commerce store. Here I implemented the checkout with all the functionality as real time application",
      title:"Jcrew Clone"
    },
    {
      id: 4,
      src: mynthresa,
      link: 'https://quiet-marzipan-8a0d28.netlify.app/',
      repo: 'https://github.com/vin9012d/PROJECT-UNIT-2',
      text: "Mynthresa site clone",
      skills: "Javascript,HTML,CSS",
      desc: "This project is about building an online e-commerce store. Here I implemeted all the functionalities of an e-commerce website like sorting,add to cart,checkout..etc  ",
      title:"Mynthresa Clone"
    }


  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white portfolio1 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo ,title,desc,skills}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-110">
           <Fade top duration={1000} distance="40px">    <img
                src={src}
                alt="projects"
                className="rounded-md hover:scale-110 duration-500 "
              /> </Fade>
              <div className="p-4">
                <p className="text-center text-xl p-2" >{title}</p>
                <p className="text-sm">{ desc}</p>
                <p className="mt-5 text-sm">Tech Stack : { skills}</p>
              </div>
              <div className="flex m-auto items-center justify-between">
                <button className=" px-6 py-1 m-4 duration-200 text-center   hover:scale-110" onClick={ () => window.open(link, '_blank')}>
                  <FaEye size={30} />
                </button>
                <button className=" px-6 py-1 m-4 text-center duration-200 hover:scale-110 " onClick={ () => window.open(repo, '_blank')}>
                  <FaGithub size={30} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;