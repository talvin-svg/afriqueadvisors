import { AudienceSection } from "@/components/home/AudienceSection";
import { CredentialStrip } from "@/components/home/CredentialStrip";
import { CTASection } from "@/components/home/CTASection";
import { HeroSection } from "@/components/home/HeroSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ServicesPreviewSection } from "@/components/home/ServicesPreviewSection";
import { SisterCompanySection } from "@/components/home/SisterCompanySection";
import { Web3Section } from "@/components/home/Web3Section";
import { WhyUsSection } from "@/components/home/WhyUsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CredentialStrip />
      <AudienceSection />
      <ServicesPreviewSection />
      <WhyUsSection />
      <ProcessSection />
      <Web3Section />
      <SisterCompanySection />
      <CTASection />
    </>
  );
}
