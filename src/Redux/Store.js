import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import ProductDetails from './ProductDetails'; 


export type RootState = ReturnType<typeof store.getState>;

const AllProductDataPersistConfig = {
    key: 'saveAllProductData',
    storage: AsyncStorage,
};
const TOKENPersistConfig = {
    key: 'Token',
    storage: AsyncStorage,
};


const persistedSaveAllProductDataReducer = persistReducer(AllProductDataPersistConfig, ProductDetails);
const persistedTokenReducer = persistReducer(TOKENPersistConfig, ProductDetails);

const persistedRootReducer = combineReducers({
    saveAllProductData: persistedSaveAllProductDataReducer,
    Token: persistedTokenReducer,
});


export const store = configureStore({
    reducer: persistedRootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, 
        }),
});


export const persistor = persistStore(store);
