import React, { useState, useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnLink,
  NavItemBtn,
} from "./Navbar.elements";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../../globalStyles";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

window.addEventListener('resize', showButton);
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            ULTRA
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <NavMenu onClick={handleClick}>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/services">Services</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/products">Products</NavLinks>
            </NavItem>

            <NavItemBtn>
              {button ? (
                <NavBtnLink to="/sign-up">
                  <Button primary>SIGN UP</Button>
                </NavBtnLink>
              ) : (
                <NavBtnLink to="/sign-up">
                  <Button fontBig primary>
                    SIGN UP
                  </Button>
                </NavBtnLink>
              )}
            </NavItemBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
