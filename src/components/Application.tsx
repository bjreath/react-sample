import * as React from "react";

import { Chirp } from "../models/Chirp";
import { Navbar } from "./Navbar";
import { ChirpForm } from "./ChirpForm";
import { Timeline } from "./Timeline";
import { createChirp, fetchChirps } from "../actions";

interface Props {
}

interface State {
  chirps: Chirp[]
}

export class Application extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      chirps: []
    };
  }

  public componentDidMount() {
    this.fetchChirpsIfNeeded();
  }

  public render() {
    return(
      <div>
        <Navbar />

        <div className="container">
          <ChirpForm />
          <Timeline chirps={this.state.chirps} />
        </div>
      </div>
    );
  }

  private fetchChirpsIfNeeded() {
    let _this = this;
    fetch("http://localhost:3000/chirps.json")
      .then(function(response) {
        response.json().then((json) => {
          _this.setState({ chirps: json });
        });
      });
  }
}
