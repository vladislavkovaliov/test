import React from 'react';

import { Posts, PostsProps } from './Posts';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
    title: 'Example/Posts',
    component: Posts,
} as Meta;

const Template: Story<PostsProps> = (args) => <Posts {...args} />;

export const Default = Template.bind({});
Default.args = {
    posts: [
        {
            id: 1,
            author: {
                id: 1,
                firstName: 'author 1',
            },
            likes: [
                {
                    id: 1,
                    author: {
                        id: 2,
                        firstName: 'like\'s author'
                    }
                }
            ]
        }
    ],
};
