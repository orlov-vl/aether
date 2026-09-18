'use client'

import Link from 'next/link'
import { ArrowDown, ArrowUpRight, Mail, Menu, Phone, Sparkles, Star } from 'lucide-react'
import { PropertyCard } from '@/components/property-card'
import { neighborhoods, properties, whatsappLink } from '@/lib/properties'

export default function HomePage() {
  return (
    <main className="home-page">
      <header className="site-header">
        <Link className="brand" href="/"><span className="brand-mark">GB</span><span>GARCÍA BAILLOS<small>PROPIEDADES</small></span></Link>
        <nav><Link href="/catalog">Propiedades</Link><Link href="#nosotros">Nosotros</Link><Link href="#barrios">Barrios</Link></nav>
        <a className="header-contact" href={whatsappLink()}>Hablemos <ArrowUpRight /></a><button className="menu-button" aria-label="Abrir menú"><Menu /></button>
      </header>

      <section className="hero home-hero">
        <div className="hero-copy"><p className="eyebrow">INMOBILIARIA DE AUTOR · BUENOS AIRES</p><h1>Hogares<br /><em>reales.</em></h1><p className="hero-intro">Encontramos lugares con historia para las formas de vivir de hoy.</p><div className="hero-actions"><Link className="button button-light" href="/catalog">Ver propiedades <ArrowUpRight /></Link><a className="text-link" href={whatsappLink()}>Quiero vender <ArrowUpRight /></a></div></div>
        <div className="hero-image"><img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=90" alt="Interior contemporáneo en Buenos Aires" /><div className="hero-stamp">DESDE 1994<br /><span>BUENOS AIRES</span></div><div className="hero-caption">PALERMO · 01/06 <span>© GB ARCHIVE</span></div></div><div className="scroll-cue"><ArrowDown /> SCROLL TO EXPLORE</div>
      </section>

      <section id="nosotros" className="intro home-intro"><div className="section-number">01 / FILOSOFÍA</div><div className="intro-grid"><div><p className="eyebrow">UNA MIRADA LOCAL</p><h2>Lo que hace<br /><em>hogar</em> a un lugar.</h2></div><div className="intro-copy"><p className="lead">No mostramos propiedades. <em>Encontramos el lugar donde empieza una historia.</em></p><p>Somos una inmobiliaria independiente, cercana y obsesionada con los detalles. Conocemos cada esquina porque también vivimos esta ciudad.</p><Link className="text-link dark-link" href="/catalog">Conocé nuestra mirada <ArrowUpRight /></Link></div></div><div className="stats"><div><strong>30<sup>+</sup></strong><span>Años en el mercado</span></div><div><strong>2.400</strong><span>Historias acompañadas</span></div><div><strong>4.9<small>/5</small></strong><span>Experiencia de clientes</span></div><div className="stats-note"><Sparkles /> Una forma más humana de buscar</div></div></section>

      <section className="featured-section"><div className="section-number">02 / SELECCIÓN</div><div className="section-heading editorial-heading"><div><p className="eyebrow">UNA SELECCIÓN CURADA</p><h2>Espacios que<br /><em>dejan marca.</em></h2></div><p className="heading-note">Elegidos por su arquitectura,<br />su luz y lo que pueden llegar a ser.</p></div><div className="property-grid">{properties.slice(0, 4).map((property) => <PropertyCard key={property.id} property={property} />)}</div><div className="section-end"><span>04 / 06 PROPIEDADES</span><Link className="button button-outline" href="/catalog">Ver toda la selección <ArrowUpRight /></Link></div></section>

      <section id="barrios" className="neighborhoods-section"><div className="section-number">03 / TERRITORIO</div><div className="neighborhood-intro"><div><p className="eyebrow">BUENOS AIRES, DE CERCA</p><h2>El barrio<br /><em>también importa.</em></h2></div><p>La ciudad no es un fondo. Es parte de cómo se vive una casa. Exploramos sus ritmos, sus cafés y sus secretos.</p></div><div className="neighborhood-grid">{neighborhoods.map((neighborhood, index) => <Link className={`neighborhood-card neighborhood-${index + 1}`} href="/catalog" key={neighborhood.name}><img src={neighborhood.image} alt={neighborhood.name} /><div><span>0{index + 1}</span><h3>{neighborhood.name}</h3><p>{neighborhood.detail}</p></div><ArrowUpRight /></Link>)}</div></section>

      <section className="contact-section"><div className="contact-shell"><p className="eyebrow">¿LO VEMOS JUNTOS?</p><h2>Tu próximo lugar<br /><em>empieza acá.</em></h2><div className="contact-actions"><a className="button button-light" href={whatsappLink()}>Hablemos por WhatsApp <ArrowUpRight /></a><a className="text-link" href="mailto:hola@garciabaillos.com">hola@garciabaillos.com <ArrowUpRight /></a></div></div><footer className="footer-row"><span>© 2024 García Baillos Propiedades</span><span>Buenos Aires · Argentina</span><a href="https://instagram.com" aria-label="Instagram"><Star /></a><a href="mailto:hola@garciabaillos.com" aria-label="Email"><Mail /></a><a href="tel:+5491155550182" aria-label="Teléfono"><Phone /></a></footer></section>
    </main>
  )
}
