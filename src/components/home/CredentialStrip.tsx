import { credentials } from "@/lib/data/company";

// A ledger row: mono label over a serif figure. The 1px gap over a line-coloured ground draws the hairlines
export function CredentialStrip() {
  return (
    <section aria-label="Credentials" className="border-y border-line bg-surface">
      <div className="container-page">
        <dl className="grid grid-cols-2 gap-px bg-line md:grid-cols-3 lg:grid-cols-6">
          {credentials.map((item) => (
            <div key={item.label} className="flex flex-col gap-1.5 bg-surface px-4 py-5 lg:px-5 lg:py-7">
              <dt className="text-label text-muted">{item.label}</dt>
              <dd className="font-serif text-xl leading-7 font-medium md:text-2xl md:leading-8">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
