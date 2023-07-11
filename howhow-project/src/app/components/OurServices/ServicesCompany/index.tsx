'use client'

import { APIServicesCompany } from '@/app/services/APIOurServices';
import Image from 'next/image';


export default function ServiceCompany() {
  return (
    <section className="serv-benefits">
      {APIServicesCompany.map((serv, idx) => (
        <div key={idx} className="serv-benefits-benefit hiddenY">
          <Image
            src={serv.image}
            alt={`${serv.image}`}
            className="serv-benefits-benefit-img"
            priority
          />
          <section className="serv-benefits-benefit-info">
            <h2>{serv.title}</h2>
            <p>{serv.description}</p>
          </section>
        </div>
      ))}
    </section>
  )
}