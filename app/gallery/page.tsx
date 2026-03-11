'use client'

import type { Metadata } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const categories = ['All', 'Training', 'Grooming', 'Daycare', 'Boarding', 'Puppies']

const images = [
  { src: '/images/hero-dog.jpg', alt: 'Happy golden retriever', category: 'Training' },
  { src: '/images/dog-training.jpg', alt: 'Dog training session', category: 'Training' },
  { src: '/images/dog-grooming.jpg', alt: 'Professional grooming', category: 'Grooming' },
  { src: '/images/dog-daycare.jpg', alt: 'Dogs at daycare', category: 'Daycare' },
  { src: '/images/dog-boarding.jpg', alt: 'Dog in boarding suite', category: 'Boarding' },
  { src: '/images/puppy-school.jpg', alt: 'Puppies at school', category: 'Puppies' },
  { src: '/images/gallery-1.jpg', alt: 'Playful beagle', category: 'Daycare' },
  { src: '/images/gallery-2.jpg', alt: 'German Shepherd training', category: 'Training' },
  { src: '/images/gallery-3.jpg', alt: 'Groomed Yorkshire Terrier', category: 'Grooming' },
  { src: '/images/gallery-4.jpg', alt: 'Dogs socializing', category: 'Daycare' },
  { src: '/images/gallery-5.jpg', alt: 'Husky in boarding', category: 'Boarding' },
  { src: '/images/gallery-6.jpg', alt: 'Playful puppies', category: 'Puppies' },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  
  const goToPrevious = () => {
    if (lightboxIndex === null) return
    setLightboxIndex(lightboxIndex === 0 ? filteredImages.length - 1 : lightboxIndex - 1)
  }
  
  const goToNext = () => {
    if (lightboxIndex === null) return
    setLightboxIndex(lightboxIndex === filteredImages.length - 1 ? 0 : lightboxIndex + 1)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Gallery
            </span>
            <h1 className="mt-4 text-4xl font-serif font-bold text-foreground sm:text-5xl lg:text-6xl text-balance">
              Happy Moments at The Dog Club
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Browse through our gallery to see our facilities, training sessions, 
              grooming results, and the happy pups who visit us every day.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <button
                key={`${image.src}-${index}`}
                onClick={() => openLightbox(index)}
                className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm text-primary-foreground font-medium">{image.category}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-full transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-full transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-full transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="relative w-full max-w-4xl h-[80vh] mx-4">
            <Image
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-primary-foreground text-sm">
            {lightboxIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </>
  )
}
