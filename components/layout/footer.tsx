import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const navigation = {
  services: [
    { name: 'Dog Training', href: '/dog-training' },
    { name: 'Puppy School', href: '/services#puppy-school' },
    { name: 'Grooming', href: '/services#grooming' },
    { name: 'Doggy Daycare', href: '/services#daycare' },
    { name: 'Pet Boarding', href: '/services#boarding' },
  ],
  company: [
    { name: 'About Us', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="h-6 w-6 text-primary-foreground"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3.938c-1.923 1.258-1.5 5.062 1.5 7.062M14 5.172c0-1.39 1.577-2.493 3.5-1.234 1.923 1.258 1.5 5.062-1.5 7.062" strokeLinecap="round" />
                  <circle cx="12" cy="14" r="6" />
                  <circle cx="10" cy="13" r="1" fill="currentColor" />
                  <circle cx="14" cy="13" r="1" fill="currentColor" />
                  <ellipse cx="12" cy="15.5" rx="1.5" ry="1" fill="currentColor" />
                </svg>
              </div>
              <span className="text-xl font-serif font-bold">The Dog Club</span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
              Professional dog training, grooming, daycare, and boarding services in Johannesburg, South Africa.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Services</h3>
            <ul className="mt-4 space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/70">
                  123 Canine Street, Sandton<br />
                  Johannesburg, 2196
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+27123456789" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  +27 12 345 6789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:hello@thedogclub.co.za" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  hello@thedogclub.co.za
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/70">
                  Mon - Fri: 7:00 AM - 6:00 PM<br />
                  Sat: 8:00 AM - 4:00 PM<br />
                  Sun: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} The Dog Club. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
