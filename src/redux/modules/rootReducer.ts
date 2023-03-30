import { combineReducers } from '@reduxjs/toolkit';
import store from '..';

const rootReducer = combineReducers({})

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default rootReducer;
