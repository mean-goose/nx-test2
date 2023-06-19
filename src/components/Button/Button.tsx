import React from 'react';
import styles from './Button.module.scss';

export interface IButtonProps {
  label: string;
  variant: any;
  onClick: () => void;
}

console.log('hello');

export function Button({ label, variant, onClick }: IButtonProps) {
  return (
    <button
      type="button"
      className={`${styles[variant]} border border-4 border-danger m-4`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
