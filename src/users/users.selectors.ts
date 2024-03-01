import { RootState } from '../store';

export const getUsersState = (state: RootState) => state.users;
export const getUsers = (state: RootState) => state.users.users;
export const getLoading = (state: RootState) => state.users.loading;
