import React from "react";
import Business from "../Business/Business";

function BusinessList(props) {
  return (
    <div className="w3-row-padding w3-padding-16 w3-center">
      {props.businesses.map((business) => {
        return <Business business={business} key={business.id} />;
      })}
    </div>
  );
}

export default BusinessList;
