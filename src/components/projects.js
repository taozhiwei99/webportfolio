import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BusImg from '../assets/bus.png';
import webImg from '../assets/webportal.png';
import AIImg from '../assets/AI.png';
import BookImg from '../assets/books.png';
import gearImg from '../assets/gears.png';

const projectData = [
  {
      title: "Bus Booking App",
      img: BusImg,
      description: `Built with React Native and RESTful APIs, 
      this app integrates AWS services (S3, RDS, API Gateway, Lambda, WebSocket) 
      to streamline school bus booking for children.`,
      video: '',
  },
  {
      title: "Web Portal Management",
      img: webImg,
      description: `A ReactJS website styled with Tailwind CSS, resembling a 
      modern bus company platform. Manages bookings, subscriptions, and admin 
      tasks using AWS services (Amplify, S3 API Gateway, Lambda, RDS).`,
      video: '',
  },
  {
      title: "AI Dog Breed Finder",
      img: AIImg,
      description: "AI model for identifying dog breeds from images.",
  },
  {
      title: "Book Rating Website",
      img: BookImg,
      description: `Website built with .NET and PHP backend, 
      simulating a research paper platform for publishing, reading, and rating papers.`,
  },
  {
      title: "More to come",
      img: gearImg,
      description: `New projects in progress...`,
  },
];

function Project() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };

    const openLink = (videoLink) => {
        if(videoLink) {
            window.open(videoLink, '_blank');
        }
    };
  
    return (
        <div className="w-4/5 m-auto">
          <div className="mt-20 bg-gradient-to-br from-gray-800 to-black rounded-lg p-6">
            <div className='text-cyan-200 font-bold text-5xl text-center mb-6'>Projects</div> {/* Added mb-6 for bottom margin */}
            <Slider {...settings}>
              {projectData.map((project, index) => (
                <div key={index} className="bg-dark-blue h-[450px] text-white rounded-xl overflow-hidden relative">
                  <div className="h-56 bg-gradient-to-br from-gray-800 to-blue-900 rounded-t-xl flex justify-center items-center">
                    <img src={project.img} alt="" className="h-44 w-44" />
                  </div>
                  <div className="flex flex-col justify-center items-center gap-4 p-4">
                    <p className="text-xl font-semibold">{project.title}</p>
                    <p>{project.description}</p>
                    {project.video && (
                      <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl" onClick={() => openLink(project.video)}>Video Demo</button>
                    )}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      );
    } 

export default Project;