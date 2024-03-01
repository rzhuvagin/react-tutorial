import { User } from '../user.model';
import styles from './userItem.module.css';

export default function UserItem({ user }: { user: User }) {
  return (
    <div className={styles.userItem}>
      <div className={styles.userItem__name}>{user.name}</div>
      <div>{user.email}</div>
      <div>{user.phone}</div>
    </div>
  );
}
