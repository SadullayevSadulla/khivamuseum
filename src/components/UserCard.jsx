import React from "react";

const API = "https://694fc9098531714d9bcef883.mockapi.io/users";

export default function UserCard({ user, setUsers }) {
  const deleteUser = () => {
    fetch(`${API}/${user.id}`, { method: "DELETE" })
      .then(() => fetch(API))
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  };

  return (
    <div className="user-card">
      <img
        src={user.avatar && user.avatar.startsWith("http")
          ? user.avatar
          : "https://i.pravatar.cc/150?u=" + user.id}
        alt={user.name}
      />


      <h3>{user.name}</h3>
      <p>{user.email}</p>

      <button onClick={deleteUser}>Delete</button>
    </div>
  );
}
