import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import './App.css';

import { Provider } from 'react-redux';
import { globalStore } from './modules/rootStore';

import { initStore } from './modules/constants'
import MainPage from './pages/main';
import AuthPage from './pages/auth';
import { w3cwebsocket as W3CWebSocket } from 'websocket';


import { PrivateRoute } from './components';
// const { store } = rootStore(initStore, () => ({}));
// const MainPage = React.lazy(() => import('./pages/main'));

function App() {
    return (
        <Router>
            <Provider key='provider' store={globalStore.store}>
                <Switch>
                    <Route exact={true} path='/login'>
                        <AuthPage />
                    </Route>
                    <React.Suspense fallback={<div>Loading</div>}>
                        <PrivateRoute exact={true} path='/'>
                            <MainPage />
                        </PrivateRoute>
                    </React.Suspense>
                    <PrivateRoute exact={true} path='/info'>
                        <MainPage />
                    </PrivateRoute>
                    {/**
                      * Redirect to page which doesn't exist
                      */}
                    <Route>
                        <AuthPage />
                    </Route>
                </Switch>
            </Provider>
        </Router>
      );
}

export default App;
