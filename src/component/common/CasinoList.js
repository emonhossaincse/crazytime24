function CasinoList() {

  const cardData = [
    {
      id: 1,
      icon: (
        <svg
          className="info"
          xmlns="http://www.w3.org/2000/svg"
          width={800}
          height={800}
          viewBox="0 0 24 24"
          xmlSpace="preserve"
        >
          <path
            fill="none"
            d="M12 24C5.4 24 0 18.6 0 12S5.4 0 12 0s12 5.4 12 12-5.4 12-12 12m0-22C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2"
          />
          <path d="M11 18c-.4 0-.7-.2-1-.5-.5-.7-.1-1.7 1-4.4.2-.4.4-.9.6-1.3-.4.3-1 .3-1.4-.1s-.4-1 0-1.4c.2-.1 1.4-1.3 2.8-1.3.4 0 .7.2 1 .5.5.7.1 1.7-1 4.4-.2.4-.4.9-.6 1.3.4-.3 1-.3 1.4.1s.4 1 0 1.4c-.2.1-1.4 1.3-2.8 1.3" />
          <circle cx="13.5" cy="6.5" r="1.5" />
          <path d="M13.5 8.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m0-3c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1" />
        </svg>
      ),
      header: "header 1",
      subtitle: "Subtitle 1",
      playersName: "Player 1",
      playersCount: 79,
      stake: "$0.00",
      country: "USA"
    },
    {
      id: 2,
      icon: (
        <svg
          className="info"
          xmlns="http://www.w3.org/2000/svg"
          width={800}
          height={800}
          viewBox="0 0 24 24"
          xmlSpace="preserve"
        >
          <path
            fill="none"
            d="M12 24C5.4 24 0 18.6 0 12S5.4 0 12 0s12 5.4 12 12-5.4 12-12 12m0-22C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2"
          />
          <path d="M11 18c-.4 0-.7-.2-1-.5-.5-.7-.1-1.7 1-4.4.2-.4.4-.9.6-1.3-.4.3-1 .3-1.4-.1s-.4-1 0-1.4c.2-.1 1.4-1.3 2.8-1.3.4 0 .7.2 1 .5.5.7.1 1.7-1 4.4-.2.4-.4.9-.6 1.3.4-.3 1-.3 1.4.1s.4 1 0 1.4c-.2.1-1.4 1.3-2.8 1.3" />
          <circle cx="13.5" cy="6.5" r="1.5" />
          <path d="M13.5 8.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m0-3c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1" />
        </svg>
      ),
      header: "header 1",
      subtitle: "Subtitle 1",
      playersName: "Player 1",
      playersCount: 79,
      stake: "$0.00",
      country: "USA"
    },
    {
      id: 3,
      icon: (
        <svg
          className="info"
          xmlns="http://www.w3.org/2000/svg"
          width={800}
          height={800}
          viewBox="0 0 24 24"
          xmlSpace="preserve"
        >
          <path
            fill="none"
            d="M12 24C5.4 24 0 18.6 0 12S5.4 0 12 0s12 5.4 12 12-5.4 12-12 12m0-22C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2"
          />
          <path d="M11 18c-.4 0-.7-.2-1-.5-.5-.7-.1-1.7 1-4.4.2-.4.4-.9.6-1.3-.4.3-1 .3-1.4-.1s-.4-1 0-1.4c.2-.1 1.4-1.3 2.8-1.3.4 0 .7.2 1 .5.5.7.1 1.7-1 4.4-.2.4-.4.9-.6 1.3.4-.3 1-.3 1.4.1s.4 1 0 1.4c-.2.1-1.4 1.3-2.8 1.3" />
          <circle cx="13.5" cy="6.5" r="1.5" />
          <path d="M13.5 8.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m0-3c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1" />
        </svg>
      ),
      header: "header 1",
      subtitle: "Subtitle 1",
      playersName: "Player 1",
      playersCount: 79,
      stake: "$0.00",
      country: "USA"
    },
    {
      id: 4,
      icon: (
        <svg
          className="info"
          xmlns="http://www.w3.org/2000/svg"
          width={800}
          height={800}
          viewBox="0 0 24 24"
          xmlSpace="preserve"
        >
          <path
            fill="none"
            d="M12 24C5.4 24 0 18.6 0 12S5.4 0 12 0s12 5.4 12 12-5.4 12-12 12m0-22C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2"
          />
          <path d="M11 18c-.4 0-.7-.2-1-.5-.5-.7-.1-1.7 1-4.4.2-.4.4-.9.6-1.3-.4.3-1 .3-1.4-.1s-.4-1 0-1.4c.2-.1 1.4-1.3 2.8-1.3.4 0 .7.2 1 .5.5.7.1 1.7-1 4.4-.2.4-.4.9-.6 1.3.4-.3 1-.3 1.4.1s.4 1 0 1.4c-.2.1-1.4 1.3-2.8 1.3" />
          <circle cx="13.5" cy="6.5" r="1.5" />
          <path d="M13.5 8.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m0-3c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1" />
        </svg>
      ),
      header: "header 1",
      subtitle: "Subtitle 1",
      playersName: "Player 1",
      playersCount: 79,
      stake: "$0.00",
      country: "USA"
    },
    {
      id: 5,
      icon: (
        <svg
          className="info"
          xmlns="http://www.w3.org/2000/svg"
          width={800}
          height={800}
          viewBox="0 0 24 24"
          xmlSpace="preserve"
        >
          <path
            fill="none"
            d="M12 24C5.4 24 0 18.6 0 12S5.4 0 12 0s12 5.4 12 12-5.4 12-12 12m0-22C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2"
          />
          <path d="M11 18c-.4 0-.7-.2-1-.5-.5-.7-.1-1.7 1-4.4.2-.4.4-.9.6-1.3-.4.3-1 .3-1.4-.1s-.4-1 0-1.4c.2-.1 1.4-1.3 2.8-1.3.4 0 .7.2 1 .5.5.7.1 1.7-1 4.4-.2.4-.4.9-.6 1.3.4-.3 1-.3 1.4.1s.4 1 0 1.4c-.2.1-1.4 1.3-2.8 1.3" />
          <circle cx="13.5" cy="6.5" r="1.5" />
          <path d="M13.5 8.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m0-3c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1" />
        </svg>
      ),
      header: "header 1",
      subtitle: "Subtitle 1",
      playersName: "Player 1",
      playersCount: 79,
      stake: "$0.00",
      country: "USA"
    },
    {
      id: 6,
      icon: (
        <svg
          className="info"
          xmlns="http://www.w3.org/2000/svg"
          width={800}
          height={800}
          viewBox="0 0 24 24"
          xmlSpace="preserve"
        >
          <path
            fill="none"
            d="M12 24C5.4 24 0 18.6 0 12S5.4 0 12 0s12 5.4 12 12-5.4 12-12 12m0-22C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2"
          />
          <path d="M11 18c-.4 0-.7-.2-1-.5-.5-.7-.1-1.7 1-4.4.2-.4.4-.9.6-1.3-.4.3-1 .3-1.4-.1s-.4-1 0-1.4c.2-.1 1.4-1.3 2.8-1.3.4 0 .7.2 1 .5.5.7.1 1.7-1 4.4-.2.4-.4.9-.6 1.3.4-.3 1-.3 1.4.1s.4 1 0 1.4c-.2.1-1.4 1.3-2.8 1.3" />
          <circle cx="13.5" cy="6.5" r="1.5" />
          <path d="M13.5 8.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m0-3c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1" />
        </svg>
      ),
      header: "header 1",
      subtitle: "Subtitle 1",
      players: 79,
      stake: "$0.00",
      country: "USA"
    },
    {
      id: 7,
      icon: (
        <svg
          className="info"
          xmlns="http://www.w3.org/2000/svg"
          width={800}
          height={800}
          viewBox="0 0 24 24"
          xmlSpace="preserve"
        >
          <path
            fill="none"
            d="M12 24C5.4 24 0 18.6 0 12S5.4 0 12 0s12 5.4 12 12-5.4 12-12 12m0-22C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2"
          />
          <path d="M11 18c-.4 0-.7-.2-1-.5-.5-.7-.1-1.7 1-4.4.2-.4.4-.9.6-1.3-.4.3-1 .3-1.4-.1s-.4-1 0-1.4c.2-.1 1.4-1.3 2.8-1.3.4 0 .7.2 1 .5.5.7.1 1.7-1 4.4-.2.4-.4.9-.6 1.3.4-.3 1-.3 1.4.1s.4 1 0 1.4c-.2.1-1.4 1.3-2.8 1.3" />
          <circle cx="13.5" cy="6.5" r="1.5" />
          <path d="M13.5 8.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m0-3c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1" />
        </svg>
      ),
      header: "header 1",
      subtitle: "Subtitle 1",
      playersName: "Player 1",
      playersCount: 79,
      stake: "$0.00",
      country: "USA"
    },
    {
      id: 8,
      icon: (
        <svg
          className="info"
          xmlns="http://www.w3.org/2000/svg"
          width={800}
          height={800}
          viewBox="0 0 24 24"
          xmlSpace="preserve"
        >
          <path
            fill="none"
            d="M12 24C5.4 24 0 18.6 0 12S5.4 0 12 0s12 5.4 12 12-5.4 12-12 12m0-22C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2"
          />
          <path d="M11 18c-.4 0-.7-.2-1-.5-.5-.7-.1-1.7 1-4.4.2-.4.4-.9.6-1.3-.4.3-1 .3-1.4-.1s-.4-1 0-1.4c.2-.1 1.4-1.3 2.8-1.3.4 0 .7.2 1 .5.5.7.1 1.7-1 4.4-.2.4-.4.9-.6 1.3.4-.3 1-.3 1.4.1s.4 1 0 1.4c-.2.1-1.4 1.3-2.8 1.3" />
          <circle cx="13.5" cy="6.5" r="1.5" />
          <path d="M13.5 8.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m0-3c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1" />
        </svg>
      ),
      header: "header 1",
      subtitle: "Subtitle 1",
      playersName: "Player 1",
      playersCount: 79,
      stake: "0.00",
      country: "USA"
    }
  ];
 
  return (
    <div className="casino-cards" >
      <div className="prev">
        <svg
          width="800"
          height="800"
          viewBox="0 0 48 48"
          version="1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffffbb"
            d="m30.9 43 3.1-3.1L18.1 24 34 8.1 30.9 5 12 24z"
          />
        </svg>
      </div>
      <div className="next" >
        <svg
          width="800"
          height="800"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          transform="scale(-1 1)"
        >
          <path
            fill="#ffffffbb"
            d="m30.9 43 3.1-3.1L18.1 24 34 8.1 30.9 5 12 24z"
          />
        </svg>
      </div>

      {cardData.map((data) => ( 
        <div key={data.id} className="card">
          {data.icon}
        <h2>{data.header} </h2>
        <p>{data.subtitle} </p>
        <div className="footer">
          <div>
            <p>{data.playersName} </p>
            <h3>{data.playersCount} </h3>
          </div>
          <div>
            <p>Min Stakes </p>
            <h3>${data.stake} </h3>
          </div>
          <div>
            <img src="#" alt="flq" />
            <p>{data.country} </p>
          </div>
        </div>
      </div>
       ))}
    </div>
  );
}
export default CasinoList;
