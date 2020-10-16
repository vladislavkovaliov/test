import { all } from 'redux-saga/effects';
import posts from './posts';
import auth from './auth';

export default function* rootSaga() {
  yield all([posts.saga(), auth.saga()]);
}
