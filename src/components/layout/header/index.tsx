import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Container from "./styled";
import { RocketLogo } from "assets/img";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <Container isOpen={isMenuOpen}>
      <button className="menuButton" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div />
        <div />
        <div />
      </button>
      <div className="brandContainer">
        <img src={RocketLogo} className="rocketLogo" />
        <span className="siteName">RR Soccer</span>
      </div>
      <nav className="menu">
        <NavLink className="link" activeClassName="activeLink" to="/home">
          Home
        </NavLink>
        <NavLink className="link" activeClassName="activeLink" to="/players">
          Players
        </NavLink>
        <NavLink className="link" activeClassName="activeLink" to="/fixture">
          Fixture
        </NavLink>
      </nav>
    </Container>
  );
};

export default Header;
