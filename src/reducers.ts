import * as constants from "./constants";
import { extend } from "underscore";

const initialState = {
  chirps: []
}

export function chirps(state = initialState, action) {
  switch (action.type) {
    case constants.REQUEST_CHIRPS:
      return state;
    case constants.FETCH_CHIRPS_SUCCESS:
      return extend({}, state, { chirps: action.payload });
    case constants.FETCH_CHIRPS_FAILURE:
      return extend({}, state, { chirps: [] });
    case constants.REQUEST_CREATE_CHIRP:
      return state;
    case constants.CREATE_CHIRP_SUCCESS:
      const cpy = state.chirps.slice();
      cpy.push(extend({}, action.payload));
      return { chirps: cpy };
    case constants.CREATE_CHIRP_FAILURE:
      return state;
    default:
      return state;
  }
}
