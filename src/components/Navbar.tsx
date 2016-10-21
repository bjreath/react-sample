import * as React from "react";

interface Props {
}

export function Navbar(props: Props) {
  return(
    <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
      <a className="navbar-brand" href="#">Chirp</a>
    </nav>
  );
}
