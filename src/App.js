import React, { useState } from "react";

import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import UserList from "./UserList";
import LandingPage from "./LandingPage";

// UserList -> /
// Landing Page -> /landing/<user_id>

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            exact
            path="/"
            element={<UserList setSelectedUser={setSelectedUser} />}
          />
          <Route
            exact
            path="/landing/:slug"
            element={<LandingPage selectedUser={selectedUser} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
