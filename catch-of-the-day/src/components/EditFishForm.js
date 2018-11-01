import React from "react";
import PropTypes from "prop-types";

class EditFishForm extends React.Component {
  static propTypes = {
    fish: PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      desc: PropTypes.string,
      price: PropTypes.number,
      status: PropTypes.string
    }),
    updateFish: PropTypes.func,
    index: PropTypes.string
  };

  handleChange = e => {
    const element = e.currentTarget;
    // const name = element.name;

    //  update that fish
    //  1.   Take a copy of the current fish
    const updatedFish = {
      ...this.props.fish,
      [element.name]: element.value
    };

    this.props.updateFish(this.props.index, updatedFish);

    console.log(updatedFish);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          defaultValue={this.props.fish.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          defaultValue={this.props.fish.price}
          onChange={this.handleChange}
        />
        <select
          name="status"
          defaultValue={this.props.fish.status}
          onChange={this.handleChange}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          type="text"
          name="desc"
          placeholder="Desc"
          defaultValue={this.props.fish.desc}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image"
          defaultValue={this.props.fish.image}
          onChange={this.handleChange}
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove Fish{" "}
        </button>
      </div>
    );
  }
}

export default EditFishForm;
