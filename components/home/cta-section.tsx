import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, MessageCircle } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-16 sm:px-12 sm:py-20 lg:px-20">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="paws" patternUnits="userSpaceOnUse" width="20" height="20">
                  <circle cx="3" cy="3" r="2" fill="currentColor" />
                  <circle cx="8" cy="1" r="1.5" fill="currentColor" />
                  <circle cx="12" cy="3" r="1.5" fill="currentColor" />
                  <circle cx="5" cy="8" r="1.5" fill="currentColor" />
                  <circle cx="10" cy="8" r="1.5" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#paws)" />
            </svg>
          </div>

          <div className="relative text-center">
            <h2 className="text-3xl font-serif font-bold text-primary-foreground sm:text-4xl lg:text-5xl text-balance">
              Ready to Give Your Dog the Best?
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Book a visit today and see why thousands of Johannesburg pet owners trust 
              The Dog Club with their furry family members.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" asChild className="text-base">
                <Link href="/contact">
                  Book a Visit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                asChild
                className="text-base bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a 
                  href="https://wa.me/27123456789?text=Hi!%20I'm%20interested%20in%20your%20services" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>

            <p className="mt-8 text-sm text-primary-foreground/60">
              Or call us at{' '}
              <a href="tel:+27123456789" className="underline hover:text-primary-foreground">
                 +27 82 922 3725
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
