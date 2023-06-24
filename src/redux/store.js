import { combineReducers, createStore } from 'redux';

import { appReducer } from './reducers/reducers';


let store;
const initStore = (initialStore) => {
    store = initialStore;
};

const reducers = combineReducers({
    appData: appReducer,
});

export const makeStore = () => {
    const { persistStore, persistReducer } = require('redux-persist');
    const storage = require('redux-persist/lib/storage').default;


    const persistConfig = {
        key: 'reactjs',
        whitelist: ['appData'],
        storage,
    };

    const persistedReducer = persistReducer(persistConfig, reducers);

    const store = createStore(persistedReducer);
    store.__persistor = persistStore(store);
    initStore(store);
    return store;
};
