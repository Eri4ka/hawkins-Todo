import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Todo from './pages/Todo';
import Team from './pages/Team';
import ErrorPage from './pages/ErrorPage';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 672px;
  width: 100%;
  margin: 50px auto;
`;

const App = () => {
  return (
    <Router>
      <Container>
        <Header />
        <Routes>
          <Route path='/' element={<Todo />} />
          <Route path='/team' element={<Team />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
