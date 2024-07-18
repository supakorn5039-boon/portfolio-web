export interface NavType {
  id: number;
  name: string;
  path: string;
}

export const NavLinks: NavType[] = [
  {
    id: 1,
    name: "home",
    path: "/",
  },
  {
    id: 2,
    name: "services",
    path: "/services",
  },
  {
    id: 3,
    name: "resume",
    path: "/resume",
  },
  {
    id: 4,
    name: "work",
    path: "/work",
  },
  { id: 5, name: "contact", path: "/contact" },
];
