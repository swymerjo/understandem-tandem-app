import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section>
      <h1>Error</h1>
      <h2>404</h2>
      <p>page not found</p>
      <Link to="/">back home</Link>
    </section>
  );
}
