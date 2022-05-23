import "../index.css";
import twitterIcon from "../images/twitter.png";
import instagramIcon from "../images/instagram.png";
import facebookIcon from "../images/facebook.png";

export default function Footer() {
  return (
    <>
      <article className="social-icons">
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
          title="twitter-link"
          className="social-icon"
        >
          <img src={twitterIcon} alt="twitter-icon" />
        </a>
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noreferrer"
          title="instagram-link"
          className="social-icon"
        >
          <img src={instagramIcon} alt="instagram-icon" />
        </a>
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noreferrer"
          title="facebook-link"
          className="social-icon"
        >
          <img src={facebookIcon} alt="facebook-icon" />
        </a>
      </article>

      <footer className="footer">
        created by{" "}
        <a
          className="footer-name"
          href="https://twitter.com/SammyWymer"
          target="_blank"
          rel="noreferrer"
          title="Twitter link"
        >
          Sammy Wymer
        </a>{" "}
        with{" "}
        <a
          className="footer-link"
          href="https://github.com/swymerjo/undersTandem-website"
          rel="noreferrer"
          target="_blank"
        >
          Open Source Code
        </a>
      </footer>
    </>
  );
}
