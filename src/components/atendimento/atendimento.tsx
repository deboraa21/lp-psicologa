import Button from '../UI/buttton/button';
import styles from './atendimento.module.scss';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Atendimento({ children, onClick }: Props) {
  return (
    <div className={`mt-40 ${styles.container}`}>
      <h2 className={`text-center text-3xl font-semibold`}>
        Atendimento online 😉
      </h2>
      <p className={`text-center mt-6`}>
        Aprenda a lidar melhor com as suas emoções e <br />
        torne cada passo da vida mais leve. Ofereço espaço de acolhimento e
        <br />
        suporte profissional para te ajudar a viver uma vida mais equilibrada.
        <br />
        <strong>Agende já seu atendimento.</strong>
      </p>
      <Button>Marcar horário</Button>
    </div>
  );
}
