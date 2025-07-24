import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import TrustIndicators from "@/components/sections/trust-indicators";
import ProblemSolution from "@/components/sections/problem-solution";
import Services from "@/components/sections/services";
import Pricing from "@/components/sections/pricing";
import Methodology from "@/components/sections/methodology";
import CaseStudies from "@/components/sections/case-studies";
import WhyChooseUs from "@/components/sections/why-choose-us";
import Testimonials from "@/components/sections/testimonials";
import Blog from "@/components/sections/blog";
import CTA from "@/components/sections/cta";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TrustIndicators />
        <ProblemSolution />
        <Services />
        <Pricing />
        <Methodology />
        <CaseStudies />
        <WhyChooseUs />
        <Testimonials />
        <Blog />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
