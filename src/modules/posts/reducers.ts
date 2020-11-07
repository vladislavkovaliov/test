import routines from '../routines';
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { initState } from './constants';

export const posts = createReducer(
    initState,
    (builder) => {
        builder
            .addCase(
                routines.posts.SUCCESS,
                (state, action: PayloadAction<any>) => {
                    const { payload } = action;

                    return {
                        entities: payload.entities,
                        result: payload.result
                    };
                })
    },
);
