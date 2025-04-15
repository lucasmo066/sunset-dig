import Image from 'next/image';
import { Hero } from "@/components/Hero";
import RootLayout from "@/app/layout";
import MeteorSection from '@/components/MeteorSection';
import { StepsSection } from '@/components/StepsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import FaqsSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import MembershipBenefits from '@/components/MembershipBenefits';
import { FloatingNavbar } from "@/components/NavigationMenu";

export default function Home() {
  return (
    <RootLayout>
      <div className="flex min-h-screen flex-col items-center">
        <Hero />
        {/* TODO: Add about section */}
        <StepsSection />
        <TestimonialsSection />
        <MembershipBenefits />
        <PricingSection />
        <FaqsSection />
        <ContactSection />
        <footer className="w-full bg-neutral-950 border border-primary text-primary text-center py-8">
          <Image
            src="/3.svg"
            alt="Sunset Digital Logo"
            width={100}
            height={100}
            className='mx-auto mt-5'
            loading="eager"
          />
          <p className="text-sm font-thin">&copy; 2024 Sunset Digital</p>
        </footer>
        <FloatingNavbar />
      </div>
    </RootLayout>
  );
}
