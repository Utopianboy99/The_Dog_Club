import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, GraduationCap, Scissors, Sun, Moon, Brain, Baby } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Discover our comprehensive dog services including training, grooming, daycare, boarding, and behaviour consultations in Johannesburg.',
}

const services = [
  {
    id: 'training',
    icon: GraduationCap,
    title: 'Dog Training',
    description: 'Our professional dog training programs are designed to help your dog become a well-mannered, confident companion. We use positive reinforcement techniques that strengthen the bond between you and your pet.',
    features: [
      'Obedience training for all levels',
      'One-on-one private sessions',
      'Group classes available',
      'Customised training plans',
    ],
    image: '/images/dog-training.jpg',
    href: '/dog-training',
    price: 'From R450/session',
  },
  {
    id: 'puppy-school',
    icon: Baby,
    title: 'Puppy School',
    description: 'Give your puppy the best start in life with our comprehensive puppy school program. We focus on early socialisation, basic commands, and building confidence during this crucial developmental period.',
    features: [
      'Puppies 8-16 weeks old',
      'Socialisation with other puppies',
      'Basic command training',
      '6-week comprehensive program',
    ],
    image: '/images/puppy-school.jpg',
    href: '/services#puppy-school',
    price: 'R2,400 for 6 weeks',
  },
  {
    id: 'grooming',
    icon: Scissors,
    title: 'Grooming',
    description: 'Our experienced groomers provide professional grooming services to keep your dog looking and feeling their best. We use premium, gentle products suitable for all coat types.',
    features: [
      'Full grooming packages',
      'Breed-specific styling',
      'Nail trimming & ear cleaning',
      'Spa treatments available',
    ],
    image: '/images/dog-grooming.jpg',
    href: '/services#grooming',
    price: 'From R350',
  },
  {
    id: 'daycare',
    icon: Sun,
    title: 'Doggy Daycare',
    description: 'Keep your dog active, socialised, and happy while you\'re at work or busy. Our daycare provides a safe, supervised environment for dogs to play and interact with other friendly pups.',
    features: [
      'Supervised play sessions',
      'Indoor & outdoor areas',
      'Rest periods included',
      'Daily activity reports',
    ],
    image: '/images/dog-daycare.jpg',
    href: '/services#daycare',
    price: 'R220/day',
  },
  {
    id: 'boarding',
    icon: Moon,
    title: 'Pet Boarding',
    description: 'Going away? Rest easy knowing your furry friend is in safe hands. Our boarding facility provides comfortable, home-like accommodations with 24/7 supervision and care.',
    features: [
      'Private suites available',
      '24/7 supervision',
      'Multiple daily walks',
      'Webcam access for owners',
    ],
    image: '/images/dog-boarding.jpg',
    href: '/services#boarding',
    price: 'From R380/night',
  },
  {
    id: 'behaviour',
    icon: Brain,
    title: 'Behaviour Consultations',
    description: 'Dealing with a specific behavioural challenge? Our certified behaviour consultants offer one-on-one sessions to address issues like aggression, anxiety, and destructive behaviour.',
    features: [
      'In-depth assessment',
      'Customised behaviour plan',
      'Follow-up support',
      'Home visit options',
    ],
    image: '/images/dog-training.jpg',
    href: '/services#behaviour',
    price: 'From R750/session',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="mt-4 text-4xl font-serif font-bold text-foreground sm:text-5xl lg:text-6xl text-balance">
              Comprehensive Care for Your Canine Companion
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              From training and grooming to daycare and boarding, we offer everything 
              your dog needs to thrive. All services delivered by certified professionals 
              who genuinely love what they do.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative h-80 lg:h-[500px] rounded-2xl overflow-hidden ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="mt-6 text-3xl font-serif font-bold text-foreground sm:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <svg className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price & CTA */}
                  <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="text-2xl font-bold text-primary">{service.price}</div>
                    <Button asChild>
                      <Link href="/contact">
                        Book Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-primary-foreground sm:text-4xl text-balance">
            Not Sure Which Service You Need?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Contact us for a free consultation. We&apos;ll help you find the perfect 
            solution for your dog&apos;s needs.
          </p>
          <div className="mt-8">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
