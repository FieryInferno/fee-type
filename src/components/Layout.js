import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import {Container} from 'react-bootstrap';
import {Outlet} from 'react-router-dom';

const Layout = () => (
  <>
    <Header />
    <Sidebar />
    <Container className="my-[23px]">
      <Outlet />
    </Container>
  </>
);

export default Layout;
