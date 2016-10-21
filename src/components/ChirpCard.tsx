import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Chirp } from "../models/Chirp";
import { removeChirp } from "../actions";

interface Props {
  chirp: Chirp;
  removeChirp: Function;
}

function Card(props: Props) {
  const handleRemove = (event) => {
    event.preventDefault();
    props.removeChirp(props.chirp);
  };

  return(
    <div className="chirp">
      <a className="remove" onClick={handleRemove} href="#">x</a>
      {props.chirp.author} - {props.chirp.content}
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    chirp: ownProps.chirp
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeChirp: bindActionCreators(removeChirp, dispatch)
  };
}

const ChirpCard = connect(mapStateToProps, mapDispatchToProps)(Card as any);

export { ChirpCard };

