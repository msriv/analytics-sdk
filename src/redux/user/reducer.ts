import {createSlice} from '@reduxjs/toolkit';
import {actions} from './actions';

const initialState: {
  email: string;
  username: string;
  isAuth: boolean;
  apiKey: string;
} = {
  email: '',
  username: '',
  isAuth: false,
  apiKey: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userCreated: (state, action) => actions.userCreated(action.payload),
  },
});

export const {userCreated} = userSlice.actions;

export default userSlice.reducer;
