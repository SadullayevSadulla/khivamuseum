import React, { useState, useEffect } from "react";
import UserCard from "../components/UserCard";
import UserForm from "../components/UserForm";
// import "./users.css";

const API = "https://694fc9098531714d9bcef883.mockapi.io/users";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="users-page">
      <h2>Users</h2>

      <UserForm setUsers={setUsers} />

      {loading && <p className="loading-text">Yuklanmoqda...</p>}

      {!loading && users.length === 0 && (
        <p className="empty-text">Ma’lumot yo‘q</p>
      )}

      <div className="users-grid">
        {!loading &&
          users.map(user => (
            <UserCard
              key={user.id}
              user={user}
              setUsers={setUsers}
            />
          ))}
      </div>
    </div>
  );
}
