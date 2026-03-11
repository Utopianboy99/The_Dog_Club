import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Quote, ArrowRight } from 'lucide-react'

const testimonials = [
  {
    quote: "The Dog Club transformed our anxious rescue into a confident, well-behaved companion. The trainers are patient, knowledgeable, and truly care about each dog.",
    author: 'Sarah M.',
    role: 'Golden Retriever Owner',
    rating: 5,
  },
  {
    quote: "Best grooming service in Johannesburg! My poodle always comes out looking amazing and the staff treats her like royalty. Highly recommend!",
    author: 'Michael K.',
    role: 'Poodle Owner',
    rating: 5,
  },
  {
    quote: "We use the daycare three times a week and couldn't be happier. Our lab comes home tired and happy. The facility is spotless and secure.",
    author: 'Lisa van der Berg',
    role: 'Labrador Owner',
    rating: 5,
  },
]

export function TestimonialsPreview() {
  return (
    <section className="py-20 lg:py-28 bg-primary">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary-foreground/80 uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl font-serif font-bold text-primary-foreground sm:text-4xl lg:text-5xl text-balance">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Don&apos;t just take our word for it - hear from the pet parents who trust us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-primary-foreground border-0">
              <CardContent className="p-6 lg:p-8">
                <Quote className="h-10 w-10 text-primary/20" />
                <div className="flex items-center gap-1 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-accent fill-accent" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-4 text-foreground leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/testimonials">
              Read More Reviews
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
