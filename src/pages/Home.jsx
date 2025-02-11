const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Tech Innovators Club
          </h1>
          <p className="text-lg mb-6">
            {/* TODO: Replace with an inspiring club tagline or mission statement */}
            [Club tagline or mission statement goes here...]
          </p>
          <button
            // TODO: Add functionality (e.g., linking to a registration page or modal)
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Join Us
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="feature-card p-4 border rounded shadow-sm">
            <h2 className="font-semibold text-xl mb-2">Workshops</h2>
            <p>
              {/* TODO: Add a short description about the club's workshops */}
              [Workshop details...]
            </p>
          </div>
          <div className="feature-card p-4 border rounded shadow-sm">
            <h2 className="font-semibold text-xl mb-2">Networking</h2>
            <p>
              {/* TODO: Add details about networking opportunities */}
              [Networking details...]
            </p>
          </div>
          <div className="feature-card p-4 border rounded shadow-sm">
            <h2 className="font-semibold text-xl mb-2">
              Innovation Challenges
            </h2>
            <p>
              {/* TODO: Add a description of innovation challenges */}
              [Innovation challenges details...]
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta py-10 bg-gray-100 text-center">
        <div className="container mx-auto">
          <p className="mb-4 text-lg">
            {/* TODO: Replace with a strong call-to-action message */}
            Ready to shape the future? Get involved today!
          </p>
          <button
            // TODO: Implement additional action or routing as needed
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition duration-300"
          >
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
