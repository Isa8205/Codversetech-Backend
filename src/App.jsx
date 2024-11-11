import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Code, Cloud, Zap, Users, Star, Linkedin, Twitter, Github, ChevronLeft, Lightbulb, FlaskConical, Paintbrush, TestTube, Rocket, RefreshCw, X } from 'lucide-react'
import logo from "./assets/codverselogo.png"
import { Modal } from './components/Modal'
import { h1, h2 } from 'framer-motion/client'

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentSlide, setCurrentSlide] = useState(0)
  const [projectdescription, setdescriptions] = useState([false, 0])

  const services = [
    { icon: <Code className="w-8 h-8" />, title: 'AI Development', description: 'Cutting-edge AI solutions for your business needs' },
    { icon: <Cloud className="w-8 h-8" />, title: 'Cloud Services', description: 'Scalable and secure cloud infrastructure' },
    { icon: <Zap className="w-8 h-8" />, title: 'IoT Solutions', description: 'Connecting your devices to the future' },
    { icon: <Users className="w-8 h-8" />, title: 'Consulting', description: 'Expert guidance for your digital transformation' },
  ]

  const projects = [
    { image: 'https://plus.unsplash.com/premium_photo-1675237625862-d982e7f44696?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: "Olmismis FCs", description: 'We built a system for managing the data of the society' },
    { image: 'https://images.unsplash.com/photo-1523243319451-54b60322f948?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: "Elima Chemist", description: 'A fully functional system for managing the stock as well as the sales. Implemented in react and django' },
    { image: 'https://images.unsplash.com/photo-1606235357537-84aea24d4c4f?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: "Moiben Agrovet", description: "An inventory management system for the stock as well as the sales" }
  ]

  const slides = [
    { image: "https://picsum.photos/seed/slide1/800/600", alt: "AI-powered analytics dashboard", caption: "AI-Powered Analytics" },
    { image: "https://picsum.photos/seed/slide2/800/600", alt: "Cloud infrastructure diagram", caption: "Scalable Cloud Solutions" },
    { image: "https://picsum.photos/seed/slide3/800/600", alt: "IoT devices network", caption: "IoT Ecosystem" },
  ]

  const productionSteps = [
    { icon: <Lightbulb className="w-8 h-8" />, title: "Ideation", description: "Brainstorming and conceptualizing innovative solutions" },
    { icon: <FlaskConical className="w-8 h-8" />, title: "Research & Development", description: "In-depth analysis and prototype creation" },
    { icon: <Paintbrush className="w-8 h-8" />, title: "Design & Implementation", description: "Crafting user-friendly interfaces and robust backends" },
    { icon: <TestTube className="w-8 h-8" />, title: "Testing & Quality Assurance", description: "Rigorous testing to ensure top-notch performance" },
    { icon: <Rocket className="w-8 h-8" />, title: "Deployment", description: "Seamless integration and launch of the product" },
    { icon: <RefreshCw className="w-8 h-8" />, title: "Continuous Improvement", description: "Ongoing updates and enhancements based on user feedback" },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const HeadsUp = () => {
    const project = projects[projectdescription[1]]
    return (
      <motion.div
        className="p-4 bg-orange-200 rounded-sm fixed z-50 w-2/4"
        style={{ right: '50%', left: '50%', transform: 'translate(-50%)' }}
        initial={{ opacity: '.5', marginTop: '-80%' }}
        animate={{ opacity: '1', marginTop: '4px' }}
        transition={{ duration: .5 }}>
        <div className="flex justify-between items-center ">
          <h3>{project.title}</h3>
          <X className=' bg-red-500 text-white cursor-pointer hover:bg-red-600 rounded-sm' onClick={() => (setdescriptions(false))} />
        </div>

        <p>{project.description}</p>
      </motion.div>
    )
  }

  return (
    <div className='relative'>
      {projectdescription[0] && <HeadsUp />}
      <head>
        <title>Home | codversetech</title>
      </head>
      <div className="min-h-screen bg-orange-50 text-gray-800 overflow-hidden">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-r from-orange-400 to-teal-500 opacity-20"
            style={{
              transform: `translate(${mousePosition.x / 50}px, ${mousePosition.y / 50}px)`,
            }}
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Cover Image"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black opacity-40" />
          <div className="relative z-10 text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-6xl font-bold mb-4 flex align-baseline"
            >
              <img className='inline h-16' src={logo} alt="logo" />odverseTech
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl mb-8"
            >
              Innovating for a brighter tomorrow
            </motion.p>
            <a href='#services'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-orange-600 transition duration-300"
              >
                Explore Our Services
              </motion.button>
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white dark:bg-gray-900" id='services'>
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-orange-600">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 dark:bg-gray-700"
                >
                  <div className="text-teal-600 mb-4 dark:text-teal-500">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-orange-800 dark:text-orange-700">{service.title}</h3>
                  <p className="text-gray-700 dark:text-gray-100">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects section */}
        <section className='py-20 bg-orange-50 dark:bg-gray-800' id='projects'>
          <div className="container mx-auto px-4">
            <h2 className="text-4xl text-orange-600 font-bold text-center mb-12">Recent projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 dark:bg-gray-700"
                >
                  <div className="text-teal-600 mb-4 -mx-4 -mt-4"><img className='rounded-t-lg' src={project.image} alt={project.title} /></div>
                  <h3 className="text-xl font-semibold mb-2 text-orange-800 dark:text-orange-600">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-100">{project.description}</p>
                  <button
                    className="text-orange-500 border-orange-500 border-2 rounded-md px-2 py-1 my-3 hover:text-white hover:bg-orange-500 dark:border-orange-600"
                    onClick={() => (setdescriptions([true, index]))}>Learn More</button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* Product Development Process Section */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-teal-600 text-white dark:from-blue-600 dark:to-red-600">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Product Development Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productionSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white bg-opacity-10 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <div className=" p-2 rounded-full mr-4">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                  </div>
                  <p>{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 text-center relative rounded-b-md">
            <h2 className="text-4xl font-bold mb-12 text-orange-600">What Our Clients Say</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {[1, 5, 5].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-orange-100 p-6 rounded-lg max-w-md shadow-lg dark:bg-gray-700"
                >
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg mb-4 text-gray-700 dark:text-gray-100">
                    "FutureTech Solutions has revolutionized our business with their innovative AI solutions. Highly recommended!"
                  </p>
                  <p className="font-semibold text-orange-800 dark:text-orange-6  00">- John Doe, CEO of TechCorp</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-20 bg-orange-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 text-orange-600">Ready to Step into the Future?</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-700 dark:text-gray-100">
              Let's collaborate and bring your ideas to life with our cutting-edge technology solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-teal-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-teal-700 transition duration-300"
            >
              Get Started <ChevronRight className="inline-block ml-2" />
            </motion.button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-orange-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between items-center">
              <div className="w-full md:w-auto mb-8 md:mb-0">
                <h3 className="text-2xl font-bold mb-4">Codversetech</h3>
                <p className="text-orange-200">Codverse Tech provides innovative tech solutions to help businesses streamline their processes, increase efficiency, and adopt cutting-edge technologies.</p>
                {/* <p className="text-orange-200">123 Innovation Street, Tech City, TC 12345</p> */}
                <p className="text-orange-200">contact@codversetech.com</p>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-orange-200 hover:text-white transition duration-300" aria-label="LinkedIn">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-orange-200 hover:text-white transition duration-300" aria-label="Twitter">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-orange-200 hover:text-white transition duration-300" aria-label="GitHub">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="mt-8 text-center text-orange-200">
              <p>&copy; 2024 CodverseTech Solutions. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}