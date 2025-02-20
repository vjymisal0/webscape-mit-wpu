import { motion, useScroll, useTransform } from 'framer-motion';
import {
  FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaRocket,
  FaUsers, FaLightbulb, FaCode, FaChalkboardTeacher,
  FaLaptop, FaHandshake, FaBrain, FaEnvelope, FaArrowRight
} from 'react-icons/fa';
import { Link } from 'react-router';
import { useEffect, useRef } from 'react';

const Home = () => {
  const { scrollY } = useScroll();
  const heroRef = useRef(null);

  // Parallax effect for hero section
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      y: -15,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const statsData = [
    { icon: <FaUsers />, number: "500+", label: "Active Members" },
    { icon: <FaRocket />, number: "50+", label: "Projects Completed" },
    { icon: <FaLightbulb />, number: "100+", label: "Workshops" },
    { icon: <FaCode />, number: "20+", label: "Tech Stacks" }
  ];

  const features = [
    {
      title: "Hands-on Learning",
      description: "Get practical experience through real-world projects and workshops.",
      icon: <FaLaptop className="text-blue-500" size={24} />
    },
    {
      title: "Expert Mentorship",
      description: "Learn from industry professionals and experienced developers.",
      icon: <FaChalkboardTeacher className="text-green-500" size={24} />
    },
    {
      title: "Innovation Hub",
      description: "Access to cutting-edge technologies and innovative projects.",
      icon: <FaBrain className="text-purple-500" size={24} />
    },
    {
      title: "Career Growth",
      description: "Build your portfolio and enhance your career prospects.",
      icon: <FaHandshake className="text-yellow-500" size={24} />
    }
  ];

  const teamMembers = [
    {
      name: "John Doe",
      role: "President",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      email: "john@csi.org"
    },
    {
      name: "Jane Smith",
      role: "Technical Head",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      github: "https://github.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
      email: "jane@csi.org"
    },
    {
      name: "Mike Johnson",
      role: "Event Head",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      github: "https://github.com/mikejohnson",
      linkedin: "https://linkedin.com/in/mikejohnson",
      email: "mike@csi.org"
    },
    {
      name: "Sarah Wilson",
      role: "Creative Head",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      github: "https://github.com/sarahwilson",
      linkedin: "https://linkedin.com/in/sarahwilson",
      email: "sarah@csi.org"
    }
  ];

  const upcomingEvents = [
    {
      title: "Web Development Workshop",
      date: "March 15, 2025",
      type: "Workshop",
      color: "blue"
    },
    {
      title: "AI/ML Seminar",
      date: "March 20, 2025",
      type: "Seminar",
      color: "purple"
    },
    {
      title: "Hackathon 2025",
      date: "April 1, 2025",
      type: "Competition",
      color: "green"
    }
  ];

  // Intersection Observer for section animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.section-fade-up').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page">
      {/* Enhanced Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ y, opacity }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 hero-bg-animation">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.2,
              filter: 'brightness(0.8) contrast(1.2)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50" />
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Column - Text Content */}
            <motion.div variants={itemVariants} className="text-white space-y-8">
              <motion.h1
                className="text-5xl md:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Innovate
                <span className="block mt-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    Together
                  </span>
                </span>
                <span className="block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    Excel
                  </span>
                </span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Join a community of passionate developers, designers, and innovators building the future of technology.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold flex items-center justify-center gap-2 group hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10">Get Started</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  <motion.div
                    className="absolute inset-0 bg-white opacity-0"
                    initial={false}
                    whileHover={{
                      opacity: [0, 0.1, 0],
                      transition: { duration: 1.5, repeat: Infinity }
                    }}
                  />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-lg rounded-full text-white font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  Watch Demo
                </motion.button>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {[
                  { icon: <FaUsers />, number: "500+", label: "Members" },
                  { icon: <FaCode />, number: "50+", label: "Projects" },
                  { icon: <FaLightbulb />, number: "100+", label: "Workshops" },
                  { icon: <FaRocket />, number: "20+", label: "Awards" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="text-center p-4 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <motion.div
                      className="text-2xl mb-2 text-blue-400"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {stat.icon}
                    </motion.div>
                    <div className="text-2xl font-bold shimmer">{stat.number}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Decorative Elements */}
            <motion.div
              variants={itemVariants}
              className="hidden lg:block relative"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative w-full h-[600px] rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-2xl" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.img
                    src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
                    alt="Team Collaboration"
                    className="w-full h-full object-cover rounded-2xl"
                    style={{ opacity: 0.9 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute inset-0 pointer-events-none overflow-hidden"
        >
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-20 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
        </motion.div>
      </motion.section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white section-fade-up">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-5xl font-bold text-gray-900 mb-4"
            >
              Meet Our Team
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              The passionate leaders driving innovation and excellence at CSI
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex justify-center space-x-4 mb-4">
                      <motion.a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, y: -2 }}
                        className="bg-white/10 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/20 transition-colors duration-300"
                      >
                        <FaGithub size={20} />
                      </motion.a>
                      <motion.a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, y: -2 }}
                        className="bg-white/10 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/20 transition-colors duration-300"
                      >
                        <FaLinkedin size={20} />
                      </motion.a>
                      <motion.a
                        href={`mailto:${member.email}`}
                        whileHover={{ scale: 1.2, y: -2 }}
                        className="bg-white/10 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/20 transition-colors duration-300"
                      >
                        <FaEnvelope size={20} />
                      </motion.a>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full shadow-lg">
                    {member.role}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white section-fade-up">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-5xl font-bold text-gray-900 mb-4"
            >
              Why Join Us?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Discover the benefits of being part of our vibrant tech community
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <motion.div
                  className="bg-gray-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50 section-fade-up">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
              <p className="text-xl text-gray-600">Don't miss out on our exciting events</p>
            </motion.div>

            <motion.div variants={containerVariants} className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className={`bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 ${event.color === 'blue' ? 'border-blue-500' :
                      event.color === 'purple' ? 'border-purple-500' : 'border-green-500'
                    }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                      <p className="text-gray-600">{event.date}</p>
                    </div>
                    <span className={`px-4 py-1 rounded-full text-sm font-medium ${event.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                        event.color === 'purple' ? 'bg-purple-100 text-purple-600' : 'bg-green-100 text-green-600'
                      }`}>
                      {event.type}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="text-center mt-8">
              <Link to="/events">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-xl"
                >
                  View All Events
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-blue-600 to-blue-500 relative overflow-hidden section-fade-up">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "linear-gradient(0deg, #4f46e5 0%, #3b82f6 100%)",
              "linear-gradient(60deg, #3b82f6 0%, #4f46e5 100%)",
              "linear-gradient(120deg, #4f46e5 0%, #3b82f6 100%)",
              "linear-gradient(180deg, #3b82f6 0%, #4f46e5 100%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <motion.h2
              variants={itemVariants}
              className="text-5xl font-bold mb-6"
            >
              Ready to Start Your Journey?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-2xl text-blue-100 mb-8"
            >
              Join our community today and take the first step towards becoming a tech leader of tomorrow.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/events">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
                >
                  <span className="relative z-10">View Events</span>
                  <motion.div
                    className="absolute inset-0 bg-blue-100 opacity-0 group-hover:opacity-50"
                    initial={false}
                    whileHover={{
                      scale: [1, 1.2, 1],
                      transition: { duration: 1, repeat: Infinity }
                    }}
                  ></motion.div>
                </motion.button>
              </Link>
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  <span className="relative z-10">Explore Projects</span>
                  <motion.div
                    className="absolute inset-0 bg-white opacity-0"
                    initial={false}
                    whileHover={{
                      opacity: 0.1,
                      scale: [1, 1.2, 1],
                      transition: { duration: 1, repeat: Infinity }
                    }}
                  ></motion.div>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-16 bg-white section-fade-up">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-semibold text-gray-900 mb-8"
            >
              Connect With Us
            </motion.h3>
            <motion.div
              variants={itemVariants}
              className="flex justify-center space-x-8"
            >
              {[
                { icon: <FaGithub size={32} />, url: "https://github.com", label: "GitHub", color: "hover:text-gray-800" },
                { icon: <FaLinkedin size={32} />, url: "https://linkedin.com", label: "LinkedIn", color: "hover:text-blue-600" },
                { icon: <FaTwitter size={32} />, url: "https://twitter.com", label: "Twitter", color: "hover:text-blue-400" },
                { icon: <FaInstagram size={32} />, url: "https://instagram.com", label: "Instagram", color: "hover:text-pink-600" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${social.label} page`}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className={`text-gray-600 ${social.color} transition-all duration-300`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
