import Header from "@/components/header"
import HeroCarousel from "@/components/hero-carousel"
import BiographySection from "@/components/biography-section"
import TimelineSection from "@/components/timeline-section"
import PublicationsSection from "@/components/publications-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroCarousel />
      <BiographySection />
      <TimelineSection />
      <PublicationsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
