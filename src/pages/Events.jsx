import { useState } from "react";

// Sample events data (this can later be replaced or fetched from an API)
const sampleEvents = [
  {
    id: 1,
    title: "Tech Workshop",
    date: "2025-03-15",
    time: "10:00 AM",
    description: "A hands-on workshop on the latest tech trends and tools.",
    // TODO: Add additional properties (e.g., event type) for filtering if needed
  },
  {
    id: 2,
    title: "Innovation Seminar",
    date: "2025-03-20",
    time: "2:00 PM",
    description: "A seminar discussing innovative ideas and future technology.",
  },
  {
    id: 3,
    title: "Networking Meetup",
    date: "2025-03-25",
    time: "6:00 PM",
    description:
      "An informal meetup for tech enthusiasts to network and share ideas.",
  },
];

const Events = () => {
  const [events, setEvents] = useState(sampleEvents);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [activeEvent, setActiveEvent] = useState(null);

  // TODO: Implement real filtering based on event type or other criteria
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    // Placeholder filtering logic: Currently just resets to sampleEvents
    // In a real implementation, update "events" based on the filter criteria.
    setEvents(sampleEvents);
  };

  const handleEventClick = (event) => {
    setActiveEvent(event);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setActiveEvent(null);
  };

  return (
    <div className="events-page">
      {/* Header & Filter Controls */}
      <section className="events-header py-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-4">Upcoming Events</h1>
          <div className="filters mb-4">
            <button
              onClick={() => handleFilterChange("All")}
              className="px-4 py-2 border rounded mr-2 hover:bg-gray-200 transition"
            >
              All
            </button>
            <button
              onClick={() => handleFilterChange("Workshop")}
              className="px-4 py-2 border rounded mr-2 hover:bg-gray-200 transition"
            >
              Workshop
            </button>
            <button
              onClick={() => handleFilterChange("Seminar")}
              className="px-4 py-2 border rounded mr-2 hover:bg-gray-200 transition"
            >
              Seminar
            </button>
            {/* TODO: Add additional filter buttons if needed */}
          </div>
        </div>
      </section>

      {/* Event Cards List */}
      <section className="events-list py-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="event-card border p-4 rounded shadow hover:shadow-lg transition cursor-pointer"
              onClick={() => handleEventClick(event)}
            >
              <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
              <p className="text-gray-600 mb-1">
                {event.date} at {event.time}
              </p>
              <p className="text-gray-700">
                {/* TODO: Optionally limit description length */}
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Event Details Modal */}
      {showModal && activeEvent && (
        <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="modal-content bg-white p-6 rounded shadow-lg relative max-w-md w-full">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              X
            </button>
            <h2 className="text-2xl font-bold mb-4">{activeEvent.title}</h2>
            <p className="text-gray-600 mb-2">
              {activeEvent.date} at {activeEvent.time}
            </p>
            <p className="mb-4">{activeEvent.description}</p>
            {/* TODO: Add any additional event details or actions */}
            <button
              onClick={closeModal}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
