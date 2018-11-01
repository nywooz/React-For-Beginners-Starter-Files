import React from "react";
import PropTypes from "prop-types";

import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  static propTypes = {
    history: PropTypes.object
  };

  goToStore = e => {
    // 1. stop default form submit
    e.preventDefault();
    // 2. get text from that input
    const storeName = this.myInput.value.value;

    // 3. change the page to /store/whateva-they-entered
    this.props.history.push(`/store/${storeName}`);
    console.log(this);
  };

  componentDidMount() {
    console.log(this);
  }

  render() {
    return (
      <React.Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please enter a store</h2>

          <input
            ref={this.myInput}
            type="text"
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit"> Visit Store </button>
        </form>
      </React.Fragment>
    );
  }
}

export default StorePicker;
