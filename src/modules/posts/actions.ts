
import { createAction } from 'redux-actions';

export const POST_UPDATE = 'post/update';

export default {
    update: createAction(POST_UPDATE),
}
