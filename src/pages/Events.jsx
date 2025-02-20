import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaUsers,
  FaSearch,
  FaTimes,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaNetworkWired,
  FaGraduationCap
} from 'react-icons/fa';

const events = [
  {
    id: 1,
    title: 'Web Development Bootcamp',
    date: '2025-03-15',
    time: '10:00 AM',
    description: 'Intensive hands-on workshop covering modern web development technologies including React, Node.js, and cloud deployment.',
    category: 'Workshop',
    location: 'Tech Lab 101',
    capacity: 30,
    registrationDeadline: '2025-03-10',
    instructor: 'Dr. Sarah Wilson',
    prerequisites: ['Basic HTML/CSS', 'JavaScript fundamentals'],
    icon: <FaLaptopCode className="text-blue-500" />
  },
  {
    id: 2,
    title: 'AI & Machine Learning Seminar',
    date: '2025-03-20',
    time: '2:00 PM',
    description: 'Expert-led seminar on the latest trends in AI and practical applications of machine learning in industry.',
    category: 'Seminar',
    location: 'Main Auditorium',
    capacity: 100,
    registrationDeadline: '2025-03-15',
    instructor: 'Prof. James Chen',
    prerequisites: ['Basic Python', 'Statistics'],
    icon: <FaGraduationCap className="text-purple-500" />
  },
  {
    id: 3,
    title: 'Tech Startup Networking',
    date: '2025-03-25',
    time: '6:00 PM',
    description: 'Connect with successful tech entrepreneurs and learn about the startup ecosystem.',
    category: 'Networking',
    location: 'Innovation Hub',
    capacity: 50,
    registrationDeadline: '2025-03-20',
    instructor: 'Various Industry Leaders',
    prerequisites: [],
    icon: <FaNetworkWired className="text-green-500" />
  },
  {
    id: 4,
    title: 'Cybersecurity Workshop',
    date: '2025-04-05',
    time: '11:00 AM',
    description: 'Practical workshop on cybersecurity best practices and ethical hacking techniques.',
    category: 'Workshop',
    location: 'Security Lab',
    capacity: 25,
    registrationDeadline: '2025-04-01',
    instructor: 'Alex Thompson',
    prerequisites: ['Basic Networking', 'Linux Commands'],
    icon: <FaChalkboardTeacher className="text-red-500" />
  },
];

const Events = () => {
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const categories = ['All', 'Workshop', 'Seminar', 'Networking'];

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      const filtered = events.filter(event => {
        const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeFilter === 'All' || event.category === activeFilter;
        return matchesSearch && matchesCategory;
      });

      setFilteredEvents(filtered);
      setIsLoading(false);
    };

    fetchEvents();
  }, [searchTerm, activeFilter]);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2 }
    }
  };

  const EventSkeleton = () => (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 bg-gray-200 rounded-lg animate-pulse" />
        <div className="flex-1">
          <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-1/4 mt-2 animate-pulse" />
        </div>
      </div>
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
        <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse" />
      </div>
      <div className="mt-4 space-y-2">
        <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
        <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse" />
        <div className="h-4 bg-gray-200 rounded w-1/3 animate-pulse" />
      </div>
      <div className="mt-6">
        <div className="h-10 bg-gray-200 rounded animate-pulse" />
      </div>
    </div>
  );

  return (
    <div className="events-page bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800"
          >
            Upcoming Events
          </motion.h1>

          {/* Search and Filter Section */}
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="relative mb-6">
              <div className={`relative transition-all duration-300 ${isSearchFocused ? 'transform -translate-y-1 shadow-lg' : ''
                }`}>
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search events..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 focus:outline-none focus:border-blue-500 transition-all duration-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeFilter === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                    }`}
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Events Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="wait">
              {isLoading ? (
                // Skeleton Loading
                [...Array(6)].map((_, index) => (
                  <motion.div
                    key={`skeleton-${index}`}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <EventSkeleton />
                  </motion.div>
                ))
              ) : (
                filteredEvents.map((event) => (
                  <motion.div
                    key={event.id}
                    variants={itemVariants}
                    layout
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                    onClick={() => handleEventClick(event)}
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <div className="p-3 bg-gray-100 rounded-lg mr-4">
                            {event.icon}
                          </div>
                          <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                        </div>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {event.category}
                        </span>
                      </div>

                      <div className="space-y-3 mb-4">
                        <div className="flex items-center text-gray-600">
                          <FaCalendarAlt className="mr-2" />
                          <span>{format(new Date(event.date), 'MMMM d, yyyy')}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <FaClock className="mr-2" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <FaMapMarkerAlt className="mr-2" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <FaUsers className="mr-2" />
                          <span>Capacity: {event.capacity} people</span>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>

                      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                        Register Now
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Event Details Modal */}
      <AnimatePresence>
        {showModal && selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-2xl max-w-2xl w-full p-6 relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-300"
              >
                <FaTimes size={24} />
              </button>

              <div className="flex items-center mb-6">
                <div className="p-4 bg-gray-100 rounded-lg mr-4">
                  {selectedEvent.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">{selectedEvent.title}</h2>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {selectedEvent.category}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <FaCalendarAlt className="mr-2" />
                    <span>{format(new Date(selectedEvent.date), 'MMMM d, yyyy')}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaClock className="mr-2" />
                    <span>{selectedEvent.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{selectedEvent.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaUsers className="mr-2" />
                    <span>Capacity: {selectedEvent.capacity} people</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Prerequisites:</h3>
                  {selectedEvent.prerequisites.length > 0 ? (
                    <ul className="list-disc list-inside text-gray-600">
                      {selectedEvent.prerequisites.map((prereq, index) => (
                        <li key={index}>{prereq}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600">No prerequisites required</p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">Event Description:</h3>
                <p className="text-gray-600">{selectedEvent.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">Instructor:</h3>
                <p className="text-gray-600">{selectedEvent.instructor}</p>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all duration-300">
                  Register Now
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Events;