import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import createDebugger from 'redux-flipper';

import startup from './Startup';
import user from './User';

const reducers = combineReducers({
  startup,
  user,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {},
    }),
});

export { store };
