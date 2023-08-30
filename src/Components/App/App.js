import React, { useState } from "react";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import { YelpAPI } from "../../utils";

function App() {
  const api = new YelpAPI();
  const [businesses, setBusinesses] = useState([]);

  const onSubmitHandler = (term, location, sorting) => {
    api.search(term, location, sorting).then((data) => {
      console.log("Result from yelp api");
      console.log(data);
      setBusinesses(data || []);
    });
  };

  return (
    <React.StrictMode>
      <SearchBar onSubmit={onSubmitHandler} />
      <div>{businesses && <BusinessList businesses={businesses} />}</div>
      {businesses && <BusinessList businesses={businesses} />}
    </React.StrictMode>
  );
}

export default App;
