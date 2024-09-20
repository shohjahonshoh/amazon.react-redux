import React from "react";

function Register() {
  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister} className="auth-form">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label for="name">LastName:</label>
        <input type="text" id="LastName" name="LastName" required />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
