import { useForm, FieldErrors } from 'react-hook-form';

interface LoginForm {
  username: string;
  email: string;
  password: string;
}

export default function Froms() {
  const { register, handleSubmit } = useForm<LoginForm>();

  const onValid = (data: LoginForm) => {};

  const onInvalid = (errors: FieldErrors) => {};

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register('username', {
          required: 'username is requried',
          minLength: {
            value: 5,
            message: 'The username should be longer than 5 characters',
          },
        })}
        type="text"
        placeholder="username"
      />
      <input
        {...register('email', {
          required: 'email is requried',
        })}
        type="email"
        placeholder="email"
      />
      <input
        {...register('password', {
          required: 'password is requried',
        })}
        type="password"
        placeholder="password"
      />
      <input type="submit" value="create account" />
    </form>
  );
}
