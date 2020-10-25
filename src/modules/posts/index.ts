import { posts } from './reducers';
import saga from './sagas';
import actions from './actions';
import { ISagaModule } from 'redux-dynamic-modules-saga';
import { PostsEntities } from './types';

export default {
    reducer: posts,
    saga,
    actions,
    getModule: (): ISagaModule<PostsEntities> => {
        return {
            id: 'posts',
            reducerMap: {
                posts
            } as any,
            sagas: [saga]
        }
    }
}
