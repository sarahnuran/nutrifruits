import React from "react";
import "../Header/header.css";
import logo from "../../img/logo-nutrifruits.png";

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="header">
          <p className="welcome">
            <span>W</span>
            <span>E</span>
            <span>L</span>
            <span>C</span>
            <span>O</span>
            <span>M</span>
            <span>E</span>
          </p>

          <div className="squareOne"></div>
          <img alt="logo-nutrifruts" src={logo} />
          <p className="info-site">
            Our site provides data on the nutritional value of fruits
          </p>
          <div className="squareTwo"></div>
        </div>
      </>
    );
  }
}
export default Header;
