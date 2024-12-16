import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import CardLists from "./CardLists";

export default function WhatsNew() {
  const [error, setError] = useState(null);
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);  // Separate filtered games state
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [isMobile, setIsMobile] = useState(false);
  const [imageLoaded, setImageLoaded] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  // Fetch games from API
  const fetchGames = () => {
    fetch(`${process.env.REACT_APP_API_URL}/api/get-games`)
      .then(response => response.json())
      .then(data => {
        setGames(data.games);
        setFilteredGames(data.games); // Initialize filteredGames with all games
      })
      .catch(error => {
        console.error('Error fetching games:', error);
        setError('Failed to fetch games');
      });
  };

  useEffect(() => {
    fetchGames();

    // Mobile detection
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust based on your mobile breakpoint
    };

    window.addEventListener('resize', checkIfMobile);
    checkIfMobile(); // Check on initial render

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
  
    // Filter games only if the name exists and is a string
    const filtered = games.filter(game => game.platform && game.platform.toLowerCase().includes(query));
    setGames(filtered);
  };
  

  const handleGameClick = async (gameCode, gamePlatform, gameType) => {
    if (!isLoggedIn) {
      navigate('/login');
    }
    setIsLoading(true);

    try {
      const token = localStorage.getItem('token');
      const remote_id = localStorage.getItem('remote_id');
      if (!token) {
        setError('User not logged in');
        return;
      }

      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/game-run`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          userId: remote_id,
          externalURL: 'https://six6.online',
          isMobileLogin: isMobile,
          gameCode,
          gameType,
          platform: gamePlatform,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        navigate('/gamerun', { state: { iframeUrl: data.url } });
        console.log(data)
      } else {
        setError(data.message || 'An unexpected error occurred');
      }
    } catch (error) {
      setError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageError = (gameCode) => {
    setImageLoaded((prev) => ({
      ...prev,
      [gameCode]: false,
    }));
  };

  const handleImageLoad = (gameCode) => {
    setImageLoaded((prev) => ({
      ...prev,
      [gameCode]: true,
    }));
  };

  return (
    <>
      <section className="search">
        <input
          type="search"
          id="search-input"
          className="search-box"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search For Game or by Provider"
        />
        <label htmlFor="search-input">
          <svg
            width={800}
            height={800}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12m-8 6a8 8 0 1 1 14.32 4.906l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.387-5.387A8 8 0 0 1 2 10"
              fill="#ffffff"
            />
          </svg>
        </label>
      </section>

      <div className="whatsnew">
        <CardLists
          cardTitle="Our Games"
          dataList={filteredGames}  // Use filtered games for displaying
          onGameClick={handleGameClick}
          handleImageErrors={handleImageError}
          handleImageLoads={handleImageLoad}
          imageLoaded={imageLoaded}
        />
      </div>
    </>
  );
}
