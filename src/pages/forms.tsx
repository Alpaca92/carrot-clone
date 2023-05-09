import { useForm } from 'react-hook-form';

export default function Froms() {
  const { register } = useForm();

  return (
    <form>
      <input
        {...register('username')}
        type="text"
        placeholder="username"
        required
      />
      <input {...register('email')} type="email" placeholder="email" required />
      <input
        {...register('password')}
        type="password"
        placeholder="password"
        required
      />
      <input type="submit" value="create account" />
    </form>
  );
}
