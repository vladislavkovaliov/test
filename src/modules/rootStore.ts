import { applyMiddleware, createStore, Middleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './rootSaga';
import posts from './posts';
import auth from './auth';
import { InitStore } from './types';

const sagaMiddleware = createSagaMiddleware();

export default (initStore: InitStore, history: any) => {
    const middlewares: Middleware<any, any, any>[] =
        [sagaMiddleware].filter(Boolean);

    const store = createStore(
        combineReducers({
            posts: posts.reducer,
            auth: auth.reducer,
        }),
        initStore,
        composeWithDevTools(applyMiddleware(...middlewares))
    );

    sagaMiddleware.run(rootSaga);

    return { store };
}
