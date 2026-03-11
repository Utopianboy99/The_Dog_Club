'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Dog Training', href: '/dog-training' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
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
          <span className="text-xl font-serif font-bold text-foreground">The Dog Club</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          {/* <Button variant="ghost" size="sm" asChild>
            <a href="tel:+27123456789" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+27 12 345 6789</span>
            </a>
          </Button> */}
          <Button asChild>
            <Link href="/contact">Book a Visit</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="space-y-1 px-4 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-4 py-3 text-base font-medium text-foreground hover:bg-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-border space-y-3">
              <a 
                href="tel:+27123456789" 
                className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground"
              >
                <Phone className="h-4 w-4" />
                <span>+27 12 345 6789</span>
              </a>
              <Button className="w-full" asChild>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Book a Visit
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
