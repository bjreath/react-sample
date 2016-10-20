import * as React from "react";

import { Chirp } from "../models/Chirp";

interface Props {
  chirp: Chirp;
}

export function ChirpCard(props: Props) {
  return(
    <div className="chirp">
      {props.chirp.author} - {props.chirp.content}
    </div>
  );
}
