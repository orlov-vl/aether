'use client'

import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Mail, Menu, Phone, Search, Sparkles, Star } from 'lucide-react'
import { PropertyCard } from '@/components/property-card'
import { neighborhoods, properties, whatsappLink } from '@/lib/properties'

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <Link href="/" className="brand"><span className="brand-mark">GB</span><span>García Baillos<small>Propiedades</small></span></Link>
        <nav className="desktop-nav"><Link href="/catalog">Comprar</Link><Link href="/catalog">Alquilar</Link><Link href="#barrios">Barrios</Link><Link href="#estudio">El estudio</Link></nav>
        <div className="header-actions"><Link href="/catalog" className="header-search"><Search /> Buscar propiedad</Link><Link href={whatsappLink()} target="_blank" className="header-contact">Hablemos <ArrowUpRight /></Link><button className="menu-button" aria-label="Abrir menú"><Menu /></button></div>
      </header>

      <section className="hero">
        <div className="hero-copy"><div className="eyebrow light">Inmobiliaria de autor · Buenos Aires</div><h1>Hogares<br /><em>reales.</em></h1><p>Encontramos lugares con historia para las vidas que están por empezar.</p><div className="hero-actions"><Link href="/catalog" className="button button-light">Quiero comprar <ArrowRight /></Link><Link href={whatsappLink()} target="_blank" className="button button-ghost-light">Quiero vender <ArrowRight /></Link></div></div>
        <div className="hero-image"><img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90" alt="Interior luminoso de una casa" /><div className="hero-note"><span>01 / 04</span><span>Una mirada humana<br />sobre cada espacio</span></div></div>
        <div className="hero-stamp">Desde 1994 <span>Buenos Aires</span></div>
      </section>

      <section id="estudio" className="intro section-shell"><div className="section-kicker">Sobre García Baillos</div><div className="intro-grid"><div><h2>Tu barrio,<br /><em>nuestra casa.</em></h2></div><div className="intro-copy"><p className="lead">Somos una inmobiliaria local con una mirada profesional y humana.</p><p>Te acompañamos con criterio, escucha y conocimiento real del mercado. Porque vender o encontrar una casa es mucho más que una operación.</p><Link href="#contacto" className="text-link">Conocé nuestro enfoque <ArrowRight /></Link></div></div><div className="stats"><div><strong>30<sup>+</sup></strong><span>Años en el mercado</span></div><div><strong>2.400</strong><span>Historias acompañadas</span></div><div><strong>4.9<sup>/5</sup></strong><span>Experiencia de clientes</span></div><div className="stat-mark"><Sparkles /></div></div></section>

      <section className="featured-section section-shell"><div className="section-heading"><div><div className="section-kicker">Selección de la semana</div><h2>Oportunidades<br /><em>en nuestros barrios</em></h2></div><Link href="/catalog" className="round-link">Ver todas <ArrowUpRight /></Link></div><div className="property-grid">{properties.filter((property) => property.featured).map((property) => <PropertyCard key={property.id} property={property} />)}</div></section>

      <section id="barrios" className="neighborhoods-section"><div className="section-shell"><div className="section-heading"><div><div className="section-kicker">Buenos Aires, de cerca</div><h2>La vida que te gusta,<br /><em>más cerca.</em></h2></div><p className="heading-note">Explorá los barrios que conocemos<br />como si fueran propios.</p></div><div className="neighborhood-grid">{neighborhoods.map((neighborhood, index) => <Link href="/catalog" className={`neighborhood-card neighborhood-${index + 1}`} key={neighborhood.name}><img src={neighborhood.image} alt={neighborhood.name} /><div><span>0{index + 1}</span><h3>{neighborhood.name}</h3><p>{neighborhood.detail}</p></div><ArrowUpRight /></Link>)}</div></div></section>

      <section id="contacto" className="contact-section"><div className="contact-shell"><div><div className="section-kicker light">Hablemos</div><h2>Encontrar un hogar<br /><em>empieza por una charla.</em></h2></div><div className="contact-side"><p>Contanos qué estás buscando. Estamos para escucharte, orientarte y ayudarte a dar el próximo paso.</p><Link href={whatsappLink()} target="_blank" className="button button-light">Escribir por WhatsApp <ArrowUpRight /></Link></div></div><div className="footer-row"><span>© 2024 García Baillos Propiedades</span><span>Palermo · Belgrano · Colegiales</span><div><Link href="mailto:hola@garciabaillos.com"><Mail /></Link><Link href="https://instagram.com" target="_blank"><Star /></Link><Link href="tel:+5491155550182"><Phone /></Link></div></div></section>
    </main>
  )
}
