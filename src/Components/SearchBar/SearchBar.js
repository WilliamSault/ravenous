import React, { useState } from "react";
import "./SearchBar.css";
import { SortOptions } from "../../utils.js";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");
  const handleTermChange = ({ target }) => {
    setTerm(target.value);
  };

  const [location, setLocation] = useState("");
  const [locationError, setLocationError] = useState(false);
  const handleLocationChange = ({ target }) => {
    setLocation(target.value);
    setLocationError(false);
  };
  const [sorting, setSorting] = useState(SortOptions.BEST_MATCH);
  const handleSortingChange = ({ target }) => {
    setSorting(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (location) {
      onSubmit(term, location, sorting);
    } else {
      setLocationError(true);
    }
  };
  return (
    <div className="w3-top">
      <div
        className="w3-white w3-xlarge"
        style={{ maxWidth: "1200px;margin:auto" }}
      >
        <form className="w3-center" onSubmit={handleSubmit}>
          <label className="searchLabel">
            Highest Rated
            <input
              type="radio"
              name="searchType"
              id="Highest Rated "
              value={SortOptions.RATING} // Set the value attribute
              checked={sorting === SortOptions.RATING}
              onChange={handleSortingChange}
              style={{ marginLeft: "5px" }}
            />
          </label>
          <label className="searchLabel">
            Best Match{" "}
            <input
              type="radio"
              name="searchType"
              id="Best Match"
              value={SortOptions.BEST_MATCH} // Set the value attribute
              checked={sorting === SortOptions.BEST_MATCH}
              onChange={handleSortingChange}
              style={{ marginLeft: "5px" }}
            />
          </label>
          <label className="searchLabel">
            Most Reviewed{" "}
            <input
              type="radio"
              id="Most Reviewed"
              name="searchType"
              value={SortOptions.MOST_REVIEWED} // Set the value attribute
              checked={sorting === SortOptions.MOST_REVIEWED}
              onChange={handleSortingChange}
              style={{ marginLeft: "5px" }}
            />
          </label>

          <br />
          <label className="searchLabel">
            <input
              type="search"
              value={term}
              placeholder="Please enter text here"
              onChange={handleTermChange}
            />
          </label>
          <label className="searchLabel">
            <input
              type="search"
              placeholder="Where?"
              value={location}
              onChange={handleLocationChange}
            />
          </label>
          <br />
          <input type="submit" value="Search" />
          {locationError && (
            <div style={{ color: "red" }}>Please enter a location.</div>
          )}
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
