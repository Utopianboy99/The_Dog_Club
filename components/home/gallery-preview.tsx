import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const images = [
  { src: '/images/hero-dog.jpg', alt: 'Happy golden retriever at The Dog Club' },
  { src: '/images/dog-training.jpg', alt: 'Dog training session' },
  { src: '/images/dog-grooming.jpg', alt: 'Professional dog grooming' },
  { src: '/images/dog-daycare.jpg', alt: 'Dogs playing at daycare' },
  { src: '/images/puppy-school.jpg', alt: 'Puppies at puppy school' },
  { src: '/images/dog-boarding.jpg', alt: 'Dog in boarding suite' },
]

export function GalleryPreview() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Gallery
          </span>
          <h2 className="mt-4 text-3xl font-serif font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Happy Pups at The Dog Club
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Take a peek at our facilities and the furry friends who visit us.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl ${
                index === 0 ? 'md:col-span-2 md:row-span-2 aspect-square' : 'aspect-square'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/gallery">
              View Full Gallery
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
