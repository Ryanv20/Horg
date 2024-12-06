import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]); // State to store user data
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from your Flask backend
    axios.get('http://127.0.0.1:5000/users')
      .then(response => {
        setUsers(response.data); // Set user data to state
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>Users List</h1>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user[0]} - {user[1]} {/* Adjust indexes depending on your DB schema */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
