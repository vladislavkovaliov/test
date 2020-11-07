import { AuthState } from './auth/types';

export type InitStore = {
    auth: AuthState;
};

export type State = InitStore & {};
