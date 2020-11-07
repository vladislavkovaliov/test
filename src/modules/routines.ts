import { createRoutine } from 'redux-saga-routines';

import { LoginPayload } from './auth/types';

export default {
    auth: {
        login: createRoutine<LoginPayload>('auth/login'),
        register: createRoutine('auth/register'),
    },
    posts: createRoutine('posts'),
};
