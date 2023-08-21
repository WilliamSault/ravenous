import React from "react";
import "./SearchBar.css";

function SearchBar() {




  
  return (
    <div class="w3-top">
      <div
        class="w3-white w3-xlarge"
        style={{ "max-width": "1200px;margin:auto" }}
      >
        <form class="w3-center">
          <label className="searchLabel">
            Highest Rated
            <input
              type="radio"
              name="searchType"
              id="Highest Rated "
              defaultChecked="true"
              style={{ "margin-left": "5px" }}
            />
          </label>
          <label className="searchLabel">
            Best Match{" "}
            <input
              type="radio"
              name="searchType"
              id="Best Match"
              style={{ "margin-left": "5px" }}
            />
          </label>
          <label className="searchLabel">
            Most Reviewed{" "}
            <input
              type="radio"
              id="Most Reviewed"
              name="searchType"
              value="Most Reviewed"
              style={{ "margin-left": "5px" }}
            />
          </label>

          <br />
          <label className="searchLabel">
            <input type="search" defaultValue="Please enter text here" />
          </label>
          <label className="searchLabel">
            <input type="searc" defaultValue="Where?" />
          </label>
          <br />
          <input type="button" value="Submit" />
        </form>
      </div>
    </div>
  );
}



export default SearchBar;
