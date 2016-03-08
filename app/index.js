import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'


import reducers from './reducers'

import Main from './containers/main'
import Foo from './components/foo'
import Bar from './components/bar'


const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <Route path="/foo" component={Foo}/>
        <Route path="/bar" component={Bar}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('mount')
);
