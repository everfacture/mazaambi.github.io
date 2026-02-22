export const SITE = {
  website: "https://everfacture.github.io/", // GitHub Pages domain
  author: "Everfacture",
  profile: "https://github.com/everfacture",
  desc: "Builder, trader, strategist, global hustler. Amateur agentic engineer sharing raw thoughts, British banter, and the ruthless reality of building with AI.",
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
