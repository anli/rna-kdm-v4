import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {showdownSlice} from '@showdown';
import {combineEpics, createEpicMiddleware} from 'redux-observable';

const epicMiddleware = createEpicMiddleware();
const epics: any[] = [];

const rootEpic = (action$: any) => combineEpics(...epics)(action$).pipe();

const getStore = () => {
  const store = configureStore({
    reducer: {showdown: showdownSlice.reducer},
    middleware: [...getDefaultMiddleware(), epicMiddleware],
  });

  epicMiddleware.run(rootEpic);
  return store;
};

const store = getStore();

export default store;

export type RootState = ReturnType<typeof store.getState>;
