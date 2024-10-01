import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  fetchEntity,
  fetchEntityFailed,
  fetchEntityFullfiled,
  addEntityFullfiled,
  addEntityFailed,
  deleteEntityFailed,
  deleteEntityFullfiled,
} from "../actions/EntityActions";
import * as constants from "../constants/EntityConstants";
import { postApi, putApi, deleteApi } from "../api";

function* fetchEntityData(payload) {
  try {
    console.log(payload)
    let queryParam = "";
    let payloadBody = {};
    if (payload?.payload !== undefined) {
      payloadBody = payload.payload;
    }
    if (payload?.queryParam === undefined) {
      queryParam = `offset=0&size=1000`;
    } else {
      queryParam = payload.queryParam;
    }
    const response = yield call(
      postApi,
      `/entity/v2/` + payload.entityName + `?` + queryParam,
      payloadBody
    );
    if (payload.overWriteEntityName) {
      payload.entityName = payload.overWriteEntityName;
    }
    if (response && response.data) {
      yield put(
        fetchEntityFullfiled({
          data: response.data,
          entityName: payload.entityName,
        })
      );
    } else {
      yield put(fetchEntityFailed(payload.entityName));
    }
  } catch (e) {
    yield put(fetchEntityFailed(payload.entityName));
  }
}

function* addEntityData(payload) {
  try {
    let response = {};
    if (payload.entityName === "member") { 
      response = yield call(
        putApi,
        `/entity/` + payload.entityName,
        payload.jsonBody,
        { "User-Entity": true }
      );
    } else {
      response = yield call(
        putApi,
        `/entity/` + payload.entityName,
        payload.jsonBody
      );
    }
    if (response && response.data) {
      yield put(addEntityFullfiled(payload.entityName));
      yield put(fetchEntity(payload.entityName));
    } else {
      yield put(addEntityFailed(payload.entityName));
    }
  } catch (e) {
    yield put(addEntityFailed(payload.entityName));
  }
}

function* deleteEntityData(payload) {
  try {
    const response = yield call(
      deleteApi,
      `/entity/` + payload.entityName + `/` + payload.entityId
    );
    if (response && response.data) {
      yield put(deleteEntityFullfiled(payload.entityName));
      yield put(fetchEntity(payload.entityName));
    } else {
      yield put(deleteEntityFailed(payload.entityName));
    }
  } catch (e) {
    yield put(deleteEntityFailed(payload.entityName));
  }
}

export function* fetchEntityDataSaga() {
  yield takeEvery(constants.FETCH_ENTITY, fetchEntityData);
}

export function* addEntityDataSaga() {
  yield takeLatest(constants.ADD_ENTITY, addEntityData);
}

export function* deleteEntityDataSaga() {
  yield takeLatest(constants.DELETE_ENTITY, deleteEntityData);
}
