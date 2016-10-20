import * as React from "react";

interface Props {
}

export function Navbar(props: Props) {
  return(
    <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
      <a className="navbar-brand" href="#">Chirp</a>
      <ul className="nav navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
      </ul>
    </nav>
  );
}
