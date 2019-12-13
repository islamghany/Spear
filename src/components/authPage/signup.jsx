import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import useForm from "react-hook-form";
import { register } from "../../actions/index";
import { connect, useSelector } from "react-redux";

const SignUp = props => {
  const signedIn = useSelector(state => state.currentUser);

  const [submitError, setSubmitError] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    props.register(data, setSubmitError);
    console.log(submitError);
  };
  const renderErrors = field => {
    if (errors[field] && errors[field].type === "required") {
      return `${field} field is empty`;
    } else if (errors[field] && errors[field].type === "pattern") {
      return `${field} field is not  correct`;
    } else if (errors[field] && errors[field].type === "maxLength") {
      return `${field} field is too long`;
    } else if (errors[field] && errors[field].type === "minLength") {
      return `${field} field is too  short`;
    } else if (field === "email" && submitError) {
      return "The email address is already in use by another account.";
    } else return null;
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
        </div>
        <div className="form__wrapper">
          <h1 className="form__heading">Register</h1>
          <div className="form">
            <div className="form__container">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form__unit mg-none">
                  <input
                    type="text"
                    className="form__input2"
                    name="name"
                    ref={register({
                      required: true,
                      minLength: 3,
                      maxLength: 20
                    })}
                    placeholder="Enter Your name"
                  />
                  <span className="invalid">{renderErrors("name")}</span>
                </div>
                <div className="form__unit mg-none">
                  <input
                    type="text"
                    className="form__input2"
                    name="address"
                    ref={register({
                      required: true,
                      minLength: 5,
                      maxLength: 50
                    })}
                    placeholder="Enter Your address"
                  />
                  <span className="invalid">{renderErrors("address")}</span>
                </div>
                <div className="form__unit mg-none">
                  <input
                    type="text"
                    className="form__input2"
                    name="phone"
                    ref={register({
                      required: true,
                      minLength: 5,
                      pattern: /^\d{11}$/,
                      maxLength: 20
                    })}
                    placeholder="Enter Your phone number"
                  />
                  <span className="invalid">{renderErrors("phone")}</span>
                </div>
                <div className="form__unit mg-none">
                  <input
                    type="text"
                    className="form__input2"
                    name="email"
                    ref={register({
                      required: true,
                      minLength: 8,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      maxLength: 30
                    })}
                    placeholder="Enter Your Email"
                  />
                  <span className="invalid">{renderErrors("email")}</span>
                </div>
                <div className="form__unit mg-none">
                  <input
                    type="password"
                    className="form__input2"
                    name="password"
                    ref={register({
                      required: true,
                      minLength: 6,
                      maxLength: 20
                    })}
                    placeholder="Enter Your Password"
                  />
                  <span className="invalid">{renderErrors("password")}</span>
                </div>
                <button className="btn btn--contained-brown block mg-none ">
                  Register
                </button>
                <p className="p">
                  have an Account ? <Link to="/login">Log In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default connect(null, { register })(SignUp);
