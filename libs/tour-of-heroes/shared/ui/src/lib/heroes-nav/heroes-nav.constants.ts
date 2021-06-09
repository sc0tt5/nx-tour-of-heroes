import { NavigationItem } from './heroes-nav.interface';

const HERO_LIST: NavigationItem = {
  href: '/heroes',
  name: 'Heroes',
  path: ['heroes']
};

const HERO_NEW: NavigationItem = {
  href: '/hero/new',
  name: 'New Hero',
  path: ['hero', 'new']
};

const HERO_SEARCH: NavigationItem = {
  href: '/heroes/search',
  name: 'Dashboard',
  path: ['heroes', 'search']
};

export const NAV = {
  HERO_LIST,
  HERO_NEW,
  HERO_SEARCH
};
