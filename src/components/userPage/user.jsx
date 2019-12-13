import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { addData, removeData, addOrders } from "../../actions/index";
import _ from "lodash";
var items = {};
function User({ addData, removeData, addOrders }) {
  const user = useSelector(state => state.user);
  const clothes = useSelector(state => state.clothes);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const renderCards = tab => {
    return _.map(user[tab], (item, i) => {
      if (tab === "cart") items[item] = item;
      return (
        <div>
          <div className="cart">
            <Link
              className="cart__link"
              to={{
                pathname: `/item/${item}`,
                state: {
                  no: clothes[item].key
                }
              }}
              params={{ key: item.key }}
            >
              <div
                className="cart__img"
                style={{ backgroundImage: `url(${clothes[item].img1})` }}
              ></div>
            </Link>
            <div className="cart__content">
              <div className="cart__desc">
                <h1 className="cart__name">{clothes[item].name}</h1>
                {clothes[item].sale === "yes" ? (
                  <p className="card__price">
                    <span className="sale">{clothes[item].price}$</span>
                    {Math.ceil(
                      clothes[item].price -
                        (clothes[item].salePer / clothes[item].price) * 100
                    )}
                    $
                  </p>
                ) : (
                  <p className="card__price">{clothes[item].price}$</p>
                )}
              </div>
              <div className="card__icons">
                {tab === "wishlists" && renderCart(clothes[item].id, "cart")}
                <i
                  className="icon ion-md-trash"
                  onClick={e => {
                    e.stopPropagation();
                    removeData(clothes[item].id, tab, user.id);
                  }}
                ></i>
              </div>
            </div>
          </div>
        </div>
      );
    });
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
    } else {
      return (
        <i
          className="icon ion-md-cart"
          onClick={() => {
            addData(id, type, user.id);
          }}
        ></i>
      );
    }
  };
  if (user && user["name"]) {
    return (
      <div className="profile">
        <h1 className="mainHeading">Hello {user.name}</h1>
        <div className="profile__info">
          <h1 className="subHeading">Your Details</h1>
          <ul className="profile__info--list">
            <li className="profile__info--item">
              Name : <span>{user.name}</span>
            </li>
            <li className="profile__info--item">
              email : <span>{user.email}</span>
            </li>
            <li className="profile__info--item">
              Address : <span>{user.address}</span>
            </li>
            <li className="profile__info--item">
              phone : <span>{user.phone}</span>
            </li>
          </ul>
        </div>
        <div className="slider-wrapper" >
        {user["cart"] && (
          <div>
            <div className="wrap">
              <h1 className="mainHeading">Your Cart</h1>
              <button
                onClick={() => {
                  addOrders(items, user.id);
                }}
                className="btn btn--contained-primary circle"
              >
                Buy All
              </button>
            </div>{" "}
            
            <div className="profile__cart">
              <Slider {...settings}>{renderCards("cart")}</Slider>
            </div>
          </div>
        )}
        {user["wishlists"] && (
          <div className="profile__wishlist">
            <h1 className="mainHeading">Your Wishlist</h1>
            <Slider {...settings}>{renderCards("wishlists")}</Slider>
          </div>
        )}
        {user["orders"] && (
          <div className="profile__wishlist">
            <h1 className="mainHeading">your orders</h1>
            <Slider {...settings}>{renderCards("orders")}</Slider>
          </div>
        )}
        </div>
      </div>
    );
  } else {
    return <Redirect to="/" />;
  }
}

export default connect(null, { addData, removeData, addOrders })(User);
