import React from "react";

export default function CardLists({
  cardTitle,
  dataList,
  onGameClick,
  handleImageErrors,
  handleImageLoads,
  imageLoaded
}) {
  return (
    <section className="card-lists">
      <div className="card-lists-header">
        <h1>{cardTitle}</h1>
        <button>See All</button>
      </div>
      <div className="card-lists-cards">
        <div className="card-lists-card">
          {dataList.length === 0 ? (
            <p>No games available</p>
          ) : (
            dataList.map((data) => {
              // Skip rendering if image is not loaded
              if (imageLoaded[data.code] === false) return null;

              return (
                <div
                  key={data.id}
                  className="card-list-card"
                  onClick={() => onGameClick(data.code, data.platform, data.type)}
                >
                  <img
                    src={`./poster/${data.code}.png`}
                    alt={data.name}
                    loading="lazy"
                    onLoad={() => handleImageLoads(data.code)}
                    onError={() => handleImageErrors(data.code)}
                  />
                  <div className="upperText">
                    <p className="upperSubtitle">{data?.cardUpperSubtitle}</p>
                    <p className="upperTitle">{data?.cardUpperTitle}</p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
