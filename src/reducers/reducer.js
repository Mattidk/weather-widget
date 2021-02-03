import { RECEIVE_WEATHER, REQUEST_WEATHER } from '../actions';

export const initialState = {
  isFetching: false,
  data: {
    name: '',
    main: {
      temp: 0,
      humidity: 0,
    },
    wind: {
      speed: 0,
      deg: 0,
    },
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_WEATHER:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_WEATHER:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload,
      });
    default:
      return state;
  }
}

export default reducer;
