import * as constants from "./constants";
import { extend } from "underscore";

const initialState = {
  chirps: [],
  isFetching: false,
  lastUpdated: null
}

export function chirps(state = initialState, action) {
  switch (action.type) {
    case constants.REQUEST_CHIRPS:
      return extend({}, state, { isFetching: true });
    case constants.FETCH_CHIRPS_SUCCESS:
      return extend({}, state, {
        chirps: action.payload, isFetching: false, lastUpdated: action.receivedAt
      });
    case constants.FETCH_CHIRPS_FAILURE:
      return extend({}, state, { chirps: [], isFetching: false });
    case constants.REQUEST_CREATE_CHIRP:
      return state;
    case constants.CREATE_CHIRP_SUCCESS:
      const cpy = state.chirps.slice();
      cpy.push(extend({}, action.payload));
      return { chirps: cpy, isFetching: false, lastUpdated: action.receivedAt };
    case constants.CREATE_CHIRP_FAILURE:
      return state;
    default:
      return state;
  }
}
