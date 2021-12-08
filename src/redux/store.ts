import {configureStore} from '@reduxjs/toolkit';
import userReducer from './user/reducer';
import eventReducer from './event/reducer';

const store = configureStore({
  reducer: {user: userReducer, event: eventReducer},
});

export default store;
