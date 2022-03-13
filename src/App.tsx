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
import { Container, Navbar } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
              <Link to="/">
                <Navbar.Brand href="#home">
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
      </div>
    </BrowserRouter>
  );
}

export default App;
