import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      <div>
        <h1>404 - Page not found</h1>
        <h3>
          The page you are looking for might have been removed, had its name changed, or is
          temporarily unavailable.
        </h3>
        <button type="button">
          <Link to="/">Go back to Home page</Link>
        </button>
      </div>
    </div>
  );
}
