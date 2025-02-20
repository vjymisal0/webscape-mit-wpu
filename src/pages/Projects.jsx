import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGithub, FaExternalLinkAlt, FaSearch, FaTimes, FaCode,
  FaUsers, FaRocket, FaLaptopCode, FaBrain, FaMobileAlt,
  FaVrCardboard, FaLeaf, FaFilter, FaStar
} from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'AI-Powered Study Assistant',
    description: 'An intelligent chatbot that helps students with their studies using natural language processing and machine learning algorithms.',
    longDescription: 'This AI-powered study assistant uses cutting-edge natural language processing and machine learning algorithms to provide personalized learning support. It can answer questions, explain complex topics, and adapt to each student\'s learning style.',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    category: 'Artificial Intelligence',
    technologies: ['Python', 'TensorFlow', 'Natural Language Processing', 'React'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com',
    team: ['John Doe', 'Jane Smith'],
    status: 'Completed',
    icon: <FaBrain className="text-purple-500" />,
    features: [
      'Natural language understanding',
      'Personalized learning paths',
      'Real-time feedback',
      'Progress tracking'
    ],
    rating: 4.8,
    completionDate: '2025-02-15'
  },
  {
    id: 2,
    title: 'Smart Campus Navigation',
    description: 'A mobile application that helps students and visitors navigate the campus efficiently using indoor positioning systems.',
    longDescription: 'The Smart Campus Navigation app revolutionizes how people move around campus. Using advanced indoor positioning technology and real-time updates, it provides the most efficient routes while considering factors like crowd density and accessibility.',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    category: 'Mobile Development',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Indoor Positioning'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com',
    team: ['Alice Johnson', 'Bob Wilson'],
    status: 'In Progress',
    icon: <FaMobileAlt className="text-emerald-500" />,
    features: [
      'Indoor navigation',
      'Real-time crowd monitoring',
      'Accessibility routes',
      'Event integration'
    ],
    rating: 4.5,
    completionDate: '2025-03-30'
  },
  {
    id: 3,
    title: 'Virtual Reality Lab',
    description: 'A VR-based virtual laboratory for conducting physics experiments safely and interactively.',
    longDescription: 'Experience physics like never before with our Virtual Reality Lab. This immersive platform allows students to conduct experiments in a safe, controlled environment while visualizing complex physics concepts in 3D space.',
    imageUrl: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620',
    category: 'Virtual Reality',
    technologies: ['Unity', 'C#', 'VR Development', 'Physics Engine'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com',
    team: ['Charlie Brown', 'Diana Prince'],
    status: 'Completed',
    icon: <FaVrCardboard className="text-emerald-500" />,
    features: [
      '3D physics simulations',
      'Interactive experiments',
      'Real-time data visualization',
      'Multi-user sessions'
    ],
    rating: 4.9,
    completionDate: '2024-12-01'
  },
  {
    id: 4,
    title: 'Eco-Track',
    description: 'An IoT-based system for monitoring and optimizing energy consumption across campus buildings.',
    longDescription: 'Eco-Track combines IoT sensors with advanced analytics to create a comprehensive energy monitoring system. It helps reduce carbon footprint while providing detailed insights into energy usage patterns across campus.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    category: 'Internet of Things',
    technologies: ['Arduino', 'React', 'AWS IoT', 'Data Analytics'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com',
    team: ['Eva Green', 'Frank Castle'],
    status: 'In Progress',
    icon: <FaLeaf className="text-emerald-500" />,
    features: [
      'Real-time energy monitoring',
      'Predictive maintenance',
      'Automated optimization',
      'Sustainability reports'
    ],
    rating: 4.7,
    completionDate: '2025-01-15'
  }
];

const Projects = () => {
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [sortBy, setSortBy] = useState('latest');

  const categories = ['All', 'Artificial Intelligence', 'Mobile Development', 'Virtual Reality', 'Internet of Things'];
  const sortOptions = [
    { value: 'latest', label: 'Latest' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'name', label: 'Name' }
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      let filtered = [...projects].filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeFilter === 'All' || project.category === activeFilter;
        return matchesSearch && matchesCategory;
      });

      // Sort projects
      filtered.sort((a, b) => {
        switch (sortBy) {
          case 'rating':
            return b.rating - a.rating;
          case 'name':
            return a.title.localeCompare(b.title);
          case 'latest':
          default:
            return new Date(b.completionDate) - new Date(a.completionDate);
        }
      });

      setDisplayedProjects(filtered);
      setIsLoading(false);
    };

    fetchProjects();
  }, [searchTerm, activeFilter, sortBy]);

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

  const ProjectSkeleton = () => (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <div className="h-48 bg-gray-200 rounded-xl animate-pulse mb-4" />
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
      <div className="flex flex-wrap gap-2 my-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-6 w-16 bg-gray-200 rounded-full animate-pulse" />
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="w-24 h-8 bg-gray-200 rounded-lg animate-pulse" />
        <div className="flex gap-2">
          <div className="w-8 h-8 bg-gray-200 rounded-lg animate-pulse" />
          <div className="w-8 h-8 bg-gray-200 rounded-lg animate-pulse" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Header Section */}
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              variants={itemVariants}
              className="text-5xl font-bold text-gray-900 mb-6"
            >
              Our Projects
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600"
            >
              Explore our innovative projects that showcase our technical expertise and creativity
            </motion.p>
          </div>

          {/* Search and Filters */}
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto space-y-6"
          >
            {/* Search Bar */}
            <div className="relative">
              <div className={`relative transition-all duration-300 ${isSearchFocused ? 'transform -translate-y-1 shadow-lg' : ''
                }`}>
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                />
              </div>
            </div>

            {/* Filters and Sort */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveFilter(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${activeFilter === category
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                      }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none px-4 py-2 pr-8 rounded-lg border border-gray-200 bg-white text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      Sort by: {option.label}
                    </option>
                  ))}
                </select>
                <FaFilter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                    <ProjectSkeleton />
                  </motion.div>
                ))
              ) : (
                displayedProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    layout
                    className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                  >
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden rounded-t-2xl">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${project.status === 'Completed'
                            ? 'bg-green-100 text-green-600'
                            : 'bg-amber-100 text-amber-600'
                          }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <div className="p-3 bg-gray-50 rounded-lg mr-4">
                            {project.icon}
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Rating */}
                      <div className="flex items-center mb-4">
                        <FaStar className="text-yellow-400 mr-1" />
                        <span className="text-gray-700 font-medium">{project.rating}</span>
                      </div>

                      {/* Actions */}
                      <div className="flex justify-between items-center">
                        <button
                          onClick={() => {
                            setSelectedProject(project);
                            setShowModal(true);
                          }}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                        >
                          View Details
                        </button>
                        <div className="flex gap-3">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                          >
                            <FaGithub size={20} />
                          </a>
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                          >
                            <FaExternalLinkAlt size={20} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {showModal && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-4xl w-full p-8 max-h-[90vh] overflow-y-auto relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <FaTimes size={24} />
              </button>

              {/* Project Details */}
              <div className="space-y-6">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-xl"
                />

                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold text-gray-900">{selectedProject.title}</h2>
                  <span className={`px-4 py-1 rounded-full text-sm font-medium ${selectedProject.status === 'Completed'
                      ? 'bg-green-100 text-green-600'
                      : 'bg-amber-100 text-amber-600'
                    }`}>
                    {selectedProject.status}
                  </span>
                </div>

                <p className="text-gray-600 text-lg">{selectedProject.longDescription}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Technologies */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Team */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Team Members</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.team.map((member, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full"
                        >
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <FaRocket className="text-blue-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex gap-4 pt-6">
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    View Demo
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-gray-300 text-gray-700 text-center py-3 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;