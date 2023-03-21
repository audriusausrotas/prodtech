export const menuItems = [
  {
    name: "LT",
    items: [
      {
        title: "paslaugos",
        link: "/",
        subMenu: [
          { title: "projektavimas", link: "/services/designing" },
          { title: "gamyba", link: "/services/production" },
          {
            title: "automatika ir robotizavimas",
            link: "/services/automation",
          },
          {
            title: "remontas ir techninė priežiura",
            link: "/services/repair",
          },
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
          { title: "designing", link: "/services/designing" },
          { title: "production", link: "/services/production" },
          { title: "automation and robotics", link: "/services/automation" },
          { title: "repair and maintenance", link: "/services/repair" },
        ],
      },
      { title: "gallery", link: "/gallery" },
      { title: "about us", link: "/about" },
      { title: "contacts", link: "/contacts" },
    ],
  },
];
