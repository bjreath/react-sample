import * as constants from "./constants";

// -----------------------------------------------------------------------------
// Async Action Creators
// -----------------------------------------------------------------------------
export function fetchChirps() {
  return (dispatch) => {
    dispatch(requestChirps());
    fetch("http://localhost:3000/chirps.json")
      .then(function(response) {
        response.json().then((json) => {
          dispatch(fetchChirpsSuccess(json));
        });
      }).catch(function(response) {
        dispatch(fetchChirpsFailure(["There was a problem fetching chirps."]));
      });
  };
}

export function createChirp(chirp) {
  return (dispatch) => {
    dispatch(requestCreateChirp(chirp));
    fetch("http://localhost:3000/chirps.json", {
      method: "POST",
      body: JSON.stringify({ chirp }),
      mode: "cors",
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(function(response) {
      response.json().then((json) => {
        dispatch(createChirpSuccess(json));
      });
    }).catch(function(response) {
      dispatch(createChirpFailure(["There was a problem creating the chirp."]));
    });
  };
}

// -----------------------------------------------------------------------------
// Simple Action Creators
// -----------------------------------------------------------------------------
export function requestChirps() {
  return {
    type: constants.REQUEST_CHIRPS
  };
}

export function fetchChirpsSuccess(chirps) {
  return {
    type: constants.FETCH_CHIRPS_SUCCESS,
    payload: chirps,
    receivedAt: new Date()
  };
}

export function fetchChirpsFailure(errors) {
  return {
    type: constants.FETCH_CHIRPS_FAILURE,
    payload: errors
  };
}

export function requestCreateChirp(chirp) {
  return {
    type: constants.REQUEST_CREATE_CHIRP,
    payload: chirp
  };
}

export function createChirpSuccess(chirp) {
  return {
    type: constants.CREATE_CHIRP_SUCCESS,
    payload: chirp,
    receivedAt: new Date()
  };
}

export function createChirpFailure(errors) {
  return {
    type: constants.CREATE_CHIRP_FAILURE,
    payload: errors
  };
}
