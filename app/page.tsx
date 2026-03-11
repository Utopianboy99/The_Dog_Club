import { HeroSection } from '@/components/home/hero-section'
import { ServicesOverview } from '@/components/home/services-overview'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import { TestimonialsPreview } from '@/components/home/testimonials-preview'
import { GalleryPreview } from '@/components/home/gallery-preview'
import { CTASection } from '@/components/home/cta-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <TestimonialsPreview />
      <GalleryPreview />
      <CTASection />
    </>
  )
}
