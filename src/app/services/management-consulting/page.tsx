import { ServicePage } from "@/components/shared/ServicePage";
import { managementConsulting } from "@/lib/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Management Consulting",
  description: managementConsulting.summary,
};

export default function ManagementConsultingPage() {
  return <ServicePage category={managementConsulting} />;
}
