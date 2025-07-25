import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import TrustLogos from "@/components/sections/trust-logos";
import ProblemSolutionNew from "@/components/sections/problem-solution-new";
import Services from "@/components/sections/services";
import Pricing from "@/components/sections/pricing";
import Methodology from "@/components/sections/methodology";
import CaseStudies from "@/components/sections/case-studies";
import WhyChooseUs from "@/components/sections/why-choose-us";
import Blog from "@/components/sections/blog";
import CTA from "@/components/sections/cta";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TrustLogos />
        <ProblemSolutionNew />
        <Services />
        <Pricing />
        <Methodology />
        <CaseStudies />
        <WhyChooseUs />
        <Blog />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
