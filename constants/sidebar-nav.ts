import type { NavItem } from '@/types';

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: 'dashboard',
    label: 'Dashboard',
    items: []
  },
  {
    title: 'Media',
    url: '/media',
    icon: 'media',
    label: 'Media',
    items: [
      {
        title: 'Music',
        icon: 'music',
        url: '/media/music'
      },
      {
        title: 'Movies',
        icon: 'movie',
        url: '/media/movie'
      }
    ]
  }
];
