import React from 'react'
import EmailMe from '../EmailMe'
import { Wrapper, Nav, NavItem, NavLink } from './style'

const Menu = () =>
  <Wrapper>
    <Nav>
      <NavItem>
        <a href="https://twitter.com/" rel="noopener noreferrer" target="_blank">Twitter</a>
      </NavItem>
      <NavItem>
        <a href="https://facebook.com/" rel="noopener noreferrer" target="_blank">Facebook</a>
      </NavItem>
      <NavItem>
        <a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank">Instagram</a>
      </NavItem>
      <NavItem>
        <a href="https://github.com/" rel="noopener noreferrer" target="_blank">Github</a>
      </NavItem>
    </Nav>
    <Nav>
      <NavItem>
        <NavLink exact to='/'>
            Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink exact to='/profile'>
          About Us
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink exact to='/pod'>
          Pod
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink exact to='/works'>Timeline</NavLink>
      </NavItem>
      <NavItem>
        <NavLink exact to='/login'>Login</NavLink>
      </NavItem>
      <NavItem highlight><EmailMe text="Contact"/>
    </NavItem>
    </Nav>
  </Wrapper>

export default Menu
