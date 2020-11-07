import auth from './auth';
import { InitStore } from './types';
import { initStore } from './constants'


import { createStore, IModuleStore } from 'redux-dynamic-modules';
import { getSagaExtension } from 'redux-dynamic-modules-saga';

import { initBacon } from '../ws';

export const createGlobalStroe = (initStore: InitStore, history: any) => {
    const store: IModuleStore<any> = createStore(
        {
            initialState: initStore,
            extensions: [getSagaExtension()]
        },
        auth.getAuthModule(),
    );

    return { store };
}

export const globalStore = createGlobalStroe(initStore, () => ({}));

export const webSocketBus = initBacon();

webSocketBus.onValue((payload) => {
    const { label, data } = payload;
    globalStore.store.dispatch({
        type: `ws/${label}`,
        payload: { ...data },
    });
});

webSocketBus.onError();
