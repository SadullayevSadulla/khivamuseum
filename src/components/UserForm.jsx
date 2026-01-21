import React, { useState } from "react";

const API = "https://694fc9098531714d9bcef883.mockapi.io/users";

export default function UserForm({ setUsers }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Iltimos, hamma maydonlarni to‘ldiring.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
        }),
      });

      const newUser = await response.json();
      setUsers((prev) => [...prev, newUser]);

      setName("");
      setEmail("");
    } catch (error) {
      console.error("Foydalanuvchi qo‘shishda xatolik:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="user-form container" onSubmit={handleSubmit}>
      <h3>Yangi Foydalanuvchi Qo‘shish</h3>

      <div className="n">
        <input
          type="text"
          placeholder="Ism"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ marginRight: "10px" }}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ marginRight: "10px" }}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Yuklanmoqda..." : "Qo‘shish"}
        </button>
      </div>
    </form>
  );
}
