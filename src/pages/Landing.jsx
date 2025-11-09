import { features, pricingPlans, testimonials } from "../assets/data";
import CtaSection from "../components/landing/CtaSection";
import FeatureSection from "../components/landing/FeatureSection";
import FooterSection from "../components/landing/FooterSection";
import HeroSection from "../components/landing/HeroSection";
import PricingSection from "../components/landing/PricingSection";
import TestimonialSection from "../components/landing/TestimonialSection";

const Landing=()=>{
  return (
    <div className="landing-page" bg-gradient-to-b from-gray-50 to-gray-100>
      {/** Hero Section*/}
      <HeroSection />

      {/** Feature Section*/}
      <FeatureSection features={features}/>

      {/** Pricing Section*/}
      <PricingSection pricingPlans={pricingPlans}/>

      {/** Testimonial Section*/}
      <TestimonialSection testimonials={testimonials}/>

      {/** CTA Section*/}
      <CtaSection/>

      {/** Footer Section*/}
      <FooterSection/>

    </div>  
      
  );
}   
export default Landing;