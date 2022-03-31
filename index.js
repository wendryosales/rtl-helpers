import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

export const renderWithRouter = (component, historyEntries = ['/']) => {
  const history = createMemoryHistory({ initialEntries: historyEntries });
  return {
    ...render(
      <Router history={ history }>
        {component}
      </Router>,
    ),
    history,
  };
};

export const renderWithRedux = (
  component, rootReducer,
  { initialState = {}, store = createStore(rootReducer, initialState) } = {},
) => ({
  ...render(
    <Provider store={ store }>
      {component}
    </Provider>,
  ),
  store,
});

const renderWithRouterAndRedux = (
  component, rootReducer,
  {
    initialState = {},
    store = createStore(rootReducer, initialState),
    initialEntries = ['/'],
    history = createMemoryHistory({ initialEntries }),
  } = {},
) => ({
  ...render(
    <Router history={ history }>
      <Provider store={ store }>
        {component}
      </Provider>
    </Router>,
  ),
  history,
  store,
});

export default renderWithRouterAndRedux;