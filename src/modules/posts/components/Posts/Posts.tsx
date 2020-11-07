import React from 'react';
import { useSelector } from 'react-redux';
import { selectPosts } from '../../selectors';
import { pathOr, cond, isEmpty, T, compose } from 'ramda';
import { Post, Author, PostsState } from '../../types';

const EmptyPosts = ({ text }: { text: string }) => <div>{text}</div>;

export type PostsProps = {
    posts: (Omit<Post, 'author'> & { author: Author })[],
};
export const getAuthorFirstNameFromPost = compose(
    pathOr('No name', ['author', 'firstName'])
);

export function Posts({ posts }: PostsProps): JSX.Element {
    return <>
        {posts.map((p: Post) =>
            (<div key={p.id}>{getAuthorFirstNameFromPost(p)}</div>))}
        </>;
}

export function PostsContainer(): JSX.Element {
    const posts = useSelector<PostsState, Post[]>(selectPosts);
    const render = cond([
        [isEmpty, () => <EmptyPosts text='No posts.' />],
        [T, (posts) => <Posts posts={posts} />]
    ]);

    return <div>{render(posts)}</div>;
}
