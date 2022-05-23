import logo from "../images/pacman.svg";
export default function Home() {
  return (
    <>
      <main>
        <article className="understandem-teaser">
          <h1 className="title-main">
            unders
            <span className="title-main-background-highlight">Tand'em</span>
          </h1>
          <p className="subtitle-main">
            Find your perfect tandem partner today.
          </p>
          <div className="teaser-background">
            <section className="teaser-image-container">
              <img
                src={logo}
                alt="understandem-logo"
                className="homepage-image"
              />
            </section>
            <section className="teaser-text">
              <h2>undersTand'em</h2>
              <p className="teaser-sub-text">The easier way to tandem.</p>
              <a
                className="learn-more-link"
                href="/about.html"
                title="Learn more link"
              >
                Learn more
              </a>
            </section>
          </div>
        </article>
      </main>
      <p className="copyright-text">Copyright &copy; undersTand'em 2022</p>
    </>
  );
}
