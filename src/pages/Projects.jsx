import { useState } from "react";

// Sample project data; this can be replaced or extended as needed.
const sampleProjects = [
  {
    id: 1,
    title: "AI Chatbot",
    description:
      "An AI-driven chatbot designed to assist users with common queries.",
    imageUrl: "https://via.placeholder.com/300", // Placeholder image
    // TODO: Add additional details (e.g., project technology, live demo link)
  },
  {
    id: 2,
    title: "Smart Campus App",
    description:
      "A mobile app to streamline campus services and enhance connectivity.",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    title: "Virtual Reality Lab",
    description:
      "A project exploring virtual reality applications in education and research.",
    imageUrl: "https://via.placeholder.com/300",
  },
];

const Projects = () => {
  const [projects, setProjects] = useState(sampleProjects);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  // TODO: Implement "Load More" functionality to fetch or display additional projects.
  const handleLoadMore = () => {
    // Placeholder: This could fetch more projects or simply append dummy data.
    console.log("Load more projects...");
  };

  return (
    <div className="projects-page">
      {/* Page Header */}
      <section className="projects-header py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Our Projects</h1>
          <p className="text-gray-700">
            {/* TODO: Add an introductory text about the projects or the club's initiatives */}
            Discover our innovative projects that showcase the future of
            technology.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid py-6">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card border rounded overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600">
                  {/* TODO: Optionally limit or truncate description length */}
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Load More Button */}
      <section className="load-more py-6 text-center">
        <button
          onClick={handleLoadMore}
          className="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600 transition"
        >
          Load More
        </button>
      </section>

      {/* Project Detail Modal */}
      {showModal && selectedProject && (
        <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="modal-content bg-white p-6 rounded shadow-lg relative max-w-md w-full">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              X
            </button>
            <img
              src={selectedProject.imageUrl}
              alt={selectedProject.title}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
            <p className="text-gray-700 mb-4">{selectedProject.description}</p>
            {/* TODO: Add any additional project details, links, or actions */}
            <button
              onClick={closeModal}
              className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
