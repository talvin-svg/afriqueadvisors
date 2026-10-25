import { ServiceCategory } from "@/types/company-info";

export const managementConsulting: ServiceCategory = {
  slug: "management-consulting",
  title: "Management Consulting",
  eyebrow: "Set up. Stay compliant. Grow.",
  summary:
    "Business setup in Canada, resident director services, corporate compliance, business plans, funding support and market entry research.",
  overview:
    "Starting or expanding a business in Canada comes with structural and regulatory decisions that are hard to undo. We help local founders and international companies get the foundations right, keep up with ongoing obligations, and plan for growth.",
  href: "/services/management-consulting",
  items: [
    {
      title: "Business Structuring & Setup",
      description:
        "Incorporating and registering new businesses in Canada, choosing the right structure, and getting operations ready to trade.",
    },
    {
      title: "Resident Director Services",
      description:
        "Acting as a Canadian resident director for offshore and international entities that need local representation.",
    },
    {
      title: "Annual Returns & Corporate Compliance",
      description:
        "Filing Ontario annual returns and keeping on top of ongoing corporate compliance duties so nothing slips.",
    },
    {
      title: "Business Plan Development",
      description:
        "Clear, investor- and lender-ready business plans grounded in realistic assumptions about your market.",
    },
    {
      title: "Funding & Grant Sourcing",
      description:
        "Helping SMEs identify and apply for funding and government grant programs that fit their business.",
    },
    {
      title: "Canadian Market Entry Research",
      description:
        "Market research for offshore companies looking to bring products into the Canadian market.",
    },
  ],
  outcomes: [
    "A properly registered Canadian entity",
    "Local resident director representation",
    "Annual filings submitted on time",
    "A business plan you can take to lenders and investors",
  ],
};

export const financialAdvisory: ServiceCategory = {
  slug: "financial-advisory",
  title: "Financial Advisory",
  eyebrow: "Clean books. Clear numbers. Filed on time.",
  summary:
    "Sage 50 setup, bookkeeping, year-end financial statements, T2 corporate tax filing, tax compliance guidance and financial modelling.",
  overview:
    "Good financial records are the backbone of a healthy business. We design and run your accounting, prepare year-end statements, file corporate taxes, and build the financial models you need to make decisions and raise capital.",
  href: "/services/financial-advisory",
  items: [
    {
      title: "Accounting System Setup",
      description:
        "Designing and setting up Sage 50 Premium Accounting (cloud) around how your business actually runs.",
    },
    {
      title: "Bookkeeping & Year-End Statements",
      description:
        "Ongoing bookkeeping and preparation of year-end financial statements you can rely on.",
    },
    {
      title: "T2 Corporate Tax Filing",
      description:
        "Preparing and filing T2 corporate income tax returns, including Schedule 9 and Schedule 50.",
    },
    {
      title: "Tax Compliance Guidance",
      description:
        "Helping businesses navigate the maze of Canadian tax compliance with practical, plain-language advice.",
    },
    {
      title: "Financial Modelling & Valuation",
      description:
        "Revenue forecasts, projected financial statements and business valuations to support planning and fundraising.",
    },
  ],
  outcomes: [
    "An accounting system set up for your business",
    "Accurate books and year-end statements",
    "T2 returns filed with the right schedules",
    "Financial models that support real decisions",
  ],
};

export const serviceCategories = [managementConsulting, financialAdvisory];
