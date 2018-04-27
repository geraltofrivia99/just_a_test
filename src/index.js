import React from 'react';
import {render}from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './main.css'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {browserHistory} from 'react-router-3'
import {syncHistoryWithStore} from 'react-router-redux'
import {Provider} from 'react-redux'
import {Router, Route} from 'react-router-3'

import reducers from 'reducers'
import Layout from 'containers/layout'
import Phones from 'containers/phones'
import Phone from 'containers/phone'
import Basket from 'containers/basket'
import WindowPage from 'containers/WindowPage'
import InfiniteScrollExample from 'containers/wayp'

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
))

const history = syncHistoryWithStore(browserHistory, store)



render(
<Provider store={store}>
    <Router history={history}>
        <Route component={Layout}>
            <Route path='/' component={Phones}/>
            <Route path='catigories/:id' component={Phones} />
        </Route>
        <Route path='phones/:id' component={Phone}/>
        <Route path='/basket' component={Basket}/>
        <Route path='/windowpage' component={WindowPage}/>
        <Route path='/wayp' component={InfiniteScrollExample}/>
    </Router>
</Provider>,
document.getElementById('root'));
registerServiceWorker();
