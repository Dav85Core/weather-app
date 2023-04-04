import React from "react";
import { mockUsers } from "./MockData";
import "../App.css";
import { useState, useEffect } from "react";

function Users() {
  const [usersData, setUsersData] = useState([]);
  const [searchParam] = useState(["name", "username"]);
  const [q, setQ] = useState("");
  const [filterParam, setFilterParam] = useState(["All"]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((response) => setUsersData(response));
  };

  const searchUser = (usersData) => {
    return usersData.filter((user) => {
      if (user.name == filterParam) {
        return searchParam.some((newUser) => {
          return (
            user[newUser].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      } else if (user.username == filterParam) {
        return searchParam.some((newUser) => {
          return (
            user[newUser].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      } else if (filterParam == "All") {
        return searchParam.some((newUser) => {
          return (
            user[newUser].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      } else if (filterParam == "username") {
        return searchParam.some((newUser) => {
          return (
            user[newUser].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      }
    });
  };

  return (
    <div className="users-container">
      <div className="users-header">
        <h1>List of Users</h1>
        <form action="">
          <input
            className="user-input"
            id="user-input"
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <label htmlFor="user-input">Search users</label>
          <div className="select">
            <select
              onChange={(e) => {
                setFilterParam(e.target.value);
              }}
            >
              <option value="name">Filter by Name</option>
              <option value="username">Filter by Username</option>
            </select>
          </div>
        </form>
      </div>
      <div className="users">
        {searchUser(usersData).map((user) => {
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
