import type { IconName } from "@/components/shared/Icon";
import { CompanyInfo } from "@/types/company-info";

export const companyInfo: CompanyInfo = {
  name: "Afrique Advisors Canada Inc.",
  shortName: "Afrique Advisors",
  tagline: "Practical consulting for small businesses building in Canada",
  description:
    "Afrique Advisors Canada Inc. is an Ontario-based management and financial consulting firm for small and growing businesses. We help Canadian SMEs and international companies set up, stay compliant, keep clean books, file their taxes and plan for growth in the North American market.",
  mission:
    "To give small businesses and international entrants the structure, compliance and financial clarity they need to operate confidently in Canada.",
  vision:
    "To be the trusted first call for entrepreneurs and offshore companies building a presence in North America, and a bridge between Canadian and African markets alongside Core Afrique.",
  founded: 2021,
  domain: "afriqueadvisors.ca",
  url: "https://afriqueadvisors.ca",
  phone: "(647) 916-2020",
  phoneHref: "tel:+16479162020",
  email: "info@afriqueadvisors.ca",
  founderEmail: "frank@afriqueadvisors.ca",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/frank-tawiah-mba-cfa-54521119",
  },
};

export const sisterCompany = {
  name: "Core Afrique Investment Ltd",
  shortName: "Core Afrique",
  url: "https://coreafrique-website.vercel.app",
  region: "Accra, Ghana",
  description:
    "Investment advisory and blockchain education across African markets. Together, the two firms support capital, products and people moving between Africa and North America.",
};

export const web3Focus = {
  intro:
    "Afrique Advisors Canada Inc. (AACI) is a strong advocate for leveraging blockchain and Web3 technologies to drive:",
  items: [
    { title: "Financial inclusion and transparency" },
    { title: "Institutional adoption of digital assets" },
    { title: "Tokenized capital markets" },
    {
      title: "A Canadian dollar-backed stablecoin",
      description:
        "Supporting ventures seeking regulatory approval for a CAD-backed stablecoin, for cross-border payments for SMEs and lower-fee remittances for Canadian residents.",
    },
    {
      title: "Responsible virtual-asset education",
      description:
        "Developing curriculum and manuals to help promote responsible virtual-asset use in Canadian minority communities.",
    },
  ],
};

export const credentials = ["Operating since 2021", "Based in Ontario", "CFA", "MBA", "2 practice areas"];

export const differentiators = [
  {
    title: "One advisor, end to end",
    description:
      "From incorporation to year-end statements and T2 filing, you work with the same advisor who knows your business.",
  },
  {
    title: "Built for small businesses",
    description:
      "Right-sized engagements and plain-language advice without a big-firm price tag.",
  },
  {
    title: "A bridge for international entrants",
    description:
      "Resident director services and market research for offshore companies entering Canada, with ties to African markets through Core Afrique.",
  },
  {
    title: "Investment-grade financial thinking",
    description:
      "CFA and Schulich MBA training applied to your business plans, financial models and valuations.",
  },
];

export const audiences: { icon: IconName; title: string; description: string; href?: string }[] = [
  {
    icon: "building" as const,
    title: "Canadian small businesses",
    description:
      "Owners who need dependable bookkeeping, corporate tax filing and annual compliance handled properly.",
  },
  {
    icon: "globe" as const,
    title: "International & offshore companies",
    description:
      "Firms entering Canada that need an entity set up, a resident director and local market research.",
  },
  {
    icon: "growth" as const,
    title: "Founders & growing SMEs",
    description:
      "Entrepreneurs preparing business plans, financial models and funding or grant applications.",
  },
  {
    icon: "block" as const,
    title: "Blockchain & Web3 ventures",
    description:
      "Digital-asset, tokenization and stablecoin projects working towards regulatory approval and responsible adoption in Canada.",
    href: "/#blockchain",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    description: "A conversation about where your business is today, your obligations and goals.",
  },
  {
    step: "02",
    title: "Structure",
    description: "The right entity, accounting system and compliance calendar.",
  },
  {
    step: "03",
    title: "Maintain",
    description: "Ongoing bookkeeping, annual returns and corporate tax filings on schedule.",
  },
  {
    step: "04",
    title: "Grow",
    description: "Business plans, financial models and funding support.",
  },
];
