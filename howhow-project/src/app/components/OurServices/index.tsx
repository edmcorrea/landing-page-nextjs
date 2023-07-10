'use client'

import { useState } from "react";
import ServiceCompany from "./ServicesCompany";
import ServiceInfluencer from "./ServicesInfluencer";

export default function OurServices() {
  const [company, setCompany] = useState(true);
  
  return (
    <section id="services">
      <p className="bg-slate-400">ourservices</p>
      <button
        className="profile-edit-btn"
        type="button"
        onClick={() => setCompany(true)}
      >
        Vantagens para Empresas
      </button>
      <button
        className="profile-edit-btn"
        type="button"
        onClick={() => setCompany(false)}
      >
        Vantagens para Influenciador
      </button>
      { company 
        ? <ServiceCompany />
        : <ServiceInfluencer />
      }
    </section>
  )
}