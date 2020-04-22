module.exports = {
  base: "/handbook/",
  title: "Engineering Handbook",
  description: "How we work at Holaluz Engineering",
  themeConfig: {
    logo: "/holaluz.png",
    lastUpdated: true,
    displayAllHeaders: true, // display all header links for every page
    editLinks: true,
    editLinkText: "Help us improve this page!",
    repo: "holaluz/handbook",
    sidebar: [
      "/",
      {
        title: "Organization",
        path: "/organization/",
        collapsable: false,
        children: [
          ["/organization/roles/", "Roles"],
          ["/organization/teams/", "Teams"],
        ],
      },
      {
        title: "Operative",
        path: "/operative/",
        collapsable: false,
      },
    ],
    nav: [{ text: "Contribute to the Handbook", link: "CONTRIBUTING" }],
  },
};
