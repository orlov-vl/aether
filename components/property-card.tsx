'use client'

import Link from 'next/link'
import { Bath, BedDouble, Heart, Maximize, ArrowUpRight } from 'lucide-react'
import type { Property } from '@/lib/properties'
import { useEffect, useState } from 'react'

export function PropertyCard({ property }: { property: Property }) {
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    setSaved(window.localStorage.getItem(`saved:${property.id}`) === 'true')
  }, [property.id])

  function toggleSaved(event: React.MouseEvent) {
    event.preventDefault()
    event.stopPropagation()
    const next = !saved
    setSaved(next)
    if (next) window.localStorage.setItem(`saved:${property.id}`, 'true')
    else window.localStorage.removeItem(`saved:${property.id}`)
  }

  return (
    <article className="property-card group">
      <Link href={`/object/${property.id}`} className="block">
        <div className="property-image-wrap">
          <img src={property.image} alt={property.title} className="property-image" />
          <span className="property-badge">{property.operation}</span>
          <button type="button" aria-label={saved ? 'Quitar de favoritos' : 'Agregar a favoritos'} className={`save-button ${saved ? 'is-saved' : ''}`} onClick={toggleSaved}>
            <Heart fill={saved ? 'currentColor' : 'none'} />
          </button>
          <span className="card-arrow"><ArrowUpRight /></span>
        </div>
        <div className="property-body">
          <div className="property-price">{property.price}</div>
          <div className="property-title">{property.title}</div>
          <div className="property-address">{property.address} · {property.neighborhood}</div>
          <div className="property-meta">
            <span><BedDouble /> {property.rooms}</span>
            <span><Bath /> {property.baths}</span>
            <span><Maximize /> {property.area} m²</span>
          </div>
        </div>
      </Link>
    </article>
  )
}
