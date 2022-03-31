# RTL-HELPERS

Useful functions for tests integrated with React 

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install rtl-helpers.

```bash
npm install rtl-helpers
```

## Usage

```javascript
import renderWithRouterAndRedux from 'rtl-helpers';
import { renderWithRedux, renderWithRouter } from 'rtl-helpers';
```
## Functions

### renderWithRouterAndRedux

* 1st parameter: component to be rendered
* 2st parameter: Reducer, prefer to create a file with the "rootReducer" of all reducers combined
* 3st parameter: A settings object:
```javascript
{
    initialState = {}, // Default State
    store = createStore(rootReducer, initialState), // if you do not pass a store by parameter, a new one will be created
    initialEntries = ['/'], // if you want to redirect to some URL
    history = createMemoryHistory({ initialEntries }), // if you want a history
  }

```
#### Example
```js
 renderWithRouterAndRedux(<App />, {
   initialState: initialStateMock, initialEntries: ['/customers'],
 });
```
### renderWithRouter and renderWithRedux

the renderWithRouter function takes the parameters:

* 1st component to be rendered
* 2nd optional URL

##### The renderWithRedux function receives the same parameters as the renderWithRouterAndRedux function but it does not provide the history to the rendered components

## Required Libraries

```javascript
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
```

* [ @testing-library/react ](https://testing-library.com/docs/react-testing-library/intro/)
* [ react ](https://reactjs.org/)
* [ react-router-dom ](https://v5.reactrouter.com/web/guides/quick-start)
* [ react-redux ](https://react-redux.js.org/)
* [ redux ](https://redux.js.org/)


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Authors
[@wendryosales](https://www.linkedin.com/in/wendryosales/)

The function was not created by me. 

## License
[MIT](https://choosealicense.com/licenses/mit/)