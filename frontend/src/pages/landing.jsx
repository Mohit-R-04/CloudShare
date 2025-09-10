import HeroSection from '../components/landing/hero.jsx'
import FeaturesSection from '../components/landing/features.jsx'
import PricingSection from '../components/landing/pricing.jsx'
import TestimonialSection from '../components/landing/testimonial.jsx'
import FooterSection from '../components/landing/footer.jsx'

function Landing() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      {/* Features section */}
      <FeaturesSection />
      {/* Pricing section */}
      <PricingSection />
      {/* Testimonials section */}
      <TestimonialSection />
      {/* Footer section */}
      <FooterSection />
    </div>
  )
}

export default Landing