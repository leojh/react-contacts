import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import thunk from 'redux-thunk'
import rootReducer from './state/reducers/rootReducer'
//import faker from 'faker'
import { createStore, applyMiddleware } from 'redux'
import { compose, range, fromPairs, map } from 'ramda'
import { Provider } from 'react-redux'
import { addContact } from './state/actions/contacts'

https://github.com/leojh/react-contacts

const initialState = {
  contacts: [
    'Mary',
    'Bob',
    'Alice'
  ]
  // contacts: compose(
  //   fromPairs,
  //   map(i => ([ shortid.generate(),  { name: faker.name.findName() }]))
  // )(range(1,10))
}

const composeMiddleWare = () => window.devToolsExtension ?
  compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : undefined) :
  compose(applyMiddleware(thunk))
const store = createStore(rootReducer, initialState, composeMiddleWare());

window.store = store
window.addContact = addContact

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
