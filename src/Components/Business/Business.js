import React from "react";
import "./Business.css";

function Business(props) {
  return (
    <div class="w3-quarter">
      <img alt={props.name} src={props.image} style={{ width: "100%" }} />
      <h3 className="name">{props.name}</h3>
      <label className="infoLabel">
        Address<label className="info">{props.address}</label>
      </label>
      <label className="infoLabel">
        City<label className="info">{props.city}</label>
      </label>
      <label className="infoLabel">
        State<label className="info">{props.state}</label>
      </label>
      <label className="infoLabel">
        Zipcode<label className="info">{props.zipcode}</label>
      </label>
      <label className="infoLabel">
        Category<label className="info">{props.category}</label>
      </label>
      <label className="infoLabel">
        Rating<label className="info">{props.rating}</label>
      </label>
      <label className="infoLabel">
        Review<label className="info">{props.review}</label>
      </label>
      <label className="infoLabel">
        Number<label className="info">{props.count}</label>
      </label>
    </div>
  );
}

Business.defaultProps = {
  image: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
  name: "Will's Business",
  address: "1 Main street",
  city: "London",
  state: "London",
  zipcode: "EC1 7EY",
  category: "Pizza",
  rating: 5,
  review: "Soo Good!",
  count: 3,
};

export default Business;
