import { LucideIcon } from 'lucide-react';

export interface NavItem {
  title: string;
  url?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: LucideIcon;
  label?: string;
  description?: string;
  hidden?: boolean;
  isActive?: boolean;
  items?: {
    title: string;
    url: string;
  }[];
}
