'use client'

import { APIServicesInfluencer } from "@/app/services/APIOurServices"
import Image from "next/image"

export default function ServiceInfluencer() {
  return (
    <section>
      <p className="bg-slate-400">ServiceInfluencer</p>
      <div>
      {APIServicesInfluencer.map((serv, idx) => (
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