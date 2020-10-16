import { handleActions } from 'redux-actions';
import routines from '../routines';
import { initStore } from '../constants';
import { Auth } from '../types';

export const auth = handleActions<Auth>(
    {
        [routines.auth.login.SUCCESS]: (auth: Auth, action: any) => {
            const { payload } = action;

            return {
                ...payload,
            };
        },
    },
    initStore.auth,
);
