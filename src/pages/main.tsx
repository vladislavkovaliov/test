import React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { FetchButton } from '../components';
import { PostsContainer } from '../modules/posts/components';
import routines from '../modules/routines';
import posts from '../modules/posts'

export default function MainPage(): JSX.Element {
    return (
        <DynamicModuleLoader modules={[posts.getModule()]}>
            <FetchButton actionCreator={routines.posts.request} text='posts'/>
            <PostsContainer />
        </DynamicModuleLoader>
    );
}
