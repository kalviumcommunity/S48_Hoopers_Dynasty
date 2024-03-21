import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./homePage.css";


const HomePage = () => {
  const [showPlayerDetails, setShowPlayerDetails] = useState(false);
  const navigate = useNavigate()
  // Player data
  const player = {
    fullName: "LeBron James",
    imageUrl: "https://imgs.search.brave.com/EOBIyErqvxvWgLZsFXpINJ104z8sE6081TWE3UwhkV0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi83LzdhL0xl/QnJvbl9KYW1lc18l/Mjg1MTk1OTk3NzE0/NCUyOV8lMjhjcm9w/cGVkMiUyOS5qcGcv/NTEycHgtTGVCcm9u/X0phbWVzXyUyODUx/OTU5OTc3MTQ0JTI5/XyUyOGNyb3BwZWQy/JTI5LmpwZw",
    team: "Los Angeles Lakers",
    statistics: {
      PPG: 25.4,
      RPG: 7.9,
      APG: 7.8
    },
    achievements: ["4x NBA Champion", "4x NBA MVP"]
  };

  const toggleDetails = () => {
    setShowPlayerDetails(!showPlayerDetails);
  };

  const handleLogout = () => {
    navigate("/")
    console.log("Logged out");
  };

  return (
    <div>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
      <div className="home-page">
        <h1 className="home-page-title">Home Page</h1>
        <div className="player-image" onClick={toggleDetails}>
          <img src={player.imageUrl} alt={player.fullName} className="player-image" />
        </div>
        {showPlayerDetails && (
          <div className="player-details">
            <h2 className="player-details-name">{player.fullName}</h2>
            <p className="player-details-team">Team: {player.team}</p>
            <p className="player-details-statistics">Statistics:</p>
            <ul className="player-details-statistics-list">
              <li>PPG: {player.statistics.PPG}</li>
              <li>RPG: {player.statistics.RPG}</li>
              <li>APG: {player.statistics.APG}</li>
            </ul>
            <p className="achievements-title">Achievements:</p>
            <ul className="achievements-list">
              {player.achievements.map((achievement, index) => (
                <li key={index} className="player-details-achievement">{achievement}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default HomePage;
