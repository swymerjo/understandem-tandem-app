import { Link } from "react-router-dom";
import logo from "../images/pacman.svg";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <main className="main-about">
        <h1 className="title-about">
          unders
          <span className="title-about-background-highlight">Tand'em</span>
        </h1>
        <p className="subtitle-about">
          Find your perfect tandem partner today.
        </p>

        <article className="teaser-about-first teaser-about">
          <section className="about-text">
            <h3 className="">Create your language profile</h3>
            <p className="about-sub-text">
              Develop your own language profile. Choose the language(s) you want
              to learn and the language(s) you can offer in return. Include your
              level for each language.
            </p>
            <Link
              to="/createProfile"
              className="create-profile-link learn-more-link"
              title="create profile page"
            >
              Get started!
            </Link>
          </section>
          <section className="about-images">
            <img src={logo} alt="understandem-logo" className="about-image" />
          </section>
        </article>

        <article className="teaser-about-second teaser-about">
          <section className="about-images">
            <img src={logo} alt="understandem-logo" className="about-image" />
          </section>
          <section className="about-text">
            <h3 className="">Make it fun</h3>
            <p className="about-sub-text">
              You can choose which topics you would like to talk about with a
              tandem and undersTand'em will show you Tandems to match your
              interests.
            </p>
            <Link
              to="/createProfile"
              className="create-profile-link learn-more-link"
              title="create profile page"
            >
              Get started!
            </Link>
          </section>
        </article>

        <article className="teaser-about-third teaser-about">
          <section className="about-text">
            <h3 className="">Make it personal</h3>
            <p className="about-sub-text">
              On your profile you can display preferred days and times to meet.
              You can also change the radius to find tandems closer or further
              from your current location.
            </p>
            <Link
              to="/createProfile"
              className="create-profile-link learn-more-link"
              title="create profile page"
            >
              Get started!
            </Link>
          </section>
          <section className="about-images">
            <img src={logo} alt="understandem-logo" className="about-image" />
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
