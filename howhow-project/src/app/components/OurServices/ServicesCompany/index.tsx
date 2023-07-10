'use client'

import { APIServicesCompany } from '@/app/services/APIOurServices';
import Image from 'next/image';


export default function ServiceCompany() {
  return (
    <section>
      <p className="bg-slate-400">ServiceCompany</p>
      <div>
        <h4>Passo a passo</h4>
        <h2>Como funciona uma campanha?</h2>
        <p>Criar e acompanhar uma campanha de marketing na nossa plataforma é fácil!</p>
      </div>
      <div>
        <section>
          <h2>Crie uma campanha</h2>
          <p>
            Pesquise, filtre e crie listas personalizadas com milhares de influenciadores e veja seus perfis, números, estatísticas, projetos anteriores, custo e outras informações para achar os perfis ideais para sua campanha.
          </p>
          <h2>Passo 01</h2>
        </section>
        <section>
          <h2>Escolha os influenciadores</h2>
          <p>
            Acesse o perfil de vários influenciadores e tenha acesso a informações detalhadas em tempo real, como preferências, números, trabalhos anteriores.
          </p>
          <h2>Passo 02</h2>
        </section>
        <section>
          <h2>Gerencie a sua campanha</h2>
          <p>
            Acompanhe o processo da sua campanha, tenha um histórico detalhado do processo de cada influenciador, se ele já aceitou a proposta, já assinou o contrato, já enviou o vídeo para revisão, acompanhe as estatísticas da campanha do começo ao fim.
          </p>
          <h2>Passo 03</h2>
        </section>
      </div>
      <div>
        {APIServicesCompany.map((serv, idx) => (
          <section key={idx}>
            <Image
              src={serv.image}
              alt={`${serv.image}`}
              priority
            />
            <div>
              <h2>{serv.title}</h2>
              <p>{serv.description}</p>
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}