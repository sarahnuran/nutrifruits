import React from "react";
import "../Header/header.css";
import logo from "../../img/logo_nutrifruits.png";
import facts from "../../img/facts.gif";

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="header">
          <div className="title">
            <p className="welcome">
              Welcome <br />
              to
            </p>
            <img alt="logo-nutrifruts" src={logo} />
          </div>
          <div className="gif">
            <img alt="logo-nutrifruts" src={facts} />
            <p className="info-site">
              Our site provides data on the nutritional value of fruits
            </p>
          </div>
        </div>
      </>
    );
  }
}
export default Header;
