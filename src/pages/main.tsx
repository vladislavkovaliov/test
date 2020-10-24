import React from 'react';
import { FetchButton, PostsContainer } from '../components';
import routines from '../modules/routines';

export default function MainPage(): JSX.Element {
    return <div>
        <FetchButton actionCreator={routines.posts.request} text='posts'/>
        <PostsContainer />
    </div>;
}
