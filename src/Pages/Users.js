import React from "react";
import { mockUsers } from "./MockData";
import "../App.css";
import { useState, useEffect } from "react";

function Users() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((response) => setUsersData(response));
  };

  return (
    <div className="users-container">
      <div className="users-header">
        <h1>List of Users</h1>
        <form action="">
          <input className="user-input" id="user-input" type="text" />
          <label htmlFor="user-input">Search users</label>
        </form>
      </div>
      <div className="users">
        {usersData.map((user) => {
          return (
            <div className="user" key={user.id}>
              <div className="usernames">
                <p>{user.username}</p>
              </div>
              <div className="names">
                <p>{user.name}</p>
              </div>
              <div className="email">
                <p>{user.email}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Users;
