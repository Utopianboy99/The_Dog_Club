import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-dog.jpg"
          alt="Happy dog at The Dog Club"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 mb-6">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Trusted by 2,000+ Pet Owners</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-serif font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Professional Dog Training, Grooming & Daycare in{' '}
            <span className="text-primary">Johannesburg</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
            Give your furry friend the care they deserve. From expert training to 
            luxurious grooming and fun-filled daycare, we treat every dog like family.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="text-base">
              <Link href="/contact">
                Book a Visit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base">
              <a href="tel:+27123456789">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-medium"
                  >
                    {['JD', 'SK', 'MP', 'LK'][i - 1]}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="h-4 w-4 text-accent fill-accent" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-muted-foreground">500+ Reviews</span>
              </div>
            </div>
            <div className="h-8 w-px bg-border hidden sm:block" />
            <div className="text-sm">
              <span className="font-semibold text-foreground">15+ Years</span>
              <span className="text-muted-foreground"> Experience</span>
            </div>
            <div className="h-8 w-px bg-border hidden sm:block" />
            <div className="text-sm">
              <span className="font-semibold text-foreground">Certified</span>
              <span className="text-muted-foreground"> Trainers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
