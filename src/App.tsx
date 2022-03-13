import React from 'react';
import NewsListPage from './components/NewsListPage';
import DiscussionPage from './components/DiscussionPage';

import {
  BrowserRouter, 
  Link,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/discussion">Discussion</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

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
