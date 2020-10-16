import { Auth, State } from '../types';
import { createSelector } from 'reselect';
import { pathOr } from 'ramda';

export const auth = (state: State) => state.auth;

export const selectAuthenticated = createSelector<State, Auth, boolean>(
    auth,
    (auth) =>
        pathOr(false, ['isAuthenticated'], auth)
);
