import Home from "./pages/Home";
import Events from "./pages/Events";
import Projects from "./pages/Projects";
import { BrowserRouter, Link, Route, Routes } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <div className="App flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <header className="bg-gray-800 text-white p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <div className="logo text-xl font-bold">
              {/* Club Logo / Title */}
              Tech Innovators Club
            </div>
            <ul className="flex space-x-4">
              <li>
                <Link
                  to="/"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main className="container mx-auto flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} CSI MIT-WPU. All rights reserved.
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
