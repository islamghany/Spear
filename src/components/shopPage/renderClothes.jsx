import React from "react";
import { Link } from "react-router-dom";
import { addData, removeData } from "../../actions/index";
import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";

function RenderClothes({ clothes, removeData, user, addData }) {
  const renderHeart = (id, type) => {
    if (user[type] && user[type][id]) {
      return (
        <i
          className="icon ion-md-heart"
          onClick={() => {
            removeData(id, type, user.id);
          }}
          style={{ color: "#F5593D" }}
        ></i>
      );
    } else if (user["name"]) {
      return (
        <i
          className="icon ion-md-heart-empty"
          onClick={() => {
            addData(id, type, user.id);
          }}
        ></i>
      );
    } else {
      return (
        <i
          className="icon ion-md-heart-empty"
          onClick={() => {
            toastr.error(
              "Your must login first",
              "to select items you must login "
            );
          }}
        ></i>
      );
    }
  };
  const renderCart = (id, type) => {
    if (user[type] && user[type][id]) {
      return (
        <i
          className="icon ion-md-cart"
          onClick={() => {
            removeData(id, type, user.id);
          }}
          style={{ color: "#F5593D" }}
        ></i>
      );
    } else if (user["name"]) {
      return (
        <i
          className="icon ion-md-cart"
          onClick={() => {
            addData(id, type, user.id);
          }}
        ></i>
      );
    } else {
      return (
        <i
          className="icon ion-md-cart"
          onClick={() => {
            toastr.error(
              "Your must login first",
              "to select items you must login "
            );
          }}
        ></i>
      );
    }
  };

  if (Object.keys(clothes).length) {
    return clothes.map((item, idx) => {
      return (
        <div className="card2" key={item.id}>
          <Link
            to={{
              pathname: `/item/${item.id}`,
              state: {
                no: item.key
              }
            }}
            params={{ key: item.key }}
          >
            {" "}
            <div
              className="card2__img"
              style={{ backgroundImage: `url(${item.img1})` }}
            ></div>{" "}
          </Link>
          <div className="card2__content">
            <div className="card2__desc">
              <h1 className="card2__name">{item.name}</h1>

              {item.sale === "yes" ? (
                <p className="card2__price">
                  <span className="sale">{item.price}$</span>
                  {Math.ceil(item.price - (item.salePer / item.price) * 100)}$
                </p>
              ) : (
                <p className="card2__price">{item.price}$</p>
              )}
            </div>
            <div className="card2__icons">
              {renderHeart(item.id, "wishlists")}
              {renderCart(item.id, "cart")}
            </div>
          </div>
        </div>
      );
    });
  } else return <div>not found</div>;
}

export default connect(null, { addData, removeData })(RenderClothes);
