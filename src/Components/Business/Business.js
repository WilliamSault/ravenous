import React from "react";
import "./Business.css";

const exampleBusiness = {
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

function Business(business) {
  return (
    <div class="w3-quarter">
      <img alt={business.name} src={business.image} style={{ width: "100%" }} />
      <h3 className="name">{business.name}</h3>
      <label className="infoLabel">
        Address<label className="info">{business.address}</label>
      </label>
      <label className="infoLabel">
        City<label className="info">{business.city}</label>
      </label>
      <label className="infoLabel">
        State<label className="info">{business.state}</label>
      </label>
      <label className="infoLabel">
        Zipcode<label className="info">{business.zipcode}</label>
      </label>
      <label className="infoLabel">
        Category<label className="info">{business.category}</label>
      </label>
      <label className="infoLabel">
        Rating<label className="info">{business.rating}</label>
      </label>
      <label className="infoLabel">
        Review<label className="info">{business.review}</label>
      </label>
      <label className="infoLabel">
        Number<label className="info">{business.count}</label>
      </label>
    </div>
  );
}

const businesses = [
  exampleBusiness,
  exampleBusiness,
  exampleBusiness,
  exampleBusiness,
  exampleBusiness,
  exampleBusiness,
  exampleBusiness,
  exampleBusiness,
  exampleBusiness,
  exampleBusiness,
];

function BusinessList() {
  return (
    <div class="w3-row-padding w3-padding-16 w3-center">
      {businesses.map((business) => {
        return Business(business);
      })}
    </div>
  );
}
export { Business, BusinessList };
