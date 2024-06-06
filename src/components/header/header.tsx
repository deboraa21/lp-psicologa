import Link from 'next/link';
import styles from './header.module.scss';

export default function Header() {
  const items = [
    { label: 'Serviços', target: '' },
    { label: 'Sobre mim', target: '' },
    { label: 'Dúvidas', target: '' },
    { label: 'Público alvo', target: '' },
  ];
  return (
    <div className={styles.container}>
      <div className="my-8">
        <h3 className="text-xl font-bold text-center">Débora Soares</h3>
        <h4 className="text-lg font-light text-center">
          Psicóloga | CRP 01/27555
        </h4>
      </div>
      <div className={`mx-auto ${styles.header}`}>
        {items.map((item) => (
          <Link href={item.target}>{item.label}</Link>
        ))}
      </div>
    </div>
  );
}
