import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { addData } from "../../actions/index";
import { connect } from "react-redux";

const ItemPage = props => {
  let item = null;

  item = useSelector(
    state => Object.values(state.clothes)[props.location.state.no]
  );
  const user = useSelector(state => state.user);
  if (item) {
    const settings = {
      customPaging: function(i) {
        return (
          <a>
            <img src={item[`img${i + 1}`]} />
          </a>
        );
      },
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <section className="product">
        <div className="product__img">
          <Slider {...settings}>
            <div>
              <img src={item.img1} />
            </div>
            <div>
              <img src={item.img2} />
            </div>
          </Slider>
        </div>

        <div className="product__info">
          <div className="product__name">
            <h1 className="subHeading">
              {item.name} <span className="second">( {item.color} )</span>
            </h1>
          </div>
          <hr />
          {item.sale === "yes" ? (
            <h1 className="subHeading">
              <span className="sale">{item.price}$</span>
              {Math.ceil(item.price - (item.salePer / item.price) * 100)}$
            </h1>
          ) : (
            <h1 className="subHeading">{item.price}$</h1>
          )}
          <p className="p">{item.desc}</p>
          <button
            className="btn btn--contained-primary mg-none mg-tp-2"
            onClick={() => {
              if (user && user["name"]) {
                props.addData(item.id, "cart", user.id);
              }
            }}
          >
            add to cart
          </button>
        </div>
      </section>
    );
  } else return <div>not found</div>;
};
export default connect(null, { addData })(ItemPage);
