import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import App from "./components/app/App";
import IndexPage from "./pages/IndexPage";
import UserLinksPage from "./pages/UserLinksPage";
import LoginPage from "./pages/LoginPage";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<IndexPage />} />
          <Route path="/user-links" element={<UserLinksPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
