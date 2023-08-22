import React from "react";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";


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


function App() {
  return (
    <React.StrictMode>
      <SearchBar />
      <BusinessList businesses={businesses}/>
    </React.StrictMode>
  );
}

export default App;