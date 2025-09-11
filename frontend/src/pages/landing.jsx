import HeroSection from '../components/landing/hero.jsx'
import FeaturesSection from '../components/landing/features.jsx'
import PricingSection from '../components/landing/pricing.jsx'
import TestimonialSection from '../components/landing/testimonial.jsx'
import FooterSection from '../components/landing/footer.jsx'
import { useClerk, useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function Landing() {
  const { openSignIn, openSignUp } = useClerk();
  const {isSignedIn} = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate('/dashboard');
    }
  }, [isSignedIn, navigate]); 
  // ✅ Always include variables used inside the effect.
           // Even though `navigate` is stable and won't change in practice,
           // React (and ESLint rules) recommend including it to avoid bugs
           // with stale references in the future.
           // Effect mainly re-runs when `isSignedIn` changes.

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection openSignIn={openSignIn} openSignUp={openSignUp} />
      {/* Features section */}
      <FeaturesSection />
      {/* Pricing section */}
      <PricingSection openSignUp={openSignUp} />
      {/* Testimonials section */}
      <TestimonialSection openSignUp={openSignUp} />
      {/* Footer section */}
      <FooterSection />
    </div>
  )
}

export default Landing