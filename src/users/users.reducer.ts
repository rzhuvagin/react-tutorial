import { createSlice } from '@reduxjs/toolkit';
import { User } from './user.model';
import { createUserAction, getUsersAction } from './users.actions';

export interface UserState {
  users: User[];
  loading: boolean;
}

const initialState: UserState = {
  users: [],
  loading: false,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsersAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUsersAction.rejected, (state) => {
      state.users = [];
      state.loading = false;
    });
    builder.addCase(getUsersAction.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
    });
    builder.addCase(createUserAction.fulfilled, (state, action) => {
      state.users = [...state.users, action.payload];
    });
  },
});

export default userSlice.reducer;
