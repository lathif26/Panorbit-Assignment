import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css';

function UserList({ setSelectedUser }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://panorbit.in/api/users.json')
      .then(response => {
        setUsers(response.data.users);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='card-container'>
      <div className="background"></div>
      <div className="card">
        <h2 className='card-title'>Select an account</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {users.map(user => (
              <li key={user.id} onClick={() => setSelectedUser(user)}>
                <img src={user.profilepicture} alt={user.name} />
                <p>{user.name}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default UserList;

