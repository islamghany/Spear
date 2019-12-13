import React from "react";
import { Link } from "react-router-dom";
import { addData, removeData } from "../../actions/index";
import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";

class RenderTop extends React.Component {
  renderHeart = (id, type) => {
    const { user } = this.props;
    if (user[type] && user[type][id]) {
      return (
        <i
          className="icon ion-md-heart"
          onClick={() => {
            this.props.removeData(id, type, user.id);
          }}
          style={{ color: "#F5593D" }}
        ></i>
      );
    } else if (user["name"]) {
      return (
        <i
          className="icon ion-md-heart-empty"
          onClick={() => {
            this.props.addData(id, type, user.id);
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
  renderCart = (id, type) => {
    const { user } = this.props;

    if (user[type] && user[type][id]) {
      return (
        <i
          className="icon ion-md-cart"
          onClick={() => {
            this.props.removeData(id, type, user.id);
          }}
          style={{ color: "#F5593D" }}
        ></i>
      );
    } else if (user["name"]) {
      return (
        <i
          className="icon ion-md-cart"
          onClick={() => {
            this.props.addData(id, type, user.id);
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

  renderCards = () => {
    const { top, clothes } = this.props;
    if (top === "popular") {
      clothes.sort((a, b) => {
        return b.fav - a.fav;
      });
    } else if (top === "sale") {
        clothes.sort((a, b) => {
            let textA = a.sale.toUpperCase();
            let textB = b.sale.toUpperCase();
            return textA > textB ? -1 : textA < textB ? 1 : 0;
          });
    } else {
      clothes.sort((a, b) => {
        return b.selling - a.selling;
      });
    }
    return clothes.map((item, idx) => {
      if (idx < 5) {
        return (
          <div className="card" key={item.id}>
            <Link
              to={{
                pathname: `/item/${item.id}`,
                state: {
                  no: item.key
                }
              }}
              params={{ key: item.key }}
            >
              <div
                className="card__img"
                style={{ backgroundImage: `url(${item.img1})` }}
              ></div>
            </Link>
            <div className="card__content">
              <div className="card__desc">
                <h1 className="card__name">{item.name}</h1>

                {item.sale === "yes" ? (
                  <p className="card__price">
                    <span className="sale">{item.price}$</span>
                    {Math.ceil(item.price - (item.salePer / item.price) * 100)}$
                  </p>
                ) : (
                  <p className="card__price">{item.price}$</p>
                )}
              </div>
              <div className="card__icons">
                {this.renderHeart(item.id, "wishlists")}
                {this.renderCart(item.id, "cart")}
              </div>
            </div>
          </div>
        );
      }
    });
  };

  render() {
    if (this.props.clothes) {
      return <div className="card__wrapper">{this.renderCards()}</div>;
    }
  }
}
export default connect(null, { addData, removeData })(RenderTop);
