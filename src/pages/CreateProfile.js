import { Link } from "react-router-dom";
import Form from "../components/Form";

export default function CreateProfile() {
  return (
    <>
      <section className="language-profile-section">
        <h1>Create language profile</h1>
        <hr />
        <p>Already created a profile?</p>
        <section className="sign-in-btn-container">
          <Link to="/signIn" className="sign-in-btn">
            Sign in
          </Link>
        </section>
        <hr />
        <Form />
      </section>
    </>
  );
}
