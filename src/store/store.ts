import AsyncStorage from '@react-native-community/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {showdownSlice} from '@showdown';
import {combineReducers} from 'redux';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import {persistReducer, persistStore} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const epics: any[] = [];
const rootEpic = (action$: any) => combineEpics(...epics)(action$).pipe();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};
const rootReducer = combineReducers({showdown: showdownSlice.reducer});
const persistedReducer = persistReducer<any>(persistConfig, rootReducer);

const getPersisted = () => {
  const epicMiddleware = createEpicMiddleware();
  const store = configureStore({
    reducer: persistedReducer,
    middleware: [epicMiddleware],
  });

  const persistor = persistStore(store);

  epicMiddleware.run(rootEpic);
  return {store, persistor};
};

export const persisted = getPersisted();

export const store = persisted.store;

export type RootState = ReturnType<typeof store.getState>;
