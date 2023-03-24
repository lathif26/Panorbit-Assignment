import React, { useState } from 'react';
import UserList from './UserList';
import LandingPage from './LandingPage';

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="app">
      {selectedUser ? (
        <LandingPage selectedUser={selectedUser} />
      ) : (
        <UserList setSelectedUser={setSelectedUser} />
      )}
    </div>
  );
}

export default App;





