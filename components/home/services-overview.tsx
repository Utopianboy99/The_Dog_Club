import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Dog Training',
    description: 'Expert obedience training and behaviour modification for dogs of all ages.',
    image: '/images/dog-training.jpg',
    href: '/dog-training',
  },
  {
    title: 'Puppy School',
    description: 'Socialisation and foundational training for your new family member.',
    image: '/images/puppy-school.jpg',
    href: '/services#puppy-school',
  },
  {
    title: 'Grooming',
    description: 'Professional grooming services to keep your pup looking and feeling great.',
    image: '/images/dog-grooming.jpg',
    href: '/services#grooming',
  },
  {
    title: 'Doggy Daycare',
    description: 'Safe, supervised play and socialisation while you\'re at work.',
    image: '/images/dog-daycare.jpg',
    href: '/services#daycare',
  },
  {
    title: 'Pet Boarding',
    description: 'Comfortable overnight stays with round-the-clock care and attention.',
    image: '/images/dog-boarding.jpg',
    href: '/services#boarding',
  },
  {
    title: 'Behaviour Consultations',
    description: 'One-on-one sessions to address specific behavioural challenges.',
    image: '/images/HappyPawsStrolling.png',
    href: '/services#behaviour',
  },
]

export function ServicesOverview() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="mt-4 text-3xl font-serif font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Everything Your Dog Needs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From training to pampering, we offer comprehensive care for your furry friend.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group">
              <Card className="overflow-hidden h-full border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-card">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
