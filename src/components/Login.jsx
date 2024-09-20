import React from "react";

function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="auth-form">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
