import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Site em React
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navegacao-bs"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Abrir menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse ms-md-auto justify-content-end"
            id="navegacao-bs"
          >
            {/* https://react-bootstrap.netlify.app/docs/components/navbar/ */}
            <ul className="navbar-nav">
              <li className="nav-item">
                {/* https://reactrouter.com/en/main/components/link */}
                <Link to="/" className="nav-link">
                  Página Inicial ❤
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/exerciciofetch" className="nav-link">
                  Exercício Fetch
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contato" className="nav-link">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
