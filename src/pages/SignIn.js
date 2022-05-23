import React, { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const userEmail = localStorage.getItem("email");
    const userPassword = localStorage.getItem("password");
    handleLogin(userEmail, userPassword);
  }

  function handleLogin(userEmail, userPassword) {
    console.log(userEmail, userPassword);
    console.log(email, password);
    if (userEmail === email) {
      if (userPassword === password) {
        window.location.href = "/profile";
      } else {
        setPasswordMessage("incorrect password");
      }
    } else {
      setEmailMessage("email and password do not match");
    }
    setTimeout(() => {
      setPasswordMessage("");
    }, 2000);
  }

  return (
    <>
      <section className="sign-in-page">
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit}>
          <label>
            email:
            <input
              type="email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <p>{emailMessage}</p>
          <label>
            password:
            <input
              type="password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <p>{passwordMessage}</p>
          <input type="submit" value="Sign in" />
        </form>
      </section>
    </>
  );
}
