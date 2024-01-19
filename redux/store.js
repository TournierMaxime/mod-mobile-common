import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'

const createBaseStore = (reducers) => {
  const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }).concat(thunkMiddleware),
  });

  return store;
};

export default createBaseStore;
