'use client'

import { useState } from 'react'
import { ArrowUpRight, Check, Send } from 'lucide-react'
import { whatsappLink } from '@/lib/properties'

export function ContactForm({ propertyTitle }: { propertyTitle: string }) {
  const [sent, setSent] = useState(false)
  if (sent) return <div className="form-success"><Check /><h3>Recibimos tu consulta.</h3><p>Te vamos a escribir personalmente para coordinar el próximo paso.</p></div>
  return <form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true) }}>
    <label>Tu nombre<input required name="name" placeholder="Cómo te llamamos?" /></label>
    <label>Tu email<input required type="email" name="email" placeholder="nombre@email.com" /></label>
    <label>Mensaje<textarea name="message" defaultValue={`Hola, me interesa ${propertyTitle}.`} rows={3} /></label>
    <button className="button button-blue" type="submit">Enviar consulta <Send /></button>
    <a className="form-whatsapp" href={whatsappLink()} target="_blank" rel="noreferrer">O escribir directamente por WhatsApp <ArrowUpRight /></a>
  </form>
}
