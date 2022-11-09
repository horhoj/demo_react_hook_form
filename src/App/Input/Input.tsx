import classNames from 'classnames';
import { FC, forwardRef, InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: string;
}

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, error, ...props }, ref) => {
    return (
      <div className={styles.wrap}>
        <div className={styles.label}>{label}</div>
        <input
          className={classNames(styles.input, className)}
          {...props}
          ref={ref}
        />
        {error && <div className={styles.error}>{error}</div>}
      </div>
    );
  },
);

Input.displayName = 'Input';
