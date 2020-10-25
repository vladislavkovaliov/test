import axios, { AxiosPromise, AxiosResponse } from 'axios';
import config from '../config';
import { PostResponse } from '../modules/posts/types';

const posts = axios.create(config.api.posts.axiosConfig);

export default {
    posts,
}

export const getPosts = async () => {
    const data = fetch('/posts');
};

export class API {
    getPosts() {
        return posts.get<any, AxiosResponse<PostResponse>>('/posts');
    }
}
