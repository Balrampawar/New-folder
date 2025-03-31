import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import "../css/dashboard.css";
import { CiEdit } from "react-icons/ci";
import { MdContentCopy } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editEvent, setEditEvent] = useState({});

  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem("eventDetails"));
    if (Array.isArray(savedEvents)) {
      setEvents(savedEvents);
    } else {
      setEvents([]);
    }
  }, []);

  // Save events to localStorage
  const updateLocalStorage = (updatedEvents) => {
    setEvents(updatedEvents);
    localStorage.setItem("eventDetails", JSON.stringify(updatedEvents));
  };

  // Enable edit mode
  const handleEdit = (index) => {
    setEditIndex(index);
    setEditEvent(events[index]);
  };

  // Handle input changes
  const handleChange = (e) => {
    setEditEvent({ ...editEvent, [e.target.name]: e.target.value });
  };

  // Save the edited event
  const handleSave = (index) => {
    const updatedEvents = [...events];
    updatedEvents[index] = editEvent;
    updateLocalStorage(updatedEvents);
    setEditIndex(null);
  };

  // Duplicate an event
  const handleDuplicate = (index) => {
    const newEvents = [...events, { ...events[index] }];
    updateLocalStorage(newEvents);
  };

  // Delete an event
  const handleDelete = (index) => {
    const newEvents = events.filter((_, i) => i !== index);
    updateLocalStorage(newEvents);
  };

  if (events.length === 0) {
    return (
      <div>
        <Sidebar />
        <p>No events available.</p>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-left">
        <Sidebar />
      </div>
      <div className="dashboard-right">
        <h2>Event Dashboard</h2>
        <div className="event-card">
          {events.map((event, index) => {
            const eventDate = new Date(event.date);
            const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const eventDay = daysOfWeek[eventDate.getDay()];

            return (
              <div key={index} className="event-details">
                {editIndex === index ? (
                  <>
                    <input type="text" name="topic" value={editEvent.topic} onChange={handleChange} className="edit-input" />
                    <input type="date" name="date" value={editEvent.date} onChange={handleChange} className="edit-input" />
                    <input type="time" name="time" value={editEvent.time} onChange={handleChange} className="edit-input" />
                    <div className="event-actions">
                      <button className="save-btn" onClick={() => handleSave(index)}>Save</button>
                      <button className="cancel-btn" onClick={() => setEditIndex(null)}>Cancel</button>
                    </div>
                  </>
                ) : (
                  <div className="card">
                  <div className="g1">
                  <h3>{event.topic}</h3>
                  <button className="edit-btn" onClick={() => handleEdit(index)}><CiEdit/></button>
                  </div>
                   

                    <p>{eventDay} {event.date}</p>
                    <p>{event.time} {event.ampm}</p>


                    <div className="event-actions">
                      <button className="duplicate-btn" onClick={() => handleDuplicate(index)}><MdContentCopy /></button>
                      <button className="delete-btn" onClick={() => handleDelete(index)}><RiDeleteBin6Line /></button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
