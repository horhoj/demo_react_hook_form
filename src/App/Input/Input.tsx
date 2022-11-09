import { FC, forwardRef, InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: string;
  variant: 'primary' | 'secondary';
}

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, error, variant, ...props }, ref) => {
    return (
      <div className={styles.wrap}>
        <div className={styles.label}>{label}</div>
        <input
          className={classNames(
            styles.input,
            variant === 'primary' ? styles.primary : 'secondary',
          )}
          {...props}
          ref={ref}
        />
        {error && <div className={styles.error}>{error}</div>}
      </div>
    );
  },
);

Input.displayName = 'Input';
