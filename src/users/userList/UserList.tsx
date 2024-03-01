import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getLoading, getUsers } from '../users.selectors';
import { getUsersAction } from '../users.actions';
import UserItem from '../userItem/UserItem';
import styles from './userList.module.css';

export default function UserList() {
  const users = useAppSelector(getUsers);
  const isLoading = useAppSelector(getLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsersAction());
  }, [dispatch]);

  return (
    <div>
      <h1>Users</h1>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <div className={styles.userList}>
          {users.map((user) => (
            <UserItem user={user} key={user.id}></UserItem>
          ))}
        </div>
      )}
    </div>
  );
}
