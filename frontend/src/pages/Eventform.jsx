import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/Eventform.css"
import Sidebar from '../components/Sidebar';

const EventForm = () => {
  const [event, setEvent] = useState({
    topic: "",
    password: "",
    host: "",
    description: "",
    date: "",
    time: "",
    ampm: "AM",
    duration: "",
    URL: "",
    Email: "",
    timezone: "UTC (UTC+0:00)",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve existing events from localStorage or initialize an empty array if none exist
    var existingEvents = JSON.parse(localStorage.getItem('eventDetails')) || [];

    // Ensure existingEvents is an array before pushing the new event
    if (Array.isArray(existingEvents)) {
      existingEvents.push(event);
    } else {
      // If for some reason it's not an array, reset to an empty array and then push
      existingEvents = [];
      existingEvents.push(event);
    }

    // Save the updated events array back to localStorage
    localStorage.setItem('eventDetails', JSON.stringify(existingEvents));

    // Redirect to the dashboard after saving the event
    navigate('/dashboard');
  };

  return (
    <div className="event-body">
        <div className="event-left">
            <Sidebar/>
        </div>
        <div className="event-right">
        <h2>Create an Event</h2>
        <div className="event-form-container">
      
      <form onSubmit={handleSubmit} className='eventform'>
        <input
          type="text"
          name="topic"
          placeholder="Topic"
          value={event.topic}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={event.password}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="host"
          placeholder="Host"
          value={event.host}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={event.description}
          onChange={handleChange}
          required
        ></textarea>
        <div className="g22">
        <input
          type="date"
          name="date"
          value={event.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          value={event.time}
          onChange={handleChange}
          required
        />
        <select name="ampm" value={event.ampm} onChange={handleChange}>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
        <select name="timezone" value={event.duration} onChange={handleChange} placeholder="Duration"> 

          <option value="UTC (UTC+0:00)">30  min</option>
          <option value="1">1</option>
          <option value="2">2</option>
          {/* Add other timezones as needed */}
        </select>

        <select name="timezone" value={event.timezone} onChange={handleChange}>
          <option value="UTC (UTC+0:00)">UTC (UTC+0:00)</option>
          <option value="UTC+1">UTC+1</option>
          <option value="UTC+2">UTC+2</option>
          {/* Add other timezones as needed */}
        </select>
        </div>
        <button type="submit">Create Event</button>
      </form>
    </div>
        </div>
    </div>
  
  );
};

export default EventForm;
