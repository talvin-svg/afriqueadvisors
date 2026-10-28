import { TeamMember } from "@/types/company-info";
import { withBasePath } from "@/lib/utils/withBasePath";

export const founder: TeamMember = {
  name: "Frank Tawiah, MBA, CFA",
  role: "Founder & Consultant",
  image: withBasePath("/images/team/frank-tawiah.jpg"),
  email: "frank@afriqueadvisors.ca",
  linkedinUrl: "https://www.linkedin.com/in/frank-tawiah-mba-cfa-54521119",
  bio: [
    "Frank founded Afrique Advisors Canada Inc. in 2021 to give small businesses and international entrants practical help with setup, compliance and finance in Canada.",
    "He holds an MBA from the Schulich School of Business at York University and is a CFA charterholder, with a background in financial markets, regulatory consulting and teaching.",
    "He is also CEO of sister firm Core Afrique Investment Ltd in Ghana.",
  ],
  qualifications: [
    { title: "CFA Charterholder" },
    { title: "MBA", detail: "Schulich School of Business, York University" },
    { title: "Canadian Securities Course" },
    { title: "Bilingual", detail: "English / French" },
  ],
};
