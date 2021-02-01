import robotstxt from "generate-robotstxt";

module.exports = {
  policy: [
    {
      userAgent: "Googlebot",
      allow: "/",
      disallow: ["/search"],
      crawlDelay: 2,
    },
    {
      userAgent: "OtherBot",
      allow: ["/allow-for-all-bots", "/allow-only-for-other-bot"],
      disallow: ["/admin", "/login"],
      crawlDelay: 2,
    },
    {
      userAgent: "*",
      allow: "/",
      disallow: "/search",
      crawlDelay: 10,
      cleanParam: "ref /articles/",
    },
  ],
  host: "http://defacethehouse.com",
};