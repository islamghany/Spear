import React from "react";
import { Link, Redirect } from "react-router-dom";
import useForm from "react-hook-form";
import { useSelector, connect } from "react-redux";
import { login } from "../../actions/index";

function Login({ login }) {
  const [error, setError] = React.useState(false);
  const signedIn = useSelector(state => state.currentUser);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    login(data.email, data.password, setE);
  };
  const setE = e => {
    if (e === "error") setError(true);
    else setError(false);
  };
  if (signedIn && signedIn["uid"]) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className="form__content">
        <div className="here">
          <h1 className="mainHeading">Log in with Spear</h1>
          <p className="p">
            Sign Up and you will be able to buy thing and add to your wishlist
          </p>
        </div>{" "}
        <div className="form__wrapper">
          <h1 className="form__heading head2">Log In</h1>

          <div className="form">
            <div className="form__container">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form__unit mg-none">
                  <input
                    type="text"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    name="email"
                    className={`form__input2 ${errors.email ? "error" : null}`}
                    placeholder="Enter Your Email"
                    ref={register({
                      required: true
                    })}
                  />
                </div>
                <div className="form__unit mg-none mg-tp-2">
                  <input
                    type="password"
                    name="password"
                    minLength="6"
                    className={`form__input2 ${
                      errors.password ? "error" : null
                    }`}
                    placeholder="Enter Your Password"
                    ref={register({
                      required: true,
                      minLength: 6
                    })}
                  />{" "}
                  />
                </div>
                <button className="btn btn--contained-primary block mg-none">
                  Log In
                </button>
                {error && (
                  <p className="invalid">email or password are invalid</p>
                )}
                <p className="p">
                  Don't have an Account ? <Link to="/signup">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { login })(Login);
