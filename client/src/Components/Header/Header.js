import React from "react";
import "../Header/header.css";
import logo from "../../img/logonutri.png";
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
              {/* <span>W</span>
            <span>E</span>
            <span>L</span>
            <span>C</span>
            <span>O</span>
            <span>M</span>
            <span>E</span>
            <br /> */}
            </p>
            {/* <div className="squareOne"></div> */}
            <img alt="logo-nutrifruts" src={logo} />
          </div>

          <div className="gif">
            <img alt="logo-nutrifruts" src={facts} />

            <p className="info-site">
              Our site provides data on the nutritional value of fruits
            </p>
          </div>

          {/* <div className="squareTwo"></div> */}
        </div>
      </>
    );
  }
}
export default Header;
