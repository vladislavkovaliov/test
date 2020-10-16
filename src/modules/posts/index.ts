import { posts } from './reducers';
import saga from './sagas';
import actions from './actions';

export default {
    reducer: posts,
    saga,
    actions,
}
