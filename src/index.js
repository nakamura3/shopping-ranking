import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import App from './App';

const shoppingSlice = createSlice({
  name: 'shopping',
  initialState: {},
  reducers: {
    noop: state => state
  }
});
export const { noop } = shoppingSlice.actions;

const store = configureStore({
  reducer: {
    shopping: shoppingSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
