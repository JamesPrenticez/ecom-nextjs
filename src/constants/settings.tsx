import { type ReactNode } from "react";
import { Grid2X2Icon, InfoIcon } from "lucide-react";

export const project = {
  name: "Seaquent",
  // name: "Saltique",
  // name: "Seabourne",
  description: "he Best Online Shopping Experience!",

  email: {
    fromName: "Seaquent",
    fromAddress: "onboarding@resend.dev", // only works when sending to jamesprenticez@gmail.com for spam protection purposes
  }
};

export const hero = {
  title: "BLACK FRIDAY",
  subtitle: "30% Off Sitewide!*"
}

export const navigationPages: {name: string, slug: string, icon: ReactNode}[] = [
  { name: "products", slug: "/products", icon: <Grid2X2Icon />},
  { name: "about", slug: "/about", icon: <InfoIcon /> },
];
