import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout, login } from "../actions/index";
import _ from "lodash";

let total = 0,
  allTotal = 0;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.header = React.createRef();
    this.state = { email: "", password: "", error: false };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    var x = document.documentElement.scrollTop || document.body.scrollTop;
    if (x >= 200 && this.header.current) {
      this.header.current.classList.add("dark");
    } else if (x === 0 && this.header.current) {
      this.header.current.classList.remove("dark");
    }
  };
  renderTotal = () => {
    if (total !== allTotal) {
      return (
        <p className="card__price">
          Total :<span className="sale"> {allTotal}$</span>
          {total}$
        </p>
      );
    }
    return <p className="card__price">Total : {total}$</p>;
  };

  renderList = tab => {
    const { user, clothes } = this.props;

    let sumWith = 0,
      sumWithout = 0;
    let sz = 0,
      count = 0;
    if (user[tab]) sz = Object.keys(user[tab]).length;
    return _.map(user[tab], (item, i) => {
      let price = parseInt(clothes[item].price),
        per = parseInt(clothes[item].salePer);

      if (clothes[item].sale === "yes") {
        sumWith += parseInt(clothes[item].price);
        sumWithout += Math.ceil(price - (per / price) * parseInt(100));
      } else {
        sumWith += parseInt(clothes[item].price);
        sumWithout += parseInt(clothes[item].price);
      }
      count++;

      if (count === sz) {
        count++;

        allTotal = sumWith;
        total = sumWithout;
      }

      return (
        <div key={clothes[item].id}>
        <Link
          className="mini__link"
          to={{
            pathname: `/item/${item}`,
            state: {
              no: clothes[item].key
            }
          }}
          params={{ key: item.key }}  
        >
          <div className="mini">
            <div
              className="mini__img"
              style={{ backgroundImage: `url(${clothes[item].img1})` }}
            ></div>
            <div className="mini__contnet">
              <h1 className="subHeading">{clothes[item].name}</h1>
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
          </div>
        </Link>
        </div>
      );
    });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    this.props.login(this.state.email, this.state.password, this.setError);
  };

  setError = e => {
    if (e === "error") {
      this.setState({
        error: true
      });
    } else
      this.setState({
        error: false
      });
  };

  render() {
    const { user, clothes, signedIn } = this.props;
    return (
      <nav className="nav" ref={this.header}>
        <div className="nav__navigations">
          <div className="nav__logo font-lg fast">
            <Link to="/"> Spear</Link>
          </div>
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/shopping/men">Men</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/shopping/women">Women</NavLink>
            </li>
          </ul>
        </div>
        <div className="nav__board">
          <ul className="nav__board--list">
            <li className="cart">
              {user &&
                user["cart"] &&
                Object.keys(user["cart"]).length <= 9 && (
                  <div className="count">
                    {Object.keys(user["cart"]).length}
                  </div>
                )}
              {user && user["cart"] && Object.keys(user["cart"]).length > 9 && (
                <div className="count">+9</div>
              )}

              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 469.333 469.333"
                style={{ enableBackground: "new 0 0 40.508 40.508" }}
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <g>
                      <path
                        d="M434.979,42.667H85.333v3.061l-4.375-14.999C75.687,12.635,58.844,0,40,0H10.667C4.771,0,0,4.771,0,10.667
        s4.771,10.667,10.667,10.667H40c9.427,0,17.844,6.313,20.479,15.365l66.396,227.635l-34.021,42.521
        c-4.854,6.073-7.521,13.688-7.521,21.458c0,18.948,15.406,34.354,34.354,34.354H416c5.896,0,10.667-4.771,10.667-10.667
        c0-5.896-4.771-10.667-10.667-10.667H119.687c-7.177,0-13.021-5.844-13.021-13.021c0-2.948,1.01-5.844,2.854-8.135l34.279-42.844
        h209.221c16.448,0,31.604-9.615,38.615-24.5l74.438-158.177c2.135-4.552,3.26-9.604,3.26-14.615v-3.021
        C469.333,58.073,453.927,42.667,434.979,42.667z M448,80.042c0,1.906-0.427,3.823-1.24,5.542L372.333,243.75
        c-3.51,7.438-11.083,12.25-19.313,12.25H146.667L90.663,64h344.316C442.156,64,448,69.844,448,77.021V80.042z"
                      />
                      <path
                        d="M128,384c-23.531,0-42.667,19.135-42.667,42.667s19.135,42.667,42.667,42.667s42.667-19.135,42.667-42.667
        S151.531,384,128,384z M128,448c-11.76,0-21.333-9.573-21.333-21.333c0-11.76,9.573-21.333,21.333-21.333
        c11.76,0,21.333,9.573,21.333,21.333C149.333,438.427,139.76,448,128,448z"
                      />
                      <path
                        d="M384,384c-23.531,0-42.667,19.135-42.667,42.667s19.135,42.667,42.667,42.667s42.667-19.135,42.667-42.667
        S407.531,384,384,384z M384,448c-11.76,0-21.333-9.573-21.333-21.333c0-11.76,9.573-21.333,21.333-21.333
        c11.76,0,21.333,9.573,21.333,21.333C405.333,438.427,395.76,448,384,448z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
              <div className="nav__dropdown">
                <div className="nav__dropdown--item">
                  {Object.keys(clothes).length && signedIn ? (
                    <React.Fragment>
                      <div className="nav__dropdown--content">
                        {this.renderList("cart")}
                      </div>
                      <div className="dropdown__end">
                        {this.renderTotal()}
                        <Link to="/user">
                          <button className="btn btn--contained-primary mg-none block">
                            go to cart
                          </button>
                        </Link>
                      </div>
                    </React.Fragment>
                  ) : (
                    "you must log in"
                  )}
                </div>
              </div>
            </li>
            <li className="wish">
              {user &&
                user["wishlists"] &&
                Object.keys(user["wishlists"]).length <= 9 && (
                  <div className="count">
                    {Object.keys(user["wishlists"]).length}
                  </div>
                )}
              {user &&
                user["wishlists"] &&
                Object.keys(user["wishlists"]).length > 9 && (
                  <div className="count">+9</div>
                )}
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 40.508 40.508"
                style={{ enableBackground: "new 0 0 40.508 40.508" }}
                xmlSpace="preserve"
              >
                <g>
                  <path
                    d="M3.023,20.822c0.019,0.031,0.042,0.059,0.066,0.083l15.918,16.914  c0.115,0.122,0.271,0.192,0.444,0.197h0.012c0.163,0,0.317-0.062,0.435-0.176L37.28,21.032c0.008-0.006,0.076-0.068,0.117-0.108 c0.034-0.032,0.062-0.065,0.068-0.081c1.962-2.032,3.043-4.702,3.043-7.517c0-5.974-4.86-10.834-10.835-10.834
    c-3.91,0-7.498,2.094-9.419,5.48c-1.92-3.387-5.508-5.48-9.419-5.48C4.86,2.492,0,7.352,0,13.326
    C-0.001,16.14,1.078,18.808,3.023,20.822z M10.834,3.743c3.875,0,7.346,2.312,8.842,5.891c0.098,0.233,0.324,0.383,0.577,0.383
    c0.252,0,0.479-0.15,0.577-0.384c1.497-3.578,4.968-5.89,8.843-5.89c5.285,0,9.585,4.3,9.585,9.584
    c0,2.521-0.978,4.904-2.754,6.712c-0.017,0.018-0.032,0.035-0.045,0.053L19.483,36.5l-15.4-16.358
    c-0.023-0.037-0.05-0.072-0.082-0.104c-1.775-1.805-2.752-4.188-2.752-6.711C1.249,8.042,5.549,3.743,10.834,3.743z"
                  />
                </g>
              </svg>

              <div className="nav__dropdown">
                <div className="nav__dropdown--item">
                  {Object.keys(clothes).length && signedIn ? (
                    <React.Fragment>
                      <div className="nav__dropdown--content">
                        {this.renderList("wishlists")}
                      </div>
                      <div className="dropdown__end">
                        <Link to="/user">
                          <button className="btn btn--contained-primary mg-none block">
                            go to wishlist
                          </button>
                        </Link>
                      </div>
                    </React.Fragment>
                  ) : (
                    "you must log in"
                  )}
                </div>
              </div>
            </li>
            <li className="user">
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style={{ enableBackground: "new 0 0 40.508 40.508" }}
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M437.02,330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521,243.251,404,198.548,404,148
      C404,66.393,337.607,0,256,0S108,66.393,108,148c0,50.548,25.479,95.251,64.262,121.962
      c-36.21,12.495-69.398,33.136-97.281,61.018C26.629,379.333,0,443.62,0,512h40c0-119.103,96.897-216,216-216s216,96.897,216,216
      h40C512,443.62,485.371,379.333,437.02,330.98z M256,256c-59.551,0-108-48.448-108-108S196.449,40,256,40
      c59.551,0,108,48.448,108,108S315.551,256,256,256z"
                    />
                  </g>
                </g>
              </svg>
              <div className="nav__dropdown form">
                {user && !user["name"] ? (
                  <div className="form">
                    <div className="form__container">
                      <form onSubmit={this.handleSubmit}>
                        <div className="form__unit">
                          <input
                            type="text"
                            value={this.state.email}
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            onChange={this.handleChange}
                            name="email"
                            className="form__input2"
                            placeholder="Email Address"
                            autoComplete="off"
                          />
                        </div>
                        <div className="form__unit">
                          <input
                            value={this.state.password}
                            required
                            minLength="3"
                            onChange={this.handleChange}
                            name="password"
                            type="password"
                            className="form__input2"
                            placeholder="Password"
                            autoComplete="off"
                          />
                        </div>
                        {this.state.error && (
                          <p className="invalid">
                            email or password are invalid
                          </p>
                        )}
                        <button className="btn btn--contained-primary mg-none block">
                          Submit
                        </button>
                      </form>
                      <p className="p">
                        Don't have an Account ?{" "}
                        <Link to="/signup">Sign Up</Link>
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="user">
                    <ul className="user__info">
                      <li className="user__item">
                        <Link to="/user">
                          <span>{user.name}</span>
                        </Link>
                      </li>
                      <li className="user__item">
                        <Link to="/user">
                          <span> {user.email}</span>
                        </Link>
                      </li>
                      <li className="user__item">
                        <span
                          onClick={() => {
                            this.props.logout();
                          }}
                        >
                          Logout
                        </span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapState = state => {
  return {
    user: state.user,
    signedIn: state.currentUser,
    clothes: state.clothes
  };
};
export default connect(mapState, { logout, login })(Header);
