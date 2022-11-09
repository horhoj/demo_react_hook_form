import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './App.module.scss';
import { Input } from './Input';

interface LoginFormData {
  password: string;
  name: string;
}

export const App: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();
  const onSubmit = (data: LoginFormData) => {
    const msg = JSON.stringify(data, null, 2);
    alert(`submit: ${msg}`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.wrap}
      autoComplete={'OFF'}
    >
      <Input
        label={'Имя'}
        type="text"
        placeholder="имя"
        {...register('name', {
          required: true,
          minLength: 2,
          maxLength: 30,
        })}
        error={String(errors?.name?.type ?? '')}
      />
      <Input
        label={'Пароль'}
        type="password"
        placeholder="password"
        {...register('password', {
          required: true,
          minLength: 6,
          maxLength: 8,
        })}
        error={String(errors?.password?.type ?? '')}
      />

      <button type="submit"> submit</button>
    </form>
  );
};
