"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Award, Heart, Smile } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="small"
        sizing="largeSizeMediumTitles"
        background="floatingGradient"
        cardStyle="solid"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Il Salone", id: "about" },
        { name: "Servizi", id: "services" },
        { name: "Recensioni", id: "testimonials" },
        { name: "Prenota", id: "contact" },
      ]}
      brandName="Hair The Very Styles"
      button={{ text: "Prenota Ora", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Hair The Very Styles"
      description="Più di un salone. Un posto in cui tornare. Tagli impeccabili, colori su misura e un team che ti ascolta davvero."
      buttons={[
        { text: "Prenota ora", href: "#contact" },
        { text: "Scopri il salone", href: "#about" },
      ]}
      slides={[
        { imageSrc: "http://img.b2bpic.net/free-photo/female-hairdresser-styling-clients-hair_107420-94691.jpg", imageAlt: "hair salon interior elegant warm light" },
        { imageSrc: "http://img.b2bpic.net/free-photo/modern-reception-counter-with-classy-interior-design_482257-101081.jpg", imageAlt: "Modern reception counter with classy interior design" },
        { imageSrc: "http://img.b2bpic.net/free-photo/elderly-guest-arrives-hotel-lobby_482257-81592.jpg", imageAlt: "Elderly guest arrives in hotel lobby" },
        { imageSrc: "http://img.b2bpic.net/free-photo/woman-getting-treatment-hairdresser-shop_23-2149229746.jpg", imageAlt: "Woman getting treatment at hairdresser shop" },
        { imageSrc: "http://img.b2bpic.net/free-photo/cheerful-women-taking-pictures-cafe_23-2147785288.jpg", imageAlt: "Cheerful women taking pictures in cafe" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Alessandra e il suo team"
      metrics={[
        { icon: Award, label: "Esperienza", value: "10+ Anni" },
        { icon: Smile, label: "Clienti Felici", value: "1000+" },
        { icon: Heart, label: "Ascolto", value: "100%" },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardSix
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        { title: "Taglio", description: "Precisione, stile e armonia con il tuo viso.", imageSrc: "http://img.b2bpic.net/free-photo/european-woman-with-bright-makeup-long-wavy-hair-posing_291650-557.jpg", imageAlt: "european woman with bright makeup and long wavy hair posing" },
        { title: "Colore", description: "Naturale o deciso, sempre studiato su di te.", imageSrc: "http://img.b2bpic.net/free-photo/female-hairdresser-styling-clients-hair_107420-94691.jpg", imageAlt: "european woman with bright makeup and long wavy hair posing" },
        { title: "Piega & Styling", description: "Per uscire sentendoti al meglio, ogni volta.", imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-attractive-stylish-lady-with-bright-makeup-smiling_291650-581.jpg", imageAlt: "european woman with bright makeup and long wavy hair posing" },
        { title: "Trattamenti", description: "Per capelli più sani, luminosi e forti.", imageSrc: "http://img.b2bpic.net/free-photo/young-girl-black-shirt-hanged-toy-camera-from-her-neck_114579-24475.jpg", imageAlt: "european woman with bright makeup and long wavy hair posing" },
      ]}
      title="Servizi pensati per te"
      description="Ogni appuntamento inizia con una consulenza personalizzata."
    />
  </div>

  <div id="why-us" data-section="why-us">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", value: "Ascolto", title: "Ti ascoltiamo davvero", items: ["Consulenza iniziale", "Ascolto attivo", "Senza forzature"] },
        { id: "m2", value: "Risultati", title: "Risultati costanti", items: ["Tecnica solida", "Precisione", "Alta qualità"] },
        { id: "m3", value: "Ambiente", title: "Atmosfera accogliente", items: ["Salotto di bellezza", "Clima familiare", "Relax totale"] },
      ]}
      title="Perché le nostre clienti non cambiano più"
      description="Ci dedichiamo a creare un'esperienza unica, curata nei minimi dettagli per garantirti il massimo benessere."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Giulia R.", role: "Cliente", company: "Fedele", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-attractive-stylish-lady-with-bright-makeup-smiling_291650-581.jpg" },
        { id: "2", name: "Maria L.", role: "Cliente", company: "Salotto", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-girl-black-shirt-hanged-toy-camera-from-her-neck_114579-24475.jpg" },
        { id: "3", name: "Elena P.", role: "Cliente", company: "Soddisfatta", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/stylist-works-woman-hair-salon_1398-1042.jpg" },
        { id: "4", name: "Silvia V.", role: "Cliente", company: "Stile", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-attractive-woman-holding-hands-together-joyfully-looking-camera-modern-clothes-store_574295-2021.jpg" },
        { id: "5", name: "Chiara B.", role: "Cliente", company: "Fedele", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-woman-combing-hair-bed_23-2147767632.jpg" },
      ]}
      title="Cosa dicono di noi"
      description="La soddisfazione delle nostre clienti è il nostro miglior biglietto da visita."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        { id: "f1", title: "Quanto costa?", content: "I prezzi vengono sempre spiegati prima. Trasparenza totale." },
        { id: "f2", title: "E se non so cosa voglio?", content: "Ti aiutiamo noi: è il nostro lavoro." },
        { id: "f3", title: "Potete sistemare un taglio o colore sbagliato?", content: "Sì, lavoriamo spesso su correzioni." },
        { id: "f4", title: "È adatto a tutte le età?", content: "Assolutamente sì." },
      ]}
      sideTitle="Domande frequenti"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      tag="Contatti"
      title="Pronta a sentirti di nuovo al top?"
      description="Prenota il tuo appuntamento telefonando al 06 4423 5489. Ti aspettiamo nel nostro salotto di bellezza vicino a Piazza Bologna."
      buttons={[
        { text: "Chiama ora", href: "tel:+390644235489" },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Hair The Very Styles"
      columns={[
        { title: "Contatti", items: [{ label: "06 4423 5489", href: "tel:+390644235489" }, { label: "Piazza Bologna, Roma", href: "#" }] },
        { title: "Social", items: [{ label: "Instagram", href: "#" }] },
        { title: "Orari", items: [{ label: "Mar-Sab: 9:00 - 19:00", href: "#" }] },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
