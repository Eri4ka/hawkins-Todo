import { useState, createContext } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Todo from './pages/Todo';
import Team from './pages/Team';
import ErrorPage from './pages/ErrorPage';

import { baseTheme, darkTheme } from 'styles/theme';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';

export const ThemeContext = createContext();

const App = () => {
  const getCurrentTheme = () => {
    const currentStorageTheme = localStorage.getItem('lightTheme');
    switch (currentStorageTheme) {
      case 'true':
        return true;
      case 'false':
        return false;
      default:
        return true;
    }
  };
  let currentTheme = getCurrentTheme();

  const [lightTheme, setLightTheme] = useState(currentTheme);

  return (
    <Router>
      <ThemeProvider theme={lightTheme ? baseTheme : darkTheme}>
        <GlobalStyles />
        <ThemeContext.Provider value={lightTheme}>
          <Container>
            <Header lightTheme={lightTheme} setLightTheme={setLightTheme} />
            <Routes>
              <Route path='/' element={<Todo />} />
              <Route path='/team' element={<Team />} />
              <Route path='*' element={<ErrorPage />} />
            </Routes>
          </Container>
        </ThemeContext.Provider>
      </ThemeProvider>
    </Router>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 672px;
  width: 100%;
  margin: 50px auto;
`;

export default App;
