import { auth } from './reducer';
import saga from './saga';
import { ISagaModule } from 'redux-dynamic-modules-saga';
import { AuthState } from './types';

export default {
    reducer: auth,
    saga,
    getAuthModule: (): ISagaModule<AuthState> => {
        return {
            id: 'auth',
            reducerMap: { auth } as any,
            sagas: [saga],
        };
    },
}
