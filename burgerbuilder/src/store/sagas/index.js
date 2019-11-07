import { takeEvery } from 'redux-saga/effects'

import * asctionTypes from '../actions/actionTypes';
import { logoutSaga } from './auth';

function* watchAuth() {
    yield takeEvery(asctionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
}