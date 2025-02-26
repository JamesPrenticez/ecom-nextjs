import React, { type ReactNode } from "react";
import { Grid2X2Icon, HomeIcon, InfoIcon } from "lucide-react";
import { INavigationItem } from "@/models";

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

export const navigationItems: INavigationItem[] = [
  { name: "Home", slug: "/", icon: <HomeIcon />, requiresAuth: false },
  { name: "Products", slug: "/products", icon: <Grid2X2Icon />, requiresAuth: false },
  { name: "About", slug: "/about", icon: <InfoIcon />,  requiresAuth: false },
];

interface IFooterItems {
  name: string;
  children: IFooterItemsChildren[]
}

interface IFooterItemsChildren {
  name: string;
  slug: string;
}

export const footerItems: IFooterItems[] = [
  { 
    name: "Customer Service",
    children: [
      { name: "Track My Order", slug: "/track-my-order" },
      { name: "Return My Order", slug: "/return-my-order" },
      { name: "Contact Us", slug: "/contact-us" },
      { name: "Terms & Conditions", slug: "/terms-and-conditions" },
      { name: "FAQ", slug: "/faq" },
    ]
  },
  {
    name: "About",
    children: [
      { name: "Our Mission", slug: "/mission" },
      { name: "Blog", slug: "/blog" },
      { name: "News Letter", slug: "/news-letter" },
      { name: "Reviews", slug: "/reviews" },
    ]
  },
  {
    name: "Policies",
    children: [
      { name: "Privacy & Cookie Policy", slug: "/privacy-policy" },
      { name: "Return Policy", slug: "/return-policy" },
      { name: "Review Guidelines", slug: "/review-guidelines" },
      { name: "Terms & Conditions", slug: "/terms-and-conditions" },
    ]
  },
]

interface ISocialLinks {
  name: string;
  url: string;
}

export const socialLinks = [
  { name: "Facebook", url: "https://www.facebook.com/"},
  { name: "Instagram", url: "https://www.instagram.com/"},
]
