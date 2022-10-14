import React from 'react';
import styled from 'styled-components';
import px2vw from '../utils/px2vw';
import { Outlet } from 'react-router-dom';

const Div = styled.div`
  padding: 30px ${px2vw(48)};
`;

const Layout = () => {
  return (
    <Div>
      <Outlet />
    </Div>
  );
};

export default Layout;
