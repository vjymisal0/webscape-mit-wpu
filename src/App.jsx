import { useState } from 'react';
import Home from './pages/Home';
import Events from './pages/Events';
import Projects from './pages/Projects';
import { BrowserRouter, Link, Route, Routes } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <BrowserRouter>
      <div className="App flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <header className="bg-gray-800 text-white sticky top-0 z-50">
          <nav className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="text-xl font-bold">
                <Link to="/" className="hover:text-yellow-400 transition-colors duration-300">
                  Tech Innovators Club
                </Link>
              </div>

              {/* Desktop Menu */}
              <ul className="hidden md:flex space-x-8">
                <li>
                  <motion.div whileHover="hover" variants={linkVariants}>
                    <Link
                      to="/"
                      className="hover:text-yellow-400 transition-colors duration-300"
                    >
                      Home
                    </Link>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileHover="hover" variants={linkVariants}>
                    <Link
                      to="/events"
                      className="hover:text-yellow-400 transition-colors duration-300"
                    >
                      Events
                    </Link>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileHover="hover" variants={linkVariants}>
                    <Link
                      to="/projects"
                      className="hover:text-yellow-400 transition-colors duration-300"
                    >
                      Projects
                    </Link>
                  </motion.div>
                </li>
              </ul>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white focus:outline-none"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={menuVariants}
                  className="md:hidden overflow-hidden"
                >
                  <ul className="py-4 space-y-4">
                    <motion.li
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Link
                        to="/"
                        className="block hover:text-yellow-400 transition-colors duration-300"
                      >
                        Home
                      </Link>
                    </motion.li>
                    <motion.li
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Link
                        to="/events"
                        className="block hover:text-yellow-400 transition-colors duration-300"
                      >
                        Events
                      </Link>
                    </motion.li>
                    <motion.li
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Link
                        to="/projects"
                        className="block hover:text-yellow-400 transition-colors duration-300"
                      >
                        Projects
                      </Link>
                    </motion.li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <p className="text-gray-400">Email: info@techinnovators.com</p>
                <p className="text-gray-400">Phone: +1 234 567 890</p>
                <p className="text-gray-400">Address: MIT-WPU Campus</p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/events" className="text-gray-400 hover:text-white transition-colors duration-300">
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link to="/projects" className="text-gray-400 hover:text-white transition-colors duration-300">
                      Projects
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 rounded-l-lg w-full text-gray-900 focus:outline-none"
                  />
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700 text-center">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} CSI MIT-WPU. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;