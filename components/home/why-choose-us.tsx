import { Shield, Heart, Award, Users, Clock, MapPin } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Certified Professionals',
    description: 'Our trainers and groomers are certified with years of hands-on experience.',
  },
  {
    icon: Heart,
    title: 'Passionate About Dogs',
    description: 'We genuinely love what we do and treat every dog as if they were our own.',
  },
  {
    icon: Shield,
    title: 'Safe Environment',
    description: 'Fully secured facilities with constant supervision and veterinary backup.',
  },
  {
    icon: Users,
    title: 'Small Group Sizes',
    description: 'Personalised attention with carefully managed class and play group sizes.',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Convenient hours and booking options to fit your busy lifestyle.',
  },
  {
    icon: MapPin,
    title: 'Prime Location',
    description: 'Easily accessible location in Sandton with ample parking.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="mt-4 text-3xl font-serif font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
              Your Dog Deserves the Best Care
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              At The Dog Club, we combine expertise, passion, and state-of-the-art facilities 
              to provide exceptional care for your four-legged family member. Here&apos;s why 
              Johannesburg pet owners trust us.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div>
                <div className="text-4xl font-serif font-bold text-primary">15+</div>
                <div className="mt-1 text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold text-primary">2K+</div>
                <div className="mt-1 text-sm text-muted-foreground">Happy Dogs</div>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold text-primary">98%</div>
                <div className="mt-1 text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
