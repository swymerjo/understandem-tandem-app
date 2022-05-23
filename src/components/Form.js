import React, { useState } from "react";
import { countryList } from "./countryOptions";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [country, setCountry] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordCheckMessage, setPasswordCheckMessage] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [passwordAllowed, setPasswordAllowed] = useState(false);

  console.log(dob);
  const strongRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  const mediumRegex = new RegExp(
    "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
  );

  function checkPasswordStrength(e) {
    if (strongRegex.test(e.target.value)) {
      setPasswordMessage("strong password");
      setPassword(e.target.value);
      setPasswordAllowed(true);
    } else if (mediumRegex.test(e.target.value)) {
      setPasswordMessage("medium strength password");
      setPassword(e.target.value);
      setPasswordAllowed(true);
    } else {
      setPasswordMessage("weak password");
      setPassword(e.target.value);
      setPasswordAllowed(false);
    }
  }

  function checkPasswordMatch(e) {
    if (e.target.value !== password) {
      setPasswordsMatch(false);
    } else {
      setPasswordCheckMessage("");
      setPasswordsMatch(true);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordsMatch) {
      if (passwordAllowed) {
        console.log("password ok");
        handleLocalStorage();
        window.location.href = "/signIn";
      } else {
        setPasswordMessage("please choose a stronger password");
      }
    } else {
      setPasswordMessage("passwords don't match");
    }
    setTimeout(() => {
      setPasswordMessage("");
    }, 2000);
  }

  function handleLocalStorage() {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("dob", dob);
    localStorage.setItem("pronouns", pronouns);
    localStorage.setItem("country", country);
  }

  return (
    <>
      <form className="language-profile-form" onSubmit={handleSubmit}>
        <label>
          name:
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          email:
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          dob:
          <input
            type="date"
            name="date of birth"
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </label>
        <label>
          pronouns:
          <select
            id="pronouns"
            name="pronouns"
            required
            onChange={(e) => setPronouns(e.target.value || null)}
            value={pronouns || ""}
          >
            <option value=""></option>
            <option value="none of your business">
              none of your business...
            </option>
            <option value="he">he</option>
            <option value="she">she</option>
            <option value="they">they</option>
          </select>
        </label>
        <label>
          country of origin:
          <select
            id="country"
            name="country"
            required
            onChange={(e) => setCountry(e.target.value || null)}
            value={country || ""}
          >
            {countryList.map((country) => (
              <option key={country}>{country}</option>
            ))}
          </select>
        </label>
        <label>
          new password:
          <input
            type="password"
            name="password"
            onChange={(e) => checkPasswordStrength(e)}
            required
          />
        </label>
        <p>{passwordMessage}</p>
        <label>
          retype password:
          <input
            type="password"
            name="password"
            onChange={(e) => checkPasswordMatch(e)}
            required
          />
        </label>
        <p>{passwordCheckMessage}</p>
        <input type="submit" value="Complete my profile!" />
      </form>
    </>
  );
}
