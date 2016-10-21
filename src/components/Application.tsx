import * as React from "react";
import { connect } from "react-redux";

import { Chirp } from "../models/Chirp";
import { Navbar } from "./Navbar";
import { ChirpForm } from "./ChirpForm";
import { Timeline } from "./Timeline";
import { createChirp, fetchChirps } from "../actions";

interface StateProps {
  chirps: Chirp[]
}

interface DispatchProps {
  fetchChirpsIfNeeded?: Function;
  onSubmit?: Function;
}

class App extends React.Component<StateProps & DispatchProps, {}> {
  constructor(props) {
    super(props);
  }

  public componentDidMount() {
    this.props.fetchChirpsIfNeeded();
  }

  public render() {
    return(
      <div>
        <Navbar />

        <div className="container">
          <ChirpForm onSubmit={this.props.onSubmit} />
          <Timeline chirps={this.props.chirps} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state): StateProps {
  return {
    chirps: state.chirps
  };
}

function mapDispatchToProps(dispatch): DispatchProps {
  return {
    fetchChirpsIfNeeded: function() {
      dispatch(fetchChirps());
    },
    onSubmit: function(values) {
      dispatch(createChirp(values));
    }
  };
}

const Application = connect(mapStateToProps, mapDispatchToProps)(App);

export { Application };
