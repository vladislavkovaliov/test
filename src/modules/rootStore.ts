import auth from './auth';
import { InitStore } from './types';

import { createStore, IModuleStore } from 'redux-dynamic-modules';
import { getSagaExtension } from 'redux-dynamic-modules-saga';

export default (initStore: InitStore, history: any) => {
    const store: IModuleStore<any> = createStore(
        {
            initialState: initStore,
            extensions: [getSagaExtension()]
        },
        auth.getAuthModule(),
    );

    return { store };
}
