'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { CheckCircle, Loader2 } from 'lucide-react'

const services = [
  'Dog Training',
  'Puppy School',
  'Grooming',
  'Doggy Daycare',
  'Pet Boarding',
  'Behaviour Consultation',
  'General Inquiry',
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    dogName: '',
    dogBreed: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result?.error || 'Failed to send message')
      }

      setIsSubmitted(true)
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : 'Failed to send message'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="mt-8 p-8 bg-primary/10 rounded-xl text-center">
        <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-foreground">
          Message Sent!
        </h3>
        <p className="mt-2 text-muted-foreground">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <Button
          className="mt-6"
          variant="outline"
          onClick={() => {
            setIsSubmitted(false)
            setErrorMessage(null)
            setFormData({
              name: '',
              email: '',
              phone: '',
              service: '',
              dogName: '',
              dogBreed: '',
              message: '',
            })
          }}
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Your Name *</Label>
          <Input
            id="name"
            type="text"
            placeholder="John Smith"
            required
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            required
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+27 12 345 6789"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="service">Service Interested In *</Label>
          <Select
            value={formData.service}
            onValueChange={(value) => handleChange('service', value)}
            required
          >
            <SelectTrigger id="service">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service} value={service}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="dogName">Dog&apos;s Name</Label>
          <Input
            id="dogName"
            type="text"
            placeholder="Max"
            value={formData.dogName}
            onChange={(e) => handleChange('dogName', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="dogBreed">Dog&apos;s Breed</Label>
          <Input
            id="dogBreed"
            type="text"
            placeholder="Golden Retriever"
            value={formData.dogBreed}
            onChange={(e) => handleChange('dogBreed', e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your dog and what you're looking for..."
          rows={5}
          required
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
        />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </Button>

      {errorMessage && (
        <div className="rounded-lg border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          {errorMessage}
        </div>
      )}

      <p className="text-sm text-muted-foreground text-center">
        We respect your privacy. Your information will never be shared.
      </p>
    </form>
  )
}
