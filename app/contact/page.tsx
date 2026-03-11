import type { Metadata } from 'next'
import { ContactForm } from '@/components/contact/contact-form'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact The Dog Club for dog training, grooming, daycare, and boarding services in Johannesburg. Book a visit or send us a message.',
}

const businessHours = [
  { day: 'Monday', hours: '7:00 AM - 6:00 PM' },
  { day: 'Tuesday', hours: '7:00 AM - 6:00 PM' },
  { day: 'Wednesday', hours: '7:00 AM - 6:00 PM' },
  { day: 'Thursday', hours: '7:00 AM - 6:00 PM' },
  { day: 'Friday', hours: '7:00 AM - 6:00 PM' },
  { day: 'Saturday', hours: '8:00 AM - 4:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Contact Us
            </span>
            <h1 className="mt-4 text-4xl font-serif font-bold text-foreground sm:text-5xl lg:text-6xl text-balance">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Have questions or ready to book? We&apos;d love to hear from you. 
              Reach out via the form below, give us a call, or drop by our facility.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground">
                Send Us a Message
              </h2>
              <p className="mt-2 text-muted-foreground">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* WhatsApp CTA */}
              <Card className="bg-primary border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary-foreground">
                    Prefer WhatsApp?
                  </h3>
                  <p className="mt-2 text-primary-foreground/80">
                    Get a quick response by messaging us directly on WhatsApp.
                  </p>
                  <Button 
                    className="mt-4 bg-primary-foreground text-primary hover:bg-primary-foreground/90" 
                    asChild
                  >
                    <a 
                      href="https://wa.me/27829223725?text=Hi!%20I'm%20interested%20in%20your%20services" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Details */}
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 space-y-6">
                  <h3 className="text-xl font-semibold text-foreground">
                    Contact Details
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Address</div>
                        <div className="text-muted-foreground">
                          1 Bellevista Rd, Cnr Rifle range<br />
                          Haddon, Tuffontein, 2190<br />
                          South Africa
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Phone</div>
                        <a href="tel:+27123456789" className="text-muted-foreground hover:text-primary transition-colors">
                          Cell: (+27) 82 922 3725
                          <br />
                          Tel: (+27) 11 433 1442
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Email</div>
                        <a href="mailto:hello@thedogclub.co.za" className="text-muted-foreground hover:text-primary transition-colors">
                          juliebdogs@gmail.com
                          <br />
                          jannequethedogclub@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Business Hours
                    </h3>
                  </div>
                  
                  <div className="space-y-2">
                    {businessHours.map((item) => (
                      <div key={item.day} className="flex justify-between py-2 border-b border-border last:border-0">
                        <span className="text-foreground">{item.day}</span>
                        <span className={item.hours === 'Closed' ? 'text-muted-foreground' : 'text-muted-foreground'}>
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-12">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-6 text-center">
            Find Us
          </h2>
          <div className="rounded-xl overflow-hidden h-[400px] shadow-sm">
            <iframe
              src="https://www.google.com/maps?q=1%20Bellevista%20Rd%2C%20Cnr%20Rifle%20range%2C%20Haddon%2C%20Tuffontein%2C%202190%2C%20South%20Africa&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Dog Club Location"
            />
          </div>
        </div>
      </section>
    </>
  )
}
