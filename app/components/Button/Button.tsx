import styles from './Button.module.css';

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  label: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export const buttonLinks = () => {
  return [
    { rel: "stylesheet", href: styles }
  ];
}

export default function Button({ type = 'button', label, variant = 'primary', onClick }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={type === 'button' ? onClick : () => { }}
      className={styles[`button-${variant}`]}
    >
      {label}
    </button>
  )
}