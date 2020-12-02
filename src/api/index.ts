import axios, { AxiosInstance, AxiosPromise, AxiosResponse } from 'axios';
import config from '../config';
import { PostResponse } from '../modules/posts/types';

// class ApiBase {
//     public axios: AxiosInstance;
//     constructor(axios: AxiosInstance) {
//         console.log(axios);
//         this.axios = axios;
//     }
// }

class Base {
    axios: any;
    constructor(axios: any) {
        console.log(4);
        this.axios = axios;
    }

    getPosts(url: string = '/posts') {
        console.log(this.axios)
        // return this.axios.get<any, AxiosResponse<PostResponse>>(url);
    }
}
const post = axios.create(config.api.posts.axiosConfig)
const base = new Base(post);

export default {
    base: base,
}
