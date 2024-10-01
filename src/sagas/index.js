import { all } from "redux-saga/effects";

import {
  fetchEntityDataSaga,
  addEntityDataSaga,
  deleteEntityDataSaga,
} from "./EntitySaga";

import {
  signInSaga,
  sendOTPSaga,
  resetPasswordSaga,
  signUpSaga,
} from "./AuthSaga";

import { fetchConfigData } from "./ConfigSaga";

export default function* rootSaga() {
  yield all([
    fetchEntityDataSaga(),
    addEntityDataSaga(),
    deleteEntityDataSaga(),
    signInSaga(),
    sendOTPSaga(),
    resetPasswordSaga(),
    signUpSaga(),
    fetchConfigData(),
  ]);
}
