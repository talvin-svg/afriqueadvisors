import { ServicePage } from "@/components/shared/ServicePage";
import { financialAdvisory } from "@/lib/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Advisory",
  description: financialAdvisory.summary,
};

export default function FinancialAdvisoryPage() {
  return <ServicePage category={financialAdvisory} />;
}
