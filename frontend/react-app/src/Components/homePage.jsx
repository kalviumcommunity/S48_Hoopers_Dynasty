import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./homePage.css";
import axios from 'axios';

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const players = [
    {
      fullName: "Stephen Curry",
      imageUrl: "https://pbs.twimg.com/media/DS5MqPwV4AAKyxS.jpg",
      team: "Golden State Warriors",
      statistics: {
        PPG: 30.1,
        RPG: 5.5,
        APG: 6.2
      },
      achievements: [
      "4x NBA Champion",
      "3x NBA MVP",
      "8x NBA All-Star",
     ]
    },

    {
      fullName: "Kobe Bryant",
      imageUrl: "https://eskipaper.com/images/kobe-bryant-photos-1.jpg",
      team: "Los Angeles Lakers",
      statistics: {
        "PPG": "25.0",
        "RPG": "5.2",
        "APG": "4.7"
      },
      achievements: [
        "5x NBA Champion",
        "2x NBA Finals MVP",
        "1x NBA Most Valuable Player (MVP)",
        "18x NBA All-Star",
        "4x NBA All-Star Game MVP",
      ]
    },
    
    {
      fullName: "Michael Jordan",
      imageUrl: "https://www.enwallpaper.com/wp-content/uploads/acce4814f016e6fb8f1b9da9d456c91b.jpg",
      team: "Chicago Bulls",
      statistics: {
        "PPG": "30.1",
        "RPG": "6.2",
        "APG": "5.3"
      },
      achievements: [
        "6x NBA Champion",
        "6x NBA Finals MVP",
        "14x NBA All-Star",
      ]
    },

    {
      fullName: "LeBron James",
      imageUrl: "https://imgs.search.brave.com/EOBIyErqvxvWgLZsFXpINJ104z8sE6081TWE3UwhkV0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi83LzdhL0xl/QnJvbl9KYW1lc18l/Mjg1MTk1OTk3NzE0/NCUyOV8lMjhjcm9w/cGVkMiUyOS5qcGcv/NTEycHgtTGVCcm9u/X0phbWVzXyUyODUx/OTU5OTc3MTQ0JTI5/XyUyOGNyb3BwZWQy/JTI5LmpwZw",
      team: "Los Angeles Lakers",
      statistics: {
        PPG: 25.4,
        RPG: 7.9,
        APG: 7.8
      },
      achievements: ["4x NBA Champion", "4x NBA MVP"]
    },

    {
      fullName: "Shaquille O'Neal",
      imageUrl: "https://s.hdnux.com/photos/01/42/43/403711/3/1200x0.jpg",
      team: "Los Angeles Lakers",
      statistics: {
        "PPG": "23.7",
        "RPG": "10.9",
        "APG": "2.5"
      },
      achievements: [
        "4x NBA Champion",
        "3x NBA Finals MVP",
        "1x NBA MVP",
        "15x NBA All-Star",
        "3x NBA All-Star Game MVP"
      ]
    },

   {
      fullName: "Kevin Durant",
      imageUrl: "https://wallpapercave.com/wp/wp4428067.jpg",
      team: "Brooklyn Nets",
      statistics: {
        PPG: 27.1,
        RPG: 7.1,
        APG: 6.0
      },
      achievements: ["2x NBA Champion", "2x NBA Finals MVP"]
    },
  
    {
      fullName: "Klay Thompson",
      imageUrl: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/08/12/16602595645506.jpg",
      team: "Golden State Warriors",
      statistics: {
        "PPG": "19.5",
        "RPG": "3.5",
        "APG": "2.3"
      },
      achievements: [
        "3x NBA Champion",
        "5x NBA All-Star",
        "NBA Three-Point Contest Champion (2016)"
      ]
    },

    {
      fullName: "Kawhi Leonard",
      imageUrl: "https://wallpapers.com/images/hd/smiling-cute-kawhi-leonard-m8cezff3nmaoo9db.jpg",
      team: "Los Angeles Clippers",
      statistics: {
        PPG: 26.9,
        RPG: 7.3,
        APG: 4.9
      },
      achievements: ["2x NBA Champion", "2x NBA Finals MVP"]
    },

    {
      fullName: "Kareem Abdul-Jabbar",
      imageUrl: "https://celticswire.usatoday.com/wp-content/uploads/sites/39/2021/04/Kareem-Abdul-Jabbar-Lakers-1981.jpg?w=1200",
      team: "Los Angeles Lakers",
      statistics: {
        "PPG": "24.6",
        "RPG": "11.2",
        "APG": "3.6"
      },
      achievements: [
        "6x NBA Champion",
        "2x NBA Finals MVP",
        "6x NBA MVP",
        "19x NBA All-Star",
      ]
    },

    {
      fullName: "Giannis Antetokounmpo",
      imageUrl: "https://i.pinimg.com/originals/1e/1f/dd/1e1fdd2989ab53c43a453bd57b1fbbe3.jpg",
      team: "Milwaukee Bucks",
      statistics: {
        PPG: 28.1,
        RPG: 11.0,
        APG: 5.9
      },
      achievements: ["1x NBA Champion", "2x NBA MVP"]
    },

    {
      fullName: "James Harden",
      imageUrl: "https://getwallpapers.com/wallpaper/full/b/2/e/189358.jpg",
      team: "Brooklyn Nets",
      statistics: {
        PPG: 25.2,
        RPG: 5.3,
        APG: 11.4
      },
      achievements: ["1x NBA MVP"]
    },

    {
      fullName: "Anthony Davis",
      imageUrl: "https://wallpapercave.com/wp/wp4391533.jpg",
      team: "Los Angeles Lakers",
      statistics: {
        PPG: 23.0,
        RPG: 9.0,
        APG: 3.3
      },
      achievements: ["1x NBA Champion"]
    },
    
    {
      fullName: "Luka Dončić",
      imageUrl: "https://wallpapercave.com/wp/wp5276125.jpg",
      team:"Dallas Mavericks",
      statistics: {
        PPG: 28.8,
        RPG: 8.6,
        APG: 9.4
      },
      achievements: []
    },

    {
      fullName: "Damian Lillard",
      imageUrl: "https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.oregonlive.com/home/olive-media/width2048/img/blazers_impact/photo/damian-lillard-7ef5b1d676ebc311.jpg",
      team: "Portland Trail Blazers",
      statistics: {
        PPG: 28.9,
        RPG: 4.3,
        APG: 7.7
      },
      achievements: []
    },

    {
      fullName: "Joel Embiid",
      imageUrl: "https://whyy.org/wp-content/uploads/2022/09/joel-embiid-ap-2022-09-29.jpg",
      team: "Philadelphia 76ers",
      statistics: {
        PPG: 30.0,
        RPG: 11.1,
        APG: 3.3
      },
      achievements: []
    },
  ];




  const [selectedPlayer,setSelectedPlayer]=useState(null)
  


  const togglePopup = (player) => {
    setSelectedPlayer(player);
    setShowPopup(!showPopup);
  };

  const handleLogout = () => {
    navigate("/");
    document.cookie = 'username=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/';
    document.cookie = 'accesstoken=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/';
    
    console.log("Logged out");
  };

  return (
    <div className="home-page-container">

      <button className="logout-button" onClick={handleLogout}>Logout</button>
      <div className="home-page">
        <h1 className="home-page-title">Home Page</h1>
        <div className="player-images-container">
          {players.map((player, index) => (
            <div key={index} className="player-image" onClick={() => togglePopup(player)}>
              <img src={player.imageUrl} alt={player.fullName} className="player-image" />
            </div>
          ))}
        </div>
        {showPopup && selectedPlayer && (
          <div className="popup-container">
            <div className="popup-content">
              <span className="close-button" onClick={() => setShowPopup(false)}>Close</span>
              <h2>{selectedPlayer.fullName}</h2>
              <h3>Team: {selectedPlayer.team}</h3>
              <h3>Statistics:</h3>
              <p>PPG: {selectedPlayer.statistics.PPG}</p>
              <p>APG: {selectedPlayer.statistics.APG}</p>
              <p>RPG: {selectedPlayer.statistics.RPG}</p>
              <h3>Achivements:</h3>
              <p>{selectedPlayer.achievements.map((achievement, index) => (
                <li key={index} className="player-details-achievement">
                  {achievement}
                </li>
              ))}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
