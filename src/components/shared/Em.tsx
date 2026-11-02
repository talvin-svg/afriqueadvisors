// The italic phrase in a heading. Gold on dark; sections can override --em (paper uses its accent)
export function Em({ children }: { children: React.ReactNode }) {
  return <em className="text-(--em,var(--color-gold)) italic">{children}</em>;
}
