import React, { useState } from "react";

function EmployeeForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/employees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, position })
    });

    setName("");
    setEmail("");
    setPosition("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Position" value={position} onChange={e => setPosition(e.target.value)} />
      <button>Add</button>
    </form>
  );
}

export default EmployeeForm;
