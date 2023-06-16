import styles from './Button.module.scss';

export interface IButtonProps {
  label: string;
  variant: any;
  onClick: () => void;
}

export function Button({ label, variant, onClick }: IButtonProps) {
  return (
    <button
      className={`${styles[variant]} border border-4 border-danger m-4`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
