import reducer, { initialState } from './reducer';
import * as types from '../actions';

describe('weather reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should set isFetching to true when requesting weather data', () => {
    expect(reducer(initialState, { type: types.REQUEST_WEATHER })).toEqual({
      ...initialState,
      isFetching: true,
    });
  });

  it('should set weather data when receiving payload', () => {
    const payload = { data: 'test' };

    expect(
      reducer(initialState, { type: types.RECEIVE_WEATHER, payload: payload }),
    ).toEqual({
      ...initialState,
      data: payload,
    });
  });
});
