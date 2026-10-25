import { ContactForm } from "@/components/shared/ContactForm";
import { ArrowUpRight } from "@/components/shared/Icon";
import { PageHeader } from "@/components/shared/PageHeader";
import { companyInfo } from "@/lib/data/company";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a consultation with Afrique Advisors Canada Inc.",
};

const contactMethods = [
  { label: "General enquiries", value: companyInfo.email, href: `mailto:${companyInfo.email}` },
  { label: "Frank Tawiah, Founder", value: companyInfo.founderEmail, href: `mailto:${companyInfo.founderEmail}` },
  { label: "Phone", value: companyInfo.phone, href: companyInfo.phoneHref },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Book a consultation"
        description="Tell us about your business. Every engagement starts with a conversation about where your business is today, your obligations and goals."
      />

      <section className="container-page grid gap-12 pt-2 pb-16 md:pb-20 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-start lg:gap-14 lg:pb-28">
        <ContactForm />

        <div className="flex flex-col gap-5">
          <h2 className="font-serif text-2xl leading-[30px] font-medium lg:text-[28px] lg:leading-[34px]">Direct details</h2>
          <ul className="grid border-t border-line md:grid-cols-3 md:gap-x-6 lg:grid-cols-1">
            {contactMethods.map((method) => (
              <li key={method.label} className="flex flex-col gap-1 border-b border-line py-5">
                <span className="text-eyebrow text-gold">{method.label}</span>
                <a href={method.href} className="break-words text-lg leading-7 transition-colors hover:text-gold">
                  {method.value}
                </a>
              </li>
            ))}
            {companyInfo.socialLinks.linkedin && (
              <li className="flex flex-col gap-1 border-b border-line py-5 md:col-span-3 lg:col-span-1">
                <span className="text-eyebrow text-gold">LinkedIn</span>
                <a
                  href={companyInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-lg leading-7 transition-colors hover:text-gold"
                >
                  Connect on LinkedIn
                  <ArrowUpRight className="h-4 w-4" />
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              </li>
            )}
          </ul>
          <p className="text-[15px] leading-6 text-muted">{companyInfo.name} is based in Ontario.</p>
        </div>
      </section>
    </>
  );
}
