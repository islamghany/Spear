import React from "react";

const Benefits = () => {
  const card = (head, body, svg) => {
    return (
      <div className="card__overflow">
        <div className="card__overflow--out">{svg}</div>
        <div className="card__overflow--heading">{head}</div>
        <div className="card__overflow--content">{body}</div>
      </div>
    );
  };
  return (
    <div className="benefits">
      <h1 className="mainHeading">some reasons to buy from us</h1>
      <div className="card__overflow__wrapper">
        {card(
          "Return Or Exchang",
          "with spare now you can return or exchang the product within 14-days without taxes",
          <i className="icon ion-md-repeat"></i>
        )}

        {card(
          "Secure Payment",
          "100% safe payments. All major cards supported.",
          <i className="icon ion-md-lock"></i>
        )}
        {card(
          "Fast Delivery",
          "all your product will deliver in fast processing Delivery",
          <i className="icon ion-ios-hourglass"></i>
        )}
        {card(
          "Quality Certificates",
          "we use best strings and best matrials to produce best product for you",
          <i className="icon ion-md-clipboard"></i>
        )}
      </div>
    </div>
  );
};
export default Benefits;
