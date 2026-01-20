import { configureStore } from '@reduxjs/toolkit';
import reducer from './rootReducer';

export function newStore({ preloadedState = {} } = {}) {
    return configureStore({
        reducer,
        preloadedState,
    });
}

export default newStore();
