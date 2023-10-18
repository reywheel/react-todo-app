import { ButtonHTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';
import styles from './UiButton.module.css';

interface UiButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const UiButton = ({ children, className, ...props }: UiButtonProps) => {
  return (
    <button
      {...props}
      className={cn(styles.button, className)}
    >
      {children}
    </button>
  );
};
