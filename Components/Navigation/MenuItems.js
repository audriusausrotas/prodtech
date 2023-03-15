export const menuItems = [
  {
    name: "LT",
    items: [
      {
        title: "paslaugos",
        link: "/",
        subMenu: [
          { title: "produkcija", link: "/services/production" },
          { title: "taisymas", link: "/services/repair" },
          { title: "robotika", link: "/services/robotics" },
          { title: "kazkas", link: "/services/something" },
        ],
      },
      { title: "galerija", link: "/gallery" },
      { title: "apie mus", link: "/about" },
      { title: "kontaktai", link: "/contacts" },
    ],
  },
  {
    name: "EN",
    items: [
      {
        title: "services",
        link: "/",
        subMenu: [
          { title: "production", link: "/services/production" },
          { title: "repair", link: "/services/repair" },
          { title: "robotics", link: "/services/robotics" },
          { title: "something", link: "/services/something" },
        ],
      },
      { title: "gallery", link: "/gallery" },
      { title: "about us", link: "/about" },
      { title: "contacts", link: "/contacts" },
    ],
  },
];
