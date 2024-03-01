import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from './user.model';

export const getUsersAction = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return await response.json();
});

export const createUserAction = createAsyncThunk(
  'users/createUser',
  async (data: Partial<User>) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return await response.json();
  }
);
