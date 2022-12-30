import React from "react";

const Main = (data) => {
  return (
    <div className="main__block">
      <div className="main__block-left">
        <img src={data.image} alt={data.title} className="main__block-img" />
      </div>
      <div className="main__block-right">
        <img
          src="../assets/img/location.png"
          alt="location"
          className="location-icon"
        />
        <h3 className="main__location-title">{data.location}</h3>
        <a href={data.googleMapsUrl}>View on Google Maps</a>
        <h3 className="main__location-detail">{data.title}</h3>
        <span className="main__block-date">{`${data.startDate} - ${data.endDate}`}</span>
        <p className="main__block-desc">{data.description}</p>
      </div>
    </div>
  );
};

export default Main;
