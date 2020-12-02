import { put, takeLatest, call } from 'redux-saga/effects';
import { normalize } from 'normalizr';

import routines from '../routines';
import * as schema from '../schema';
import { pathOr } from 'ramda';

import api from '../../api';

export function* handleRequest() {
    const posts = [
        {
            id: '1',
            author: {
                id: '1',
                firstName: 'Alice',
            },
            likes: [
                {
                    id: '1',
                    author: {
                        id: '2',
                        firstName: 'Bob',
                    }
                }
            ],
        },
        {
            id: '2',
            likes: [
                {
                    id: '3',
                    author: {
                        id: '1',
                    }
                }
            ],
        }
    ];
    console.log(api.base);
    const posts2 = yield call(api.base.getPosts, '');
    
    const normalizedData = normalize({ posts }, schema.posts);
    const entities = pathOr({}, ['entities', 'posts'], normalizedData);
    const result = pathOr([], ['result', 'posts'], normalizedData);

    yield put(routines.posts.success({ entities, result }));
}

export default function* saga() {
    yield takeLatest(routines.posts.REQUEST, handleRequest);
}
