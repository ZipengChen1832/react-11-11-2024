import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const initUser = {
  id: undefined,
  name: "",
  username: "",
  email: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: {
      lat: "",
      lng: "",
    },
  },
  phone: "",
  website: "",
  company: {
    name: "",
    catchPhrase: "",
    bs: "",
  },
};

export default function User() {
  const params = useParams();
  console.log("params", params);
  const {id} = params;

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const { name, email, username, website } = user;

  return (
    <div>
      <h2>User</h2>
      <div>
        <div>Name: {name}</div>
        <div>Email: {email}</div>
        <div>Username: {username}</div>
        <div>Website: {website}</div>
      </div>
    </div>
  );
}
