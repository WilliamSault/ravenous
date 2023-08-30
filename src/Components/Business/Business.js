import React from "react";
import "./Business.css";

function Business({ business }) {
  const location = business.location;
  return (
    <div className="w3-quarter">
      <div className="image-container">
        <img alt={business.name} src={business.image_url} />
      </div>
      <h3 className="name">{business.name}</h3>
      {location && (
        <>
          <label className="infoLabel">
            Address<label className="info">{location.address1}</label>
          </label>
          <label className="infoLabel">
            City<label className="info">{location.city}</label>
          </label>
          <label className="infoLabel">
            Zipcode<label className="info">{location.zip_code}</label>
          </label>
        </>
      )}

      {business.categories && (
        <label className="infoLabel">
          Category<label className="info">{business.categories[0].title}</label>
        </label>
      )}
      <label className="infoLabel">
        Rating<label className="info">{business.rating}</label>
      </label>
      <label className="infoLabel">
        Review Count<label className="info">{business.review_count}</label>
      </label>
    </div>
  );
}

export default Business;
