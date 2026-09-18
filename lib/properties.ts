export type Property = {
  id: string
  title: string
  price: string
  operation: 'Venta' | 'Alquiler'
  type: string
  neighborhood: string
  address: string
  image: string
  images: string[]
  rooms: number
  baths: number
  area: number
  featured?: boolean
  description: string
}

export const properties: Property[] = [
  { id: 'palermo-terrace', title: 'Terraza sobre Palermo', price: 'USD 125.000', operation: 'Venta', type: 'Departamento', neighborhood: 'Palermo', address: 'Julián Álvarez 1840', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85', images: ['https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85','https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85','https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85'], rooms: 3, baths: 2, area: 89, featured: true, description: 'Un departamento luminoso, pensado para vivir la ciudad con calma. Ambientes amplios, materiales nobles y una terraza privada que mira al arbolado de Palermo.' },
  { id: 'villa-urquiza', title: 'Casa de patio y sombra', price: 'USD 179.000', operation: 'Venta', type: 'Casa', neighborhood: 'Villa Urquiza', address: 'Valdenegro 2280', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85', images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85','https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=85'], rooms: 4, baths: 3, area: 172, description: 'Una casa de escala humana, con jardín, galería y una distribución que acompaña cada etapa.' },
  { id: 'colegiales-loft', title: 'Loft de luz natural', price: 'USD 650.000', operation: 'Alquiler', type: 'Loft', neighborhood: 'Colegiales', address: 'Conde 640', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85', images: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85','https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85'], rooms: 2, baths: 2, area: 132, featured: true, description: 'Un loft con techos altos y una atmósfera serena, en el corazón de Colegiales.' },
  { id: 'belgrano-view', title: 'Vista abierta al río', price: 'USD 270.000', operation: 'Venta', type: 'Departamento', neighborhood: 'Belgrano', address: 'Av. del Libertador 6120', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85', images: ['https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85','https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85'], rooms: 3, baths: 2, area: 96, featured: true, description: 'Una vista que cambia con la luz. Balcón corrido, detalles cuidados y una ubicación inmejorable.' },
  { id: 'chacarita-studio', title: 'Estudio entre árboles', price: 'USD 98.000', operation: 'Venta', type: 'Monoambiente', neighborhood: 'Chacarita', address: 'Av. Jorge Newbery 1680', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=85', images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=85'], rooms: 1, baths: 1, area: 42, description: 'Compacto, funcional y lleno de luz para una vida urbana más simple.' },
  { id: 'nuñez-garden', title: 'Jardín en Núñez', price: 'USD 320.000', operation: 'Venta', type: 'Casa', neighborhood: 'Núñez', address: 'Crisólogo Larralde 2400', image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=1000&q=85', images: ['https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=1600&q=85'], rooms: 4, baths: 3, area: 188, description: 'La pausa que buscabas, a metros de todo. Casa con jardín y ambientes conectados.' }
] 

export const neighborhoods = [
  { name: 'Palermo', detail: 'Parques, cafés y vida de barrio', image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=85' },
  { name: 'Belgrano', detail: 'Verde, elegante y familiar', image: 'https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=900&q=85' },
  { name: 'Colegiales', detail: 'Una escena local en movimiento', image: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&w=900&q=85' }
]

export function getProperty(id: string) { return properties.find((property) => property.id === id) }

export function formatPrice(price: string) { return price.replace('USD ', 'USD&nbsp;') }

export function whatsappLink(property?: Property) { return `https://wa.me/5491155550182?text=${encodeURIComponent(property ? `Hola, me interesa el inmueble ${property.title} (${property.id})` : 'Hola, quiero conocer más sobre sus propiedades')}` }
