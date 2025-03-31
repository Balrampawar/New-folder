import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../css/Preferences.css"; // Import CSS for styling
import Hpage from "../components/Hpage";

const financeFields = [
  { id: 1, name: "Sales", emoji: "🏢" },
  { id: 2, name: "Education", emoji: "📚" },
  { id: 3, name: "Finance", emoji: "💸" },
  { id: 4, name: "Government & Politics", emoji: "⚖️" },
  { id: 5, name: "Consulting", emoji: "💼" },
  { id: 6, name: "Recruiting", emoji: "📄" },
  { id: 7, name: "Tech", emoji: "💻" },
  { id: 8, name: "Marketing", emoji: "🚀" },
];

const Preferences = () => {
  const { user, login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [selectedField, setSelectedField] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedField) return alert("Please select a preference.");

    const updatedUser = { ...user, username, preference: selectedField };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    login(updatedUser);
    navigate("/dashboard");
  };

  return (

    <div className="preference-container">
      <Hpage/>
      <div className="preference-left">
        <div className="preference-form">
          <h1>Your Preferences</h1>

          <input
            type="text"
            placeholder="Tell us your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="username-input"
          />

          <p>Select one category that best describes your interest:</p>

          <div className="categories">
            {financeFields.map((field) => (
              <button
                key={field.id}
                className={`category-btn ${selectedField === field.name ? "active" : ""}`}
                onClick={() => setSelectedField(field.name)}
              >
                {field.emoji} {field.name}
              </button>
            ))}
          </div>

          <button type="submit" className="continue-btn" onClick={handleSubmit} disabled={!username || !selectedField}>
            Continue
          </button>
        </div>

      </div>
      <div className="preference-right">
        <img src="/images/login.png" alt="" />
      </div>
    </div>

  );
};

export default Preferences;
