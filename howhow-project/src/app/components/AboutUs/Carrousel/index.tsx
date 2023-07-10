import Image from "next/image";

export default function Carrousel() {
  const brands = ['aliexpress', 'epic', 'freefire', 'hbo', 'jbl', 'bytedance', 'meliuz', 'mondial', 'netflix', 'ontex', 'oreo', 'paramont', 'picpay', 'playstation', 'tiktok', 'universal'];

  return (
    <section>
      {brands.map((brand) => (
        <Image
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