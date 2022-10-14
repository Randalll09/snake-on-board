import { useState, useContext } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/Theme';
import Home from './pages/Home';
import Context, { UserContext } from './Context';
import Layout from './components/Layout';

function App() {
  const { theme } = useContext(UserContext);
  return (
    <div className="App">
      <Context>
        <ThemeProvider theme={theme ? lightTheme : darkTheme}>
          <GlobalStyle />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </Context>
    </div>
  );
}

export default App;
