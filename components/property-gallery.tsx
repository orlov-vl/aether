'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react'

export function PropertyGallery({ title, images }: { title: string; images: string[] }) {
  const [active, setActive] = useState(0)
  const next = () => setActive((current) => (current + 1) % images.length)
  const previous = () => setActive((current) => (current - 1 + images.length) % images.length)
  return (
    <div className="gallery-component">
      <div className="gallery-main">
        <img src={images[active]} alt={`${title}, vista ${active + 1}`} />
        <button type="button" className="gallery-control gallery-prev" onClick={previous} aria-label="Foto anterior"><ChevronLeft /></button>
        <button type="button" className="gallery-control gallery-next" onClick={next} aria-label="Foto siguiente"><ChevronRight /></button>
        <span className="gallery-count">{String(active + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</span>
        <span className="gallery-expand" aria-hidden="true"><Expand /></span>
      </div>
      <div className="gallery-thumbs" role="tablist" aria-label="Fotos del inmueble">
        {images.map((image, index) => <button type="button" role="tab" aria-selected={active === index} className={active === index ? 'is-active' : ''} onClick={() => setActive(index)} key={image}><img src={image} alt={`Miniatura ${index + 1}`} /></button>)}
      </div>
    </div>
  )
}
