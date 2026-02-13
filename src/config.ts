export const SITE = {
  website: "https://mazaambi.github.io/", // GitHub Pages domain
  author: "Mazaambi",
  profile: "https://github.com/mazaambi",
  desc: "Stream of consciousness on language learning, UFC, Manchester United, business ideas, and life lessons.",
  title: "Mazaambi",
  ogImage: "og-image.jpg",
  lightAndDarkMode: true,
  postPerIndex: 10,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/mazaambi/mazaambi.github.io/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "en",
  timezone: "Asia/Jakarta",
} as const;
