import { useForm, FieldErrors } from 'react-hook-form';

interface LoginForm {
  username: string;
  email: string;
  password: string;
  errors?: string;
}

export default function Froms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginForm>({
    mode: 'onChange',
  });

  const onValid = (data: LoginForm) => {
    setError('errors', { message: 'Backend is offline' });
  };

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
          validate: {
            notGmail: (value) =>
              !value.includes('@gmail.com') || 'Gmail is not allowed',
          },
        })}
        type="email"
        placeholder="email"
      />
      <span>{errors.email?.message}</span>
      <input
        {...register('password', {
          required: 'password is requried',
        })}
        type="password"
        placeholder="password"
      />
      <input type="submit" value="create account" />
      <span>{errors.errors?.message}</span>
    </form>
  );
}
