import * as React from "react";
import { connect } from "react-redux";

import { Chirp } from "../models/Chirp";
import { ChirpCard } from "./ChirpCard";

interface Props {
  chirps: Chirp[];
}

function ChirpTimeline(props: Props) {
  return(
    <div className="timeline">
      <h1>Timeline</h1>
      { props.chirps.map((chirp) => <ChirpCard key={chirp.id} chirp={chirp} />) }
    </div>
  )
}

function mapStateToProps(state) {
  return {
    chirps: state.chirps
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

const Timeline = connect(mapStateToProps, mapDispatchToProps)(ChirpTimeline);

export { Timeline };
