import routines from '../routines';
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { initState } from './constants';
import { LoginPayload } from './types';

export const auth = createReducer(
    initState,
    (builder) => {
        builder
            .addCase(
                routines.auth.login.SUCCESS,
                (state, action: PayloadAction<LoginPayload>) => {
                    const { payload } = action;

                    return {
                        ...payload
                    };
                })
    },
);
