import { Diamond } from "@/components/shared/Icon";
import { KenteDivider } from "@/components/shared/Kente";
import { credentials } from "@/lib/data/company";
import { cn } from "@/lib/utils/cn";

export function CredentialStrip() {
  return (
    <section aria-label="Credentials">
      <KenteDivider />
      <div className="border-b border-line bg-surface">
        <ul className="container-page grid grid-cols-2 gap-2.5 py-6 md:flex md:flex-wrap md:justify-center md:gap-3 lg:py-7">
          {credentials.map((label, i) => (
            <li
              key={label}
              className={cn(
                "flex min-h-11 items-center gap-2.5 rounded-full border border-line bg-ink px-3.5 text-sm font-medium md:px-5 md:text-base",
                i === credentials.length - 1 && "col-span-2"
              )}
            >
              <Diamond />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
