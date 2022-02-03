
import React from "react";
import Particles from 'react-particles-js';


export default function Header() {

   
    return (

      <div className=" overflow-hidden">
           <Particles id="particles-js"
            params={{
                particles:  {
                    "number": {
                      "value": 80,
                      "density": {
                        "enable": true,
                        "value_area": 800
                      }
                    },
                    "color": {
                      "value": "#fff"
                    },
                    "shape": {
                      "type": "circle",
                      "stroke": {
                        "width": 0,
                        "color": "#000000"
                      },
                      "polygon": {
                        "nb_sides": 5
                      },
                      "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                      }
                    },
                    "opacity": {
                      "value": 0.5,
                      "random": false,
                      "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                      }
                    },
                    "size": {
                      "value": 3,
                      "random": true,
                      "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                      }
                    },
                    "line_linked": {
                      "enable": true,
                      "distance": 150,
                      "color": "#ffffff",
                      "opacity": 0.4,
                      "width": 1
                    },
                    "move": {
                      "enable": true,
                      "speed": 2,
                      "direction": "none",
                      "random": false,
                      "straight": false,
                      "out_mode": "out",
                      "bounce": false,
                      "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                      }
                    }
                  },
                  "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                      "onhover": {
                        "enable": true,
                        "mode": "repulse"
                      },
                      "onclick": {
                        "enable": true,
                        "mode": "push"
                      },
                      "resize": true
                    },
                    "modes": {
                      "grab": {
                        "distance": 400,
                        "line_linked": {
                          "opacity": 1
                        }
                      },
                      "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        // "speed": 3
                      },
                      "repulse": {
                        "distance": 200,
                        "duration": 0.4
                      },
                      "push": {
                        "particles_nb": 4
                      },
                      "remove": {
                        "particles_nb": 2
                      }
                    }
                  }
                }
              }

              >
           </Particles>
                 
            <div  className="absolute top-10 w-full px-4 pt-16 sm:mt-8 md:mt-16 md:mb-16 mt-2 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
                <div className="flex justify-center h-full  sm:mr-20 overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
                   <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcG1lbnQlMjBhZ2VuY3l8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=70"
          className="object-cover object-top w-full h-64 max-w-xl -mb-16 rounded shadow-2xl lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-28 lg:h-auto lg:max-w-screen-md"
          alt=""
        />
                </div>

        <div className="max-w-xl mx-auto lg:max-w-screen-xl">
          <div className="mb-16 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-semibold tracking-tight text-gray-100 sm:text-4xl sm:leading-none">
                 Web Development Company 

                <br className="hidden md:block" />
                {' '}based in Canada{' '}
                <span className="inline-block text-white">
              
                </span>
              </h2>
              <p className="text-base text-gray-100 md:text-lg">
              We Will Make Your Brand Visible & Deliver Exactly What You Need!
              </p>
            </div>
            <div className="flex items-center">
              <a
                href="/contact"
                className="inline-flex items-center border-2 border-yellow-50 justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Get started
              </a>
           
            </div>
          </div>
        </div>
        </div>


       
      </div>
    );
  };


