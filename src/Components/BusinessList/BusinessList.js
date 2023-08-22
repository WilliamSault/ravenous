import React from "react";
import Business from "../Business/Business";




  
  function BusinessList(props) {
    return (
      <div class="w3-row-padding w3-padding-16 w3-center">
        {props.businesses.map((business) => {
          return <Business business={business} />;
        })}
      </div>
    );
  }


  export default BusinessList;