import * as React from "react";

import { Chirp } from "../models/Chirp";
import { ChirpCard } from "./ChirpCard";

interface Props {
  chirps: Chirp[];
}

export function Timeline(props: Props) {
  return(
    <div className="timeline">
      <h1>Timeline</h1>
      { props.chirps.map((chirp) => <ChirpCard key={chirp.id} chirp={chirp} />) }
    </div>
  )
}
