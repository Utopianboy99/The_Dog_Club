import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Quote, ArrowRight, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'Read what our clients say about The Dog Club. Customer reviews and testimonials from dog owners in Johannesburg.',
}

const testimonials = [
  {
    quote: "The Dog Club transformed our anxious rescue into a confident, well-behaved companion. The trainers are patient, knowledgeable, and truly care about each dog. After just 6 weeks, we saw an incredible transformation.",
    author: 'Sarah Mitchell',
    role: 'Golden Retriever Owner',
    service: 'Dog Training',
    rating: 5,
  },
  {
    quote: "Best grooming service in Johannesburg! My poodle always comes out looking amazing and the staff treats her like royalty. They remember her preferences and she actually enjoys going!",
    author: 'Michael Kruger',
    role: 'Poodle Owner',
    service: 'Grooming',
    rating: 5,
  },
  {
    quote: "We use the daycare three times a week and couldn't be happier. Our lab comes home tired and happy. The facility is spotless, secure, and the staff send us photo updates throughout the day.",
    author: 'Lisa van der Berg',
    role: 'Labrador Owner',
    service: 'Doggy Daycare',
    rating: 5,
  },
  {
    quote: "I was nervous about boarding my fur baby, but The Dog Club put my mind at ease. The webcam access was wonderful, and my dog was so well cared for. Will definitely use them again!",
    author: 'James Nkosi',
    role: 'Beagle Owner',
    service: 'Pet Boarding',
    rating: 5,
  },
  {
    quote: "The puppy school was exactly what we needed. Our little one learned so much about socialisation and basic commands. The trainers were amazing with the puppies and very supportive of us new dog parents.",
    author: 'Amanda Peters',
    role: 'Labradoodle Owner',
    service: 'Puppy School',
    rating: 5,
  },
  {
    quote: "After struggling with our German Shepherd's reactive behaviour for years, we finally found help at The Dog Club. Their behaviour consultant worked wonders. We can now enjoy walks again!",
    author: 'David Mthembu',
    role: 'German Shepherd Owner',
    service: 'Behaviour Consultation',
    rating: 5,
  },
  {
    quote: "Professional, friendly, and truly passionate about dogs. Every interaction with their team has been positive. Our Frenchie loves going there - his tail starts wagging as soon as we pull into the parking lot!",
    author: 'Sophie de Villiers',
    role: 'French Bulldog Owner',
    service: 'Doggy Daycare',
    rating: 5,
  },
  {
    quote: "The transformation in my dog after the intensive training program was remarkable. The team kept me updated throughout and the handover session was thorough. Money well spent!",
    author: 'Thomas Botha',
    role: 'Rottweiler Owner',
    service: 'Dog Training',
    rating: 5,
  },
  {
    quote: "My senior dog gets the gentlest grooming treatment here. They understand that older dogs need extra patience and care. She always looks and smells beautiful after her appointments.",
    author: 'Patricia Ndlovu',
    role: 'Cocker Spaniel Owner',
    service: 'Grooming',
    rating: 5,
  },
]

const stats = [
  { value: '2,000+', label: 'Happy Dogs' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '500+', label: 'Reviews' },
  { value: '15+', label: 'Years Experience' },
]

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Testimonials
            </span>
            <h1 className="mt-4 text-4xl font-serif font-bold text-foreground sm:text-5xl lg:text-6xl text-balance">
              What Our Clients Say
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Don&apos;t just take our word for it. Hear from the pet parents who 
              trust us with their furry family members.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-serif font-bold text-primary">{stat.value}</div>
                <div className="mt-2 text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 lg:p-8">
                  <Quote className="h-10 w-10 text-primary/20" />
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mt-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                    ))}
                  </div>

                  {/* Service Tag */}
                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {testimonial.service}
                    </span>
                  </div>

                  {/* Quote */}
                  <blockquote className="mt-4 text-foreground leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-primary-foreground sm:text-4xl text-balance">
            Ready to Join Our Happy Clients?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Experience the difference at The Dog Club. Book a visit today and see 
            why so many Johannesburg pet owners trust us.
          </p>
          <div className="mt-8">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Book a Visit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
