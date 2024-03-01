import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './newUser.module.css';
import { useAppDispatch } from '../../hooks';
import { createUserAction } from '../users.actions';

interface UserForm {
  name: string;
  phone: string;
  email: string;
}

export default function NewUser() {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserForm>({
    defaultValues: {},
  });

  const createUser: SubmitHandler<UserForm> = (data) => {
    dispatch(createUserAction(data));
  };

  return (
    <form
      onSubmit={handleSubmit(createUser)}
      className={styles.newUser}
      noValidate={true}
    >
      <h2>Create new user</h2>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        className={errors.name && styles.invalid}
        {...register('name', { required: true, minLength: 4 })}
      />
      <label htmlFor="phone">Phone</label>
      <input
        id="phone"
        type="tel"
        className={errors.phone && styles.invalid}
        {...register('phone', { required: true, pattern: /^\+\d{11}$/ })}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        className={errors.email && styles.invalid}
        {...register('email', {
          required: true,
          pattern: /^\S+@\S+\.\w{2,3}$/,
        })}
      />
      <button>Create</button>
    </form>
  );
}
