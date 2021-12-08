import {createSlice} from '@reduxjs/toolkit';
import {actions} from './actions';

const initialState: {
  events: string[];
} = {
  events: [],
};

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    registerEvent: (state, action) =>
      actions.registerEvent(state, action.payload),
  },
});

export const {registerEvent} = eventSlice.actions;

export default eventSlice.reducer;
