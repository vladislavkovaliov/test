import { takeLatest, put } from 'redux-saga/effects';
import routines from '../routines';

export function* handleLogin() {
    yield put(routines.auth.login.success({
        isAuthenticated: true,
    }));
}

export default function* saga() {
    yield takeLatest(routines.auth.login.REQUEST, handleLogin);
}
