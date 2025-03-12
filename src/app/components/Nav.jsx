import Link from "next/link";

export default function Navigation() {
  return (
    <div
      className="d-flex flex-column vh-100 p-3 bg-dark text-white"
    >
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link text-white" href="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" href="/state">
            State in React
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" href="/services">
            Services
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
