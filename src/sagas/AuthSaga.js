import { call, put, takeLatest } from "redux-saga/effects";
import {
	signInFullfiled,
	signInFailed,
	sendOTPFullfiled,
	sendOTPFailed,
	resetPasswordFullfiled,
	resetPasswordFailed,
	signUpFullfiled,
	signUpFailed,
} from "../actions/AuthActions";
import * as constants from "../constants/AuthConstants";
import { postApi } from "../api";

function* triggerSignIn(payload) {
	try {
		let auth = btoa(`${payload.username}:${payload.password}`);
		const headers = { Authorization: "Basic " + auth };
		const response = yield call(postApi, `/auth/signin`, null, headers);
		if (response && response.data?.registered === true) {
			yield put(signInFullfiled(response.data));
		} else {
			yield put(signInFailed(response?.data?.error));
		}
	} catch (e) {
		console.log("network error from catch");
		yield put(signInFailed(e));
	}
}

function* triggerSignUp(payload) {
	try {
		let auth = btoa(`${payload.username}:${payload.password}`);
		const headers = { Authorization: "Basic " + auth };
		console.log(headers);
		const response = yield call(postApi, `/auth/signup`, null, headers);
		if (response && response.data?.uuid) {
			console.log(response.data);
			yield put(signUpFullfiled(response?.data));
		} else {
			console.log(response.data);
			yield put(signUpFailed(response?.data));
		}
	} catch (e) {
		console.log(e);
		console.log(JSON.stringify(e));
		yield put(signUpFailed(e.response.data));
	}
}

function* triggerSendOTP(payload) {
	try {
		let auth = btoa(`${payload.phoneNumber}:${payload.captchaToken}`);
		const headers = { Authorization: "Basic " + auth };
		console.log(headers);
		const response = yield call(postApi, `/auth/sendOtp`, null, headers);
		if (response && response?.data && response?.data?.sessionInfo) {
			console.log(response.data.sessionInfo);
			yield put(sendOTPFullfiled(response.data.sessionInfo));
		} else {
			yield put(sendOTPFailed(response?.data));
		}
	} catch (e) {
		yield put(sendOTPFailed());
	}
}

function* triggerResetPassword(payload) {
	try {
		let auth = btoa(
			`${payload.phoneNumber}:${payload.sessionInfo}:${payload.otpCode}:${payload.password}`
		);
		const headers = { Authorization: "Basic " + auth };
		console.log(headers);
		const response = yield call(
			postApi,
			`/auth/passwordResetByOtp`,
			null,
			headers
		);
		if (response && response?.data && response?.data?.email) {
			console.log(response.data);
			yield put(
				resetPasswordFullfiled(response.data.email === payload.phoneNumber)
			);
		} else {
			console.log(response?.data);
			yield put(resetPasswordFailed(response?.data));
		}
	} catch (e) {
		console.log(e);
		console.log(JSON.stringify(e));
		yield put(resetPasswordFailed());
	}
}

export function* signInSaga() {
	yield takeLatest(constants.SIGNIN_REQUESTED, triggerSignIn);
}

export function* signUpSaga() {
	yield takeLatest(constants.SIGNUP_REQUESTED, triggerSignUp);
}

export function* sendOTPSaga() {
	yield takeLatest(constants.SENDOTP_REQUESTED, triggerSendOTP);
}

export function* resetPasswordSaga() {
	yield takeLatest(constants.RESETPASSWORD_REQUESTED, triggerResetPassword);
}