'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Filter, Heart, Search, SlidersHorizontal } from 'lucide-react'
import { PropertyCard } from '@/components/property-card'
import { properties } from '@/lib/properties'

export default function CatalogPage() {
  const [operation, setOperation] = useState('Todas')
  const [neighborhood, setNeighborhood] = useState('Todos los barrios')
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => properties.filter((property) => (operation === 'Todas' || property.operation === operation) && (neighborhood === 'Todos los barrios' || property.neighborhood === neighborhood) && `${property.title} ${property.address} ${property.neighborhood}`.toLowerCase().includes(query.toLowerCase())), [operation, neighborhood, query])
  return <main><header className="site-header"><Link href="/" className="brand"><span className="brand-mark">GB</span><span>García Baillos<small>Propiedades</small></span></Link><nav className="desktop-nav"><Link href="/catalog">Comprar</Link><Link href="/catalog">Alquilar</Link><Link href="/#barrios">Barrios</Link><Link href="/#estudio">El estudio</Link></nav><Link href="/" className="header-contact"><ArrowLeft /> Volver al inicio</Link></header><section className="catalog-hero section-shell"><div className="section-kicker">Propiedades seleccionadas</div><h1>Encontrá tu<br /><em>próximo lugar.</em></h1><p>Una selección curada de casas, departamentos y espacios con algo especial.</p></section><section className="catalog-section section-shell"><div className="filter-bar"><div className="filter-label"><SlidersHorizontal /> Filtrar por</div><select value={operation} onChange={(e) => setOperation(e.target.value)} aria-label="Operación"><option>Todas</option><option>Venta</option><option>Alquiler</option></select><select value={neighborhood} onChange={(e) => setNeighborhood(e.target.value)} aria-label="Barrio"><option>Todos los barrios</option>{Array.from(new Set(properties.map((p) => p.neighborhood))).map((name) => <option key={name}>{name}</option>)}</select><label className="catalog-search"><Search /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar por zona o dirección" /></label><span className="catalog-count">{filtered.length} resultados</span></div><div className="catalog-toolbar"><span>Mostrando propiedades disponibles</span><button type="button">Más recientes <ArrowUpRight /></button></div><div className="catalog-grid">{filtered.map((property) => <PropertyCard property={property} key={property.id} />)}</div>{filtered.length === 0 && <div className="empty-catalog"><Heart /><h2>No encontramos ese lugar todavía.</h2><p>Probá con otro barrio o palabra clave.</p></div>}</section></main>
}
