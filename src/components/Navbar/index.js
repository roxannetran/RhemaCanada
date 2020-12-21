import React from 'react'
import { FaBars } from 'react-icons/fa'
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu
} from './NavbarElements'

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo
            to='hero'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-70}
          >
            <img
              src={require('../../images/rhema-logo.png').default}
              alt='Rhema Canada'
            />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to='services'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-70}
              >
                What We Do
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-70}
              >
                About Us
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='leadership'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-70}
              >
                Leadership
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='strategy'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-70}
              >
                Corporate Strategy
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='contact'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-70}
              >
                Contact Us
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink
              href='https://rhemaonline.ca/facility-bookings/'
              alt='Book An Event'
              target='_blank'
            >
              Book An Event
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
