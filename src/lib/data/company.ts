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
    { tag: "Inclusion", title: "Financial inclusion and transparency" },
    { tag: "Adoption", title: "Institutional adoption of digital assets" },
    { tag: "Markets", title: "Tokenized capital markets" },
    {
      tag: "Payments",
      title: "A Canadian dollar-backed stablecoin",
      description:
        "Supporting ventures seeking regulatory approval for a CAD-backed stablecoin, for cross-border payments for SMEs and lower-fee remittances for Canadian residents.",
    },
    {
      tag: "Education",
      title: "Responsible virtual-asset education",
      description:
        "Developing curriculum and manuals to help promote responsible virtual-asset use in Canadian minority communities.",
    },
  ],
};

export const credentials = [
  { label: "Est.", value: "2021" },
  { label: "Based in", value: "Ontario" },
  { label: "Charter", value: "CFA" },
  { label: "Degree", value: "MBA, Schulich" },
  { label: "Practices", value: "2" },
  { label: "Focus", value: "Fintech & Web3" },
];

// Why us, set out as a comparison with a typical arrangement
export const comparison = [
  {
    topic: "Who you work with",
    typical: "Passed between juniors, managers and partners",
    ours: "One advisor, from incorporation to year-end",
  },
  {
    topic: "Pricing",
    typical: "Big-firm rates and long retainers",
    ours: "Engagements sized for a small business",
  },
  {
    topic: "Financial thinking",
    typical: "Data entry and filing only",
    ours: "CFA and Schulich MBA training behind every plan, model and valuation",
  },
  {
    topic: "Entering Canada",
    typical: "Domestic clients first",
    ours: "Resident director services and market research for international companies",
  },
  {
    topic: "Digital assets",
    typical: "Out of scope",
    ours: "Hands-on with blockchain, tokenization and stablecoin ventures",
  },
];

export const audiences: {
  id: string;
  short: string;
  title: string;
  description: string;
  handles: string[];
  firstStep: string;
  href?: string;
}[] = [
  {
    id: "small-business",
    short: "Small businesses",
    title: "Canadian small businesses",
    description:
      "Owners who need dependable bookkeeping, corporate tax filing and annual compliance handled properly.",
    handles: [
      "Sage 50 accounting setup",
      "Ongoing bookkeeping",
      "Year-end financial statements",
      "T2 corporate tax return",
      "Ontario annual return",
    ],
    firstStep: "A review of your books and the filing deadlines in your year ahead.",
  },
  {
    id: "international",
    short: "International companies",
    title: "International & offshore companies",
    description:
      "Firms entering Canada that need an entity set up, a resident director and local market research.",
    handles: [
      "Choosing a structure and incorporating",
      "Canadian resident director",
      "Market entry research",
      "Accounting system setup",
      "Annual returns and compliance",
    ],
    firstStep: "A call on your structure options and what a Canadian entity needs before it can trade.",
  },
  {
    id: "founders",
    short: "Founders & SMEs",
    title: "Founders & growing SMEs",
    description:
      "Entrepreneurs preparing business plans, financial models and funding or grant applications.",
    handles: [
      "Lender- and investor-ready business plan",
      "Revenue forecasts and projected statements",
      "Business valuation",
      "Funding and grant applications",
    ],
    firstStep: "A working session on your plan, your numbers and which funding programs fit.",
  },
  {
    id: "web3",
    short: "Blockchain & Web3",
    title: "Blockchain & Web3 ventures",
    description:
      "Digital-asset, tokenization and stablecoin projects working towards regulatory approval and responsible adoption in Canada.",
    handles: [
      "Support for ventures seeking regulatory approval",
      "Business plans and financial models for tokenization projects",
      "Corporate setup and compliance in Canada",
      "Responsible virtual-asset education",
    ],
    firstStep: "A conversation about your venture, where it stands with regulators and the support that fits.",
    href: "/#blockchain",
  },
];

export const processSteps = [
  {
    step: "01",
    when: "Week 1",
    title: "Discover",
    description: "A conversation about where your business is today, your obligations and goals.",
  },
  {
    step: "02",
    when: "Month 1",
    title: "Structure",
    description: "The right entity, accounting system and compliance calendar.",
  },
  {
    step: "03",
    when: "Every month",
    title: "Maintain",
    description: "Ongoing bookkeeping, annual returns and corporate tax filings on schedule.",
  },
  {
    step: "04",
    when: "Year-end onwards",
    title: "Grow",
    description: "Business plans, financial models and funding support.",
  },
];
