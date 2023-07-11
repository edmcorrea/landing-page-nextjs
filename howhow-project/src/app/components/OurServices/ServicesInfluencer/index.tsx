'use client'

import { APIServicesInfluencer } from "@/app/services/APIOurServices"
import Image from "next/image";
// import '../OurServices.scss';


export default function ServiceInfluencer() {
  return (
    <section className="serv-benefits">
      {APIServicesInfluencer.map((serv, idx) => (
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