import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const usersAPI = "https://jsonplaceholder.typicode.com/users";

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(usersAPI)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div>
      <h2>users</h2>
      <div>
        {users.map((user) => {
          return (
            <Link key={user.id} to={`/users/${user.id}`}>
              <div>{user.email}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}


