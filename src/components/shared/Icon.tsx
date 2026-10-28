// Stroke icons used across the site (1.6 stroke, currentColor)
const paths = {
  building: "M3 21h18M5 21V8l7-4 7 4v13M9 21v-6h6v6",
  globe: "M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18",
  growth: "M3 17l6-6 4 4 8-8M15 7h6v6",
  house: "M4 20V10l8-6 8 6v10M9 20v-6h6v6",
  chart: "M4 20h16M7 20v-7M12 20V6M17 20v-10",
  block: "M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zM4 7.5l8 4.5 8-4.5M12 12v9",
} as const;

export type IconName = keyof typeof paths;

export function Icon({ name, className = "h-[26px] w-[26px]" }: { name: IconName; className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {name === "globe" && <circle cx="12" cy="12" r="9" />}
      <path d={paths[name]} />
    </svg>
  );
}

// Wraps an icon in the 52px bordered tile used on cards
export function IconTile({ name }: { name: IconName }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-line text-gold md:h-[52px] md:w-[52px]">
      <Icon name={name} />
    </div>
  );
}

export function ArrowRight({ className = "h-[18px] w-[18px]" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="#E9B949" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight({ className = "h-[18px] w-[18px]" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="#E9B949" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

export function CheckCircle({ className = "h-7 w-7", color = "#E9B949" }: { className?: string; color?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12.5l3 3 5-6" />
    </svg>
  );
}

export function AlertCircle({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="#F28B82" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 7v6M12 16.5v.01" />
    </svg>
  );
}

export function Diamond({ className = "h-2 w-2" }: { className?: string }) {
  return <span aria-hidden="true" className={`block shrink-0 rotate-45 bg-gold ${className}`} />;
}
