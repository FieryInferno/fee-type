import React from 'react';
import {Navbar} from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import question from '../assets/images/question.svg';
import bell from '../assets/images/bell.svg';
import DropdownUser from '../components/DropdownUser';

/* eslint-disable max-len */
const Header = () => (
  <nav className="px-[29px] border-2 drop-shadow-lg ml-[4.6rem]">
    <Navbar>
      <Navbar.Brand href="#home">
        <img src={logo} width="205px" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className="mr-4">
          <img src={question} width="22px" />
        </Navbar.Text>
        <Navbar.Text className="mr-4">
          <img src={bell} width="22px" />
        </Navbar.Text>
        <Navbar.Text className="mr-4">
          <DropdownUser />
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  </nav>
);

export default Header;
