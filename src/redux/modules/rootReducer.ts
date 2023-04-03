import { combineReducers } from '@reduxjs/toolkit';
import store from '..';
import characterSlice from './characters/characterSlice';

const rootReducer = combineReducers({
    character: characterSlice,
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default rootReducer;
