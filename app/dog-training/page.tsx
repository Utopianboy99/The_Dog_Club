import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ArrowRight, CheckCircle, GraduationCap, Users, Target, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dog Training',
  description: 'Professional dog training services in Johannesburg including obedience training, puppy training, and behaviour correction. Expert certified trainers.',
  keywords: ['dog training Johannesburg', 'obedience training', 'puppy training', 'dog behaviour correction'],
}

const trainingTypes = [
  {
    title: 'Obedience Training',
    description: 'Build a strong foundation with essential commands like sit, stay, come, heel, and down. Our obedience training creates a well-mannered dog that\'s a joy to be around.',
    features: [
      'Basic commands mastery',
      'Leash manners & walking',
      'Distraction training',
      'Real-world application',
    ],
  },
  {
    title: 'Puppy Training',
    description: 'Start your puppy on the right path with age-appropriate training that focuses on socialisation, potty training, and foundational skills during this critical learning period.',
    features: [
      'Socialisation skills',
      'House training support',
      'Bite inhibition',
      'Confidence building',
    ],
  },
  {
    title: 'Behaviour Correction',
    description: 'Address challenging behaviours like aggression, anxiety, excessive barking, and destructive habits with our specialised behaviour modification programs.',
    features: [
      'Aggression management',
      'Separation anxiety',
      'Fear & phobia treatment',
      'Destructive behaviour',
    ],
  },
]

const benefits = [
  {
    icon: GraduationCap,
    title: 'Certified Trainers',
    description: 'All our trainers are professionally certified with extensive experience in positive reinforcement methods.',
  },
  {
    icon: Users,
    title: 'Personalised Approach',
    description: 'Every dog is unique. We create customised training plans tailored to your dog\'s personality and your goals.',
  },
  {
    icon: Target,
    title: 'Proven Results',
    description: 'Our methods have helped thousands of dogs become well-behaved, confident companions.',
  },
  {
    icon: Heart,
    title: 'Positive Methods',
    description: 'We use reward-based training that strengthens the bond between you and your dog.',
  },
]

const faqs = [
  {
    question: 'How long does it take to train a dog?',
    answer: 'The duration varies depending on the dog\'s age, temperament, and training goals. Basic obedience typically takes 6-8 weeks with consistent practice. More complex behaviour issues may require longer-term programs.',
  },
  {
    question: 'What age should I start training my dog?',
    answer: 'The earlier, the better! Puppies can start basic training as young as 8 weeks old. However, dogs of any age can learn new behaviours and habits with the right approach.',
  },
  {
    question: 'Do you offer private or group training?',
    answer: 'We offer both! Private sessions are ideal for specific behaviour issues or personalised attention. Group classes are great for socialisation and basic obedience. We\'ll help you choose the best option.',
  },
  {
    question: 'What training methods do you use?',
    answer: 'We exclusively use positive reinforcement techniques. This means rewarding good behaviour rather than punishing bad behaviour. This creates a happy, confident dog and strengthens your bond.',
  },
  {
    question: 'Do I need to attend the training sessions?',
    answer: 'Yes, we encourage owner participation! Training is as much about teaching you as it is about teaching your dog. You\'ll learn the techniques to maintain and reinforce training at home.',
  },
  {
    question: 'What if my dog has aggression issues?',
    answer: 'We have experienced behaviour consultants who specialise in aggression cases. We\'ll conduct a thorough assessment and create a safe, structured plan to address the behaviour.',
  },
]

export default function DogTrainingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/dog-training.jpg"
            alt="Professional dog training session"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Dog Training
            </span>
            <h1 className="mt-4 text-4xl font-serif font-bold text-foreground sm:text-5xl lg:text-6xl text-balance">
              Expert Dog Training in Johannesburg
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Transform your dog into a well-behaved, confident companion with our 
              professional training programs. From basic obedience to complex behaviour 
              modification, our certified trainers are here to help.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Book a Session
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+27123456789">Call Us Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Training Types */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-foreground sm:text-4xl">
              Our Training Programs
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tailored programs for every dog, regardless of age, breed, or experience level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainingTypes.map((type) => (
              <Card key={type.title} className="border-0 shadow-sm bg-card">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground">{type.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {type.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {type.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/puppy-school.jpg"
                alt="Happy trained dogs"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-foreground sm:text-4xl">
                Why Choose Our Training?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Our approach combines expertise, patience, and proven methods to 
                deliver results that last a lifetime.
              </p>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-primary-foreground sm:text-4xl">
              Training Packages
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Flexible options to suit your needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-primary-foreground border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-foreground">Single Session</h3>
                <div className="mt-4 text-4xl font-bold text-primary">R450</div>
                <p className="mt-2 text-sm text-muted-foreground">per 60-minute session</p>
                <ul className="mt-6 space-y-3 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>One-on-one attention</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Flexible scheduling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Training guide included</span>
                  </li>
                </ul>
                <Button className="w-full mt-8" variant="outline" asChild>
                  <Link href="/contact">Book Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground border-0 ring-2 ring-primary relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-foreground">6-Week Program</h3>
                <div className="mt-4 text-4xl font-bold text-primary">R2,200</div>
                <p className="mt-2 text-sm text-muted-foreground">complete package</p>
                <ul className="mt-6 space-y-3 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>6 weekly sessions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Progress assessments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Homework exercises</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Email support</span>
                  </li>
                </ul>
                <Button className="w-full mt-8" asChild>
                  <Link href="/contact">Book Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-foreground">Intensive Program</h3>
                <div className="mt-4 text-4xl font-bold text-primary">R4,500</div>
                <p className="mt-2 text-sm text-muted-foreground">board & train</p>
                <ul className="mt-6 space-y-3 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>2-week stay with us</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Daily training sessions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Handover session</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>30-day follow-up</span>
                  </li>
                </ul>
                <Button className="w-full mt-8" variant="outline" asChild>
                  <Link href="/contact">Book Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Got questions? We&apos;ve got answers.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">Still have questions?</p>
            <Button className="mt-4" asChild>
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
