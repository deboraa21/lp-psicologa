import Header from '@/components/header/header';
import './globals.scss';
import Atendimento from '@/components/atendimento/atendimento';
import Section from '@/components/section/section';
import teste from '@/assets/teste1.png';
import Button from '@/components/UI/buttton/button';

export default function Home() {
  return (
    <div className={`flex flex-col px-2`}>
      <Header />
      <Atendimento />
      <Section
        title="Sobre Mim"
        alt="foto da psicóloga Débora Soares"
        image={teste}
        reverse
      >
        <p className="text-justify mt-6 sm:ml-10">
          Olá!
          <br /> Sou psicóloga clínica com especialização em Terapia
          Cognitivo-Comportamental. Atuo principalmente com demandas de
          ansiedade, depressão, estresse, processos de autoconhecimento,
          autoestima, problemas de relacionamento.
          <br />
          <br />
          Acredito na importância de um tratamento baseado na empatia, respeito
          e sem julgamentos, proporcionando um espaço seguro onde você se sinta
          ouvido e compreendido. Suas experiências e sentimentos serão sempre
          valorizados.
        </p>
        <br />
      </Section>
    </div>
  );
}
