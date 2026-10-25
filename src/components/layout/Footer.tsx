import { KenteDivider } from "@/components/shared/Kente";
import { Logo } from "@/components/shared/Logo";
import { companyInfo, sisterCompany } from "@/lib/data/company";
import Link from "next/link";

const navigate = [
  { href: "/about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const heading = "text-eyebrow text-gold";
const link = "transition-colors hover:text-gold";

export function Footer() {
  return (
    <footer>
      <KenteDivider />
      <div className="container-page grid gap-10 pt-14 pb-8 md:grid-cols-2 md:gap-12 lg:grid-cols-[1.4fr_1fr_1.4fr_1fr] lg:pt-[72px]">
        <div className="flex flex-col gap-4">
          <Link href="/" aria-label="Afrique Advisors home" className="self-start">
            <Logo />
          </Link>
          <p className="max-w-[280px] text-[15px] leading-6 text-muted">
            Practical consulting for small businesses building in Canada.
          </p>
        </div>

        <div className="flex flex-col gap-3.5">
          <h2 className={heading}>Navigate</h2>
          {navigate.map((item) => (
            <Link key={item.href} href={item.href} className={link}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3.5">
          <h2 className={heading}>Contact</h2>
          <a href={`mailto:${companyInfo.email}`} className={link}>
            {companyInfo.email}
          </a>
          <p className="leading-6">
            Frank Tawiah, Founder
            <br />
            <a href={`mailto:${companyInfo.founderEmail}`} className="text-muted transition-colors hover:text-gold">
              {companyInfo.founderEmail}
            </a>
          </p>
          <a href={companyInfo.phoneHref} className={link}>
            {companyInfo.phone}
          </a>
        </div>

        <div className="flex flex-col gap-3.5">
          <h2 className={heading}>Follow</h2>
          {companyInfo.socialLinks.linkedin && (
            <a href={companyInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className={link}>
              LinkedIn<span className="sr-only"> (opens in new tab)</span>
            </a>
          )}
        </div>
      </div>

      <div className="container-page pb-10">
        <div className="flex flex-col gap-2 border-t border-line pt-6 text-sm leading-[22px] text-muted md:flex-row md:justify-between">
          <p>&copy; {companyInfo.name}</p>
          <p>
            Sister company:{" "}
            <a href={sisterCompany.url} target="_blank" rel="noopener noreferrer" className="text-fg transition-colors hover:text-gold">
              {sisterCompany.name}
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
