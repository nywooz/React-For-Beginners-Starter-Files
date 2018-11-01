import React from "react";
import PropTypes from "prop-types";

const Login = props => {
  return (
    <nav className="login">
      <h2>Inventory Login</h2>
      <p>Sign in to manage your store's inventory</p>
      {externalAuthBtns.map(item => (
        <button
          key={item.name}
          className={item.name}
          onClick={() => props.authenticate(item.auth)}
        >
          Log In With {item.auth}
        </button>
      ))}
    </nav>
  );
};

const externalAuthBtns = [
  { name: "github", auth: "Github" },
  { name: "twitter", auth: "Twitter" },
  { name: "facebook", auth: "Facebook" }
];

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
};

export default Login;
