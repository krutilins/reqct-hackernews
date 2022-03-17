import React from 'react';
import NewsListPage from './components/NewsListPage';
import DiscussionPage from './components/DiscussionPage';
import Logo from './logo.svg';
import {
  BrowserRouter, 
  Link,
  Route,
  Routes,
} from "react-router-dom";
import { Button, Container, Navbar } from 'react-bootstrap';
import ThemeContext from './context/themes';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, ThemeState } from './store';
import { toggleTheme } from './features/theme/themeSlice';

function App() {
  const theme = useSelector<RootState>((state) => state.theme) as ThemeState;
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={theme}>
        <Navbar bg="light" variant="light">
          <Container>
              <Link to="/">
                <Navbar.Brand>
                  <img
                    alt=""
                    src={Logo}
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                  />{' '}
                  Hacker News
                </Navbar.Brand>
              </Link>
              <Button variant="primary" onClick={() => dispatch(toggleTheme())}>
                Toggle Theme
              </Button>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<NewsListPage />}>
          </Route>
          <Route path="discussion" element={<DiscussionPage />}>
            <Route path=":id" element={<DiscussionPage />}></Route>
          </Route>
          <Route path="*" element={<h1>There is nothing to render</h1>}></Route>
        </Routes>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
