import Image from "next/image";

export default function Carrousel() {
  const brands = ['aliexpress', 'epic', 'freefire', 'hbo', 'jbl', 'bytedance', 'meliuz', 'mondial', 'netflix', 'ontex', 'oreo', 'paramont', 'picpay', 'playstation', 'tiktok', 'universal'];

  return (
    <section className="carrousel">
      {brands.map((brand) => (
        <Image
          className="carrousel-image"
          key={brand}
          src={`https://www.howhow.com.br/brands/${brand}.svg`}
          alt={brand}
          width={150}
          height={24}
          priority
        />
      ))}
    </section>
  )
}