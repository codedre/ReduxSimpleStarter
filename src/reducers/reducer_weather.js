import FETCH_WEATHER from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
    // return state.concat([ action.payload.data ]); // do not mutate state return a new instance of state
    return [ action.payload.data, ...state ]; //es6 version
  }
  return state;
}
