import styles from './button.module.scss';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  onClick?: () => void;
}

export default function Button({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} mt-6 px-8 py-3 text-2xl font-semibold`}
    >
      {children}
    </button>
  );
}
