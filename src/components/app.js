import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeatherIfNeeded } from '../actions';

import Widget from './widget';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeatherIfNeeded());
  });

  return <Widget />;
};
export default App;
