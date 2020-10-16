import { path, isEmpty } from 'ramda';
import { PostId, State, Post, PostsEntities } from '../types';
import { denormalize } from 'normalizr';
import * as schema from '../schema';
import { createSelector } from 'reselect';

const posts = (state: State) => state.posts;

export const selectPosts = createSelector<State, PostsEntities, Post[]>(
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

