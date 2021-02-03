import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './components/app';

module.exports = function render() {
  const store = configureStore();
  let content = renderToString(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  return content;
};
