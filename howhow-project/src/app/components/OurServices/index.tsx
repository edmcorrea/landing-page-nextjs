'use client'

import { useState } from "react";
import ServiceCompany from "./ServicesCompany";
// import { useGlobalContext } from '../../services/Context-API';
import ServiceInfluencer from "./ServicesInfluencer";
import './OurServices.scss';

export default function OurServices() {
  // const { company, setCompany } = useGlobalContext();
  const [company, setCompany] = useState(true);
  
  return (
    <section id="services" className="services">
      <div className="services-container">
        <section className="services-container-introduc">
          <div className="services-container-introduc-elements">
            <h5 className="hiddenX">Passo a passo</h5>
            <h2 className="hiddenX">Como funciona uma campanha?</h2>
            <p className="hiddenY">Criar e acompanhar uma campanha de marketing na nossa plataforma é fácil!</p>
          </div>
        </section>
        <section className="services-container-steps">
          <div className="services-container-steps-step hiddenY">
            <h5>Passo 01</h5>
            <section className="services-container-steps-step-info">
            <h2>Crie uma campanha</h2>
            <p>
              Pesquise, filtre e crie listas personalizadas com milhares de influenciadores e veja seus perfis, números, estatísticas, projetos anteriores, custo e outras informações para achar os perfis ideais para sua campanha.
            </p>
            </section>
          </div>
          <div className="services-container-steps-step hiddenY">
              <h5>Passo 02</h5>
              <section className="services-container-steps-step-info">
                <h2>Escolha os influenciadores</h2>
                <p>
                  Acesse o perfil de vários influenciadores e tenha acesso a informações detalhadas em tempo real, como preferências, números, trabalhos anteriores.
                </p>
              </section>
          </div>
          <div className="services-container-steps-step hiddenY">
            <h5>Passo 03</h5>
            <section className="services-container-steps-step-info">
              <h2>Gerencie a sua campanha</h2>
              <p>
                Acompanhe o processo da sua campanha, tenha um histórico detalhado do processo de cada influenciador, se ele já aceitou a proposta, já assinou o contrato, já enviou o vídeo para revisão, acompanhe as estatísticas da campanha do começo ao fim.
              </p>
            </section>
          </div>
        </section>
      </div>
      <div className="services-btns">
        <button
          className={`services-btns-btn${company?'-selected':''}`}
          type="button"
          onClick={() => setCompany(true)}
        >
          Vantagens para Empresas
        </button>
        <button
          className={`services-btns-btn${!company?'-selected':''}`}
          type="button"
          onClick={() => setCompany(false)}
        >
          Vantagens para Influenciadores
        </button>
      </div>
      { company 
        ? <ServiceCompany />
        : <ServiceInfluencer />
      }
    </section>
  )
}