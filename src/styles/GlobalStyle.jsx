import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Gowun Batang', serif;
  }
  /* *::before, *::after{
    box-sizing: border-box;
    display: block;
    content: '';
  } */
  a{
    text-decoration: none;
    color: inherit;
  }
  li{
    list-style: none;
  }
  button{
    cursor: pointer;
    background: none;
    border: none;
  }
  input, textarea{
    &:focus{
      border: none;
    }
  }
  img{
    display: block;
  }
  html, body{
    -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
    &::-webkit-scrollbar{
      display: none;
    }
    
  }
`;
