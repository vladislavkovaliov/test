import React from 'react';
import { useSelector } from 'react-redux';
import { selectPosts } from '../../modules/posts/selectors';
import { pathOr, cond, isEmpty, T, map, compose } from 'ramda';
import { State, Post, Author } from '../../modules/types';

const EmptyPosts = ({ text }: { text: string }) => <div>{text}</div>;

export type PostsProps = (Omit<Post, 'author'> & { author: Author })[];
export const getAuthorFirstNameFromPost = compose(
    pathOr('No name', ['author', 'firstName'])
);

export function Posts(): JSX.Element {
    const posts = useSelector<State, Post[]>(selectPosts);
    const render = cond([
        [isEmpty, () => <EmptyPosts text='No posts.' />],
        [T, map((p: Post) =>
            (<div key={p.id}>{getAuthorFirstNameFromPost(p)}</div>))]
    ]);

    return <div>{render(posts)}</div>;
}
