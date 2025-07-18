export interface NavType {
  id: number;
  name: string;
  path: string;
}

export const NavLinks: NavType[] = [
  {
    id: 1,
    name: 'home',
    path: '/',
  },
  {
    id: 2,
    name: 'experience',
    path: '/experience',
  },
  {
    id: 3,
    name: 'skills',
    path: '/skills',
  },
];
