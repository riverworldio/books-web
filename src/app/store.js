import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import sagas from "../sagas";
import entityReducer from "../reducers/EntityReducer";
import authReducer from "../reducers/AuthReducer";
import configReducer from "../reducers/ConfigReducer";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        entity : entityReducer,
        auth : authReducer,
        config: configReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);
