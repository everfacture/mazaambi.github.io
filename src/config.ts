export const SITE = {
  website: "https://everfacture.github.io/", // GitHub Pages domain
  author: "Everfacture",
  profile: "https://github.com/everfacture",
  desc: "noob agentic engineer",
  title: "Everfacture",
  ogImage: "og.png",
  lightAndDarkMode: true,
  postPerIndex: 10,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/everfacture/everfacture.github.io/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "en",
  timezone: "Asia/Jakarta",
} as const;
