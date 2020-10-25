import { path, isEmpty } from 'ramda';
import { State } from '../types';
import { PostId, Post, PostsEntities, PostsState } from './types';
import { denormalize } from 'normalizr';
import * as schema from '../schema';
import { createSelector } from 'reselect';

const posts = (state: PostsState) => state.posts;

export const selectPosts = createSelector<PostsState, PostsEntities, Post[]>(
    posts,
    (posts) => {
        const { entities, result } = posts;
        if (isEmpty(entities) || isEmpty(result)) return [];
        const denormalizedData: { posts: Post[] } = denormalize(
            { posts: posts.result },
            schema.posts,
            { posts: posts.entities }
        );

        return denormalizedData.posts;
    },
);

export const selectPostById = (state: State, id: PostId) =>
    path(['posts', id], state);

