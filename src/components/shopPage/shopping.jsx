import React from "react";
import Adjustment from "./adjustment";
import RenderClothes from "./renderClothes";
import { connect } from "react-redux";
import { addData } from "../../actions/index";
class Shopping extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.ref2 = React.createRef();
    this.state = { option: {} };
  }
  componentDidMount() {
    window.addEventListener("click", this.onClickOutsideHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.onClickOutsideHandler);
  }
  onClickOutsideHandler = () => {
    if (this.ref.current && this.ref.current.classList.contains("show")) {
      this.ref.current.classList.toggle("show");
      this.ref2.current.style.transform = "translateX(0)";
      //  this.ref2.current.classList.toggle('sit-next')
    }
  };
  handleSlide = e => {
    e.stopPropagation();
    if (this.ref.current) {
      this.ref.current.classList.toggle("show");
      if (
        this.ref2.current.style.transform ===
        `translateX(${this.ref.current.clientWidth}px)`
      ) {
        this.ref2.current.style.transform = "translateX(0)";
      } else {
        this.ref2.current.style.transform = `translateX(${this.ref.current.clientWidth}px)`;
      }
    }
  };
  renderClothes = () => {
    if (this.props.clothes) {
      const { option } = this.state;
      let temp = this.props.clothes.filter(item => {
        return (
          item.gender === this.props.match.params.id || item.gender === "two"
        );
      });
      if (option.color) {
        temp = temp.filter(item => {
          return item.color === option.color;
        });
      }
      if (option.type) {
        temp = temp.filter(item => {
          return item.type === option.type;
        });
      }
      if (option.values) {
        temp = temp.filter(item => {
          return item.price <= option.values[0];
        });
      }
      if (option.sortBy) {
        if (option.sortBy === "popular") {
          temp.sort((a, b) => {
            return b.fav - a.fav;
          });
        } else if (option.sortBy === "sale") {
          temp.sort((a, b) => {
            return b.salePer - a.salePer;
          });
        } else if (option.sortBy === "a") {
          temp.sort((a, b) => {
            let textA = a.name.toUpperCase();
            let textB = b.name.toUpperCase();
            return textA < textB ? -1 : textA > textB ? 1 : 0;
          });
        } else if (option.sortBy === "z") {
          temp.sort((a, b) => {
            let textA = a.name.toUpperCase();
            let textB = b.name.toUpperCase();
            return textA > textB ? -1 : textA < textB ? 1 : 0;
          });
        }
      }
      return (
        <div className="card2__wrapper">
          <RenderClothes user={this.props.user} clothes={temp} />
        </div>
      );
    }
  };
  handleSubmit = e => {
    this.setState({ option: e });
  };
  render() {
    const { id } = this.props.match.params;
    //console.log(this.props.clothes)
    if (
      this.props.clothes &&
      this.props.user &&
      (id === "men" || id === "women")
    ) {
      return (
        <section className="shopping">
          <div className="option" onClick={this.handleSlide} ref={this.ref2}>
            <i className="icon ion-md-options"></i>
          </div>
          <div
            className="shopping__adjustment"
            ref={this.ref}
            onClick={e => {
              e.stopPropagation();
            }}
          >
            <Adjustment handleSubmit={this.handleSubmit} />
          </div>
          <div className="shopping__clothes">{this.renderClothes()}</div>
        </section>
      );
    } else return <div>not found</div>;
  }
}

const mapSate = state => {
  return { clothes: Object.values(state.clothes), user: state.user };
};
export default connect(mapSate, { addData })(Shopping);
