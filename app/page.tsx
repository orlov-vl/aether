'use client'

import Link from 'next/link'
import { ArrowUpRight, Mail, Menu, Phone, Sparkles, Star } from 'lucide-react'
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
        <img className="hero-bg" src="/hero-home.png" alt="Interior luminoso de un hogar en Buenos Aires" />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-inner">
          <p className="eyebrow">INMOBILIARIA DE AUTOR · BUENOS AIRES</p>
          <h1>Hogares<br /><em>reales.</em></h1>
          <p className="hero-intro">Te acompañamos a comprar, vender o alquilar tu propiedad con conocimiento real del mercado y un trato verdaderamente personal.</p>
          <div className="hero-actions">
            <Link className="button button-light" href="/catalog">¿Querés comprar? <ArrowUpRight /></Link>
            <a className="button button-ghost" href={whatsappLink()}>¿Querés vender? <ArrowUpRight /></a>
          </div>
          <dl className="hero-stats">
            <div><dt>+30</dt><dd>Años de trayectoria</dd></div>
            <div><dt>2.400</dt><dd>Historias acompañadas</dd></div>
            <div><dt>4.9<span>/5</span></dt><dd>Experiencia de clientes</dd></div>
          </dl>
        </div>
      </section>

      <section id="nosotros" className="intro home-intro"><div className="section-number">01 / FILOSOFÍA</div><div className="intro-grid"><div><p className="eyebrow">UNA MIRADA LOCAL</p><h2>Lo que hace<br /><em>hogar</em> a un lugar.</h2></div><div className="intro-copy"><p className="lead">No mostramos propiedades. <em>Encontramos el lugar donde empieza una historia.</em></p><p>Somos una inmobiliaria independiente, cercana y obsesionada con los detalles. Conocemos cada esquina porque también vivimos esta ciudad.</p><Link className="text-link dark-link" href="/catalog">Conocé nuestra mirada <ArrowUpRight /></Link></div></div><div className="intro-highlights"><div><Sparkles /><h3>Asesoramiento honesto</h3><p>Números claros y expectativas realistas en cada etapa.</p></div><div><Sparkles /><h3>Mirada local</h3><p>Conocemos cada barrio porque también vivimos esta ciudad.</p></div><div><Sparkles /><h3>Acompañamiento humano</h3><p>Una persona real de principio a fin, sin vueltas.</p></div></div></section>

      <section className="featured-section"><div className="section-number">02 / SELECCIÓN</div><div className="section-heading editorial-heading"><div><p className="eyebrow">UNA SELECCIÓN CURADA</p><h2>Espacios que<br /><em>dejan marca.</em></h2></div><p className="heading-note">Elegidos por su arquitectura,<br />su luz y lo que pueden llegar a ser.</p></div><div className="property-grid">{properties.slice(0, 4).map((property) => <PropertyCard key={property.id} property={property} />)}</div><div className="section-end"><span>04 / 06 PROPIEDADES</span><Link className="button button-outline" href="/catalog">Ver toda la selección <ArrowUpRight /></Link></div></section>

      <section id="barrios" className="neighborhoods-section"><div className="section-number">03 / TERRITORIO</div><div className="neighborhood-intro"><div><p className="eyebrow">BUENOS AIRES, DE CERCA</p><h2>El barrio<br /><em>también importa.</em></h2></div><p>La ciudad no es un fondo. Es parte de cómo se vive una casa. Exploramos sus ritmos, sus cafés y sus secretos.</p></div><div className="neighborhood-grid">{neighborhoods.map((neighborhood, index) => <Link className={`neighborhood-card neighborhood-${index + 1}`} href="/catalog" key={neighborhood.name}><img src={neighborhood.image} alt={neighborhood.name} /><div><span>0{index + 1}</span><h3>{neighborhood.name}</h3><p>{neighborhood.detail}</p></div><ArrowUpRight /></Link>)}</div></section>

      <section className="contact-section"><div className="contact-shell"><p className="eyebrow">¿LO VEMOS JUNTOS?</p><h2>Tu próximo lugar<br /><em>empieza acá.</em></h2><div className="contact-actions"><a className="button button-light" href={whatsappLink()}>Hablemos por WhatsApp <ArrowUpRight /></a><a className="text-link" href="mailto:hola@garciabaillos.com">hola@garciabaillos.com <ArrowUpRight /></a></div></div><footer className="footer-row"><span>© 2024 García Baillos Propiedades</span><span>Buenos Aires · Argentina</span><a href="https://instagram.com" aria-label="Instagram"><Star /></a><a href="mailto:hola@garciabaillos.com" aria-label="Email"><Mail /></a><a href="tel:+5491155550182" aria-label="Teléfono"><Phone /></a></footer></section>
    </main>
  )
}
