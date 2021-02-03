export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';

function requestWeather() {
  return {
    type: REQUEST_WEATHER,
  };
}

function receiveWeather(data) {
  return {
    type: RECEIVE_WEATHER,
    payload: data,
  };
}

export function fetchWeather(query = 'Copenhagen') {
  window.history.pushState(null, '', window.location.origin + '?city=' + query);
  return (dispatch) => {
    dispatch(requestWeather());
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query},dk&units=metric&appid=59cb4eccb7a272409394d5622f1d86f5`)
      .then((response) => response.json())
      .then((json) => {
        if (json.cod == 200) {
          dispatch(receiveWeather(json));
        }
      });
  };
}

function shouldFetchWeather(state) {
  const data = state.data;
  if (data.name.length == 0) {
    return true;
  } else if (state.isFetching) {
    return false;
  }
}

export function fetchWeatherIfNeeded() {
  const params = new URLSearchParams(window.location.search);
  const city = params.has('city') ? params.get('city') : 'Copenhagen';
  return (dispatch, getState) => {
    if (shouldFetchWeather(getState())) {
      return dispatch(fetchWeather(city));
    }
  };
}
