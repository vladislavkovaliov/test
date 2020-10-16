import { handleActions } from 'redux-actions';
import routines from '../routines';
import { PostsEntities } from '../types';
import { initStore } from '../constants';

export const posts = handleActions<PostsEntities>(
    {
        [routines.posts.SUCCESS]: (posts: PostsEntities, action: any) => {
            const { payload } = action;

            return {
                entities: payload.entities,
                result: payload.result
            };
        },
    },
    initStore.posts,
);
