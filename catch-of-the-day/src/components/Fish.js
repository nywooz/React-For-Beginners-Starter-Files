import React from "react";
import PropTypes from "prop-types";

import { formatPrice } from "../helpers";

class Fish extends React.Component {
  // static because we are declaring "PropTypes" for all of the fish
  // component.And we do not have to redeclare for every single instance
  static propTypes = {
    addToOrder: PropTypes.func.isRequired,
    details: PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      desc: PropTypes.string,
      price: PropTypes.number,
      status: PropTypes.string
    })
  };

  //   handleClick = e => {
  //     this.props.addToOrder(this.props.index);
  //   };

  render() {
    const { name, image, desc, price, status } = this.props.details;
    const isAvailable = status === "available";

    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">{name}</h3>
        <span className="price">{formatPrice(price)}</span>
        <p>{desc}</p>
        <button
          disabled={!isAvailable}
          onClick={() => this.props.addToOrder(this.props.index)}
        >
          {isAvailable ? "Add To Cart" : "Sold Out!"}
        </button>
      </li>
    );
  }
}

export default Fish;
