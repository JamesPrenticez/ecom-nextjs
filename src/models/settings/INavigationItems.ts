import { type ReactNode } from 'react'

export interface INavigationItem {
  name: string;
  slug: string;
  icon: ReactNode;
  requiresAuth: boolean;
}