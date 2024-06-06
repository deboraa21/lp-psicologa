import styles from './section.module.scss';
import { ReactNode } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface Props {
  reverse?: boolean;
  image: StaticImageData;
  alt: string;
  children?: ReactNode;
  title: string;
}

export default function Section({
  reverse,
  image,
  children,
  alt,
  title,
}: Props) {
  return (
    <>
      <h3 className="text-center text-2xl mb-8 font-light mt-40">{title}</h3>
      <div
        className={`flex self-center flex-col    ${styles.container} ${
          reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'
        } `}
      >
        <div className={styles.text}>{children}</div>

        <Image
          className={`rounded-3xl ${styles.image}`}
          src={image}
          alt={alt}
        />
      </div>
    </>
  );
}
