import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./contactsSlice";

const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['contacts']
};


const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store  = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);
