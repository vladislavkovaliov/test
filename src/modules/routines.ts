import { createRoutine } from 'redux-saga-routines';

export default {
    auth: {
        login: createRoutine('auth/login'),
        register: createRoutine('auth/register'),
    },
    posts: createRoutine('posts'),
};
