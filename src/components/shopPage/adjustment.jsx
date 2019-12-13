import React from "react";
import Select from "react-select";
import { Range, getTrackBackground } from "react-range";
const STEP = 1;
const MIN = 20;
const MAX = 200;
const options = [
  { value: "recent", label: "Recent" },
  { value: "popular", label: "Popular" },
  { value: "sale", label: "Sale" },
  { value: "a", label: "From A to Z" },
  { value: "z", label: "From Z to A" }
];
const options2 = [
  { value: "t-shirt", label: "t-shirts" },
  { value: "hat", label: "Hats" },
  { value: "pullover", label: "Pullovers" }
];
class Adjustment extends React.Component {
  state = {
    values: [200],
    color: "",
    sortBy: "",
    type: ""
  };

  handleSubmit = e => {
    e.preventDefault();
  };
  handleOptionChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleOptionChange2 = e => {
    this.setState({
      sortBy: e.value
    });
  };
  render() {
    return (
      <div className="form__body">
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.handleSubmit(this.state);
          }}
        >
          <div className="form__unit color">
            <h1 className="mainHeading">Color</h1>
            <input
              type="radio"
              value="blue"
              onChange={this.handleOptionChange}
              name="color"
              id="blue"
            />
            <label htmlFor="blue"></label>
            <input
              type="radio"
              name="color"
              id="red"
              value="red"
              onChange={this.handleOptionChange}
            />
            <label htmlFor="red"></label>

            <input
              type="radio"
              value="grey"
              onChange={this.handleOptionChange}
              name="color"
              id="grey"
            />
            <label htmlFor="grey"></label>
            <input
              type="radio"
              value="green"
              
              name="color"
              id="green"
              onChange={this.handleOptionChange}
            />
            <label htmlFor="green"></label>

            <input
              type="radio"
              value="black"
                           onChange={this.handleOptionChange}
              name="color"
              id="black"
            />
            <label htmlFor="black"></label>

            <input
              type="radio"
              value="white"
                           onChange={this.handleOptionChange}
              name="color"
              id="white"
            />
            <label htmlFor="white"></label>

            <input
              type="radio"
              name="color"
              value="orange"
             
              onChange={this.handleOptionChange}
              id="orange"
            />
            <label htmlFor="orange"></label>
          </div>
          <div className="form__unit ">
            <h1 className="mainHeading">Sort By</h1>
            <Select onChange={this.handleOptionChange2} options={options} />
          </div>
          <div className="form__unit">
            <h1 className="mainHeading">Type</h1>
            <Select
              options={options2}
              onChange={e => {
                this.setState({ type: e.value });
              }}
            />
          </div>
          <div className="form__unit range">
            <h1 className="mainHeading">Price</h1>
            <Range
              className="range"
              values={this.state.values}
              step={STEP}
              min={MIN}
              max={MAX}
              onChange={values => this.setState({ values })}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "6px",
                    width: "100%",
                    background: getTrackBackground({
                      values: this.state.values,
                      colors: ["#DE533A", "#ccc"],
                      min: MIN,
                      max: MAX
                    })
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props, isDragged }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "42px",
                    width: "42px",
                    backgroundColor: isDragged ? "#DE533A" : "#CCC"
                  }}
                />
              )}
            />
            <h1 className="subHeaing mg-tp-2">20 : {this.state.values}</h1>
          </div>
          <button
            className="btn btn--contained-primary"
            style={{ padding: "1rem 3rem", borderRadius: "10rem" }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Adjustment;
