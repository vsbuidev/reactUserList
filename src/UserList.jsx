import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserList.css";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (error) {
        console.error(`Error fetching user data: ${error}`);
      }
    };
    fetchUsers();
  }, []);

  return (
    // <div className="user-list-container">
    //   <h1>User List</h1>
    //   <ul className="user-list">
    //     {/* Map through the array of users and render them dynamically */}
    //     {users.map((user) => (
    //       <li key={user.id} className="user-item">
    //         <div className="user-info">
    //           <h2>{user.name}</h2>
    //           <p>
    //             <strong>Username:</strong> {user.username}
    //           </p>
    //           <p>
    //             <strong>Email:</strong> {user.email}
    //           </p>
    //           <p>
    //             <strong>Phone:</strong> {user.phone}
    //           </p>
    //           <p>
    //             <strong>Address:</strong> {user.address.city},{" "}
    //             {user.address.street}, {user.address.suite}
    //           </p>
    //         </div>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <div className="user-list-container">
      <h1>User List</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the array of users and render them dynamically in table rows */}
          {users.map((user) => (
            <tr key={user.id} className="user-row">
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                {user.address.city}, {user.address.street}, {user.address.suite}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
