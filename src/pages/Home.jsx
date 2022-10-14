import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: center;
  > h1 {
    margin-top: 30px;
    width: fit-content;
    font: 300 24px/2 ${({ theme }) => theme.batang};
    text-align: center;
    position: relative;
    display: block;
    &::after {
      display: block;
      content: '';
      position: absolute;
      left: -40px;
      top: 0;
      height: 100%;
      width: calc(100% + 80px);
      border-top: 1px solid ${({ theme }) => theme.text};
      border-bottom: 1px solid ${({ theme }) => theme.text};
    }
    &::before {
      display: block;
      content: '';
      position: absolute;
      top: -20px;
      width: calc(100% + 20px);

      left: -10px;
      height: calc(100% + 40px);
      border-left: 1px solid ${({ theme }) => theme.text};
      border-right: 1px solid ${({ theme }) => theme.text};
    }
  }
`;
const Home = () => {
  return (
    <Div>
      <h1>도마 위의 뱀</h1>
    </Div>
  );
};

export default Home;
