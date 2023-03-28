const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

export default async (req, res) => {
  const links = [
    { url: "/", changefreq: "monthly", priority: 0.8 },
    { url: "/paslaugos/remontas", changefreq: "monthly", priority: 0.8 },
    { url: "/paslaugos/projektavimas", changefreq: "monthly", priority: 0.8 },
    { url: "/paslaugos/gamyba", changefreq: "monthly", priority: 0.8 },
    { url: "/paslaugos/automatika", changefreq: "monthly", priority: 0.8 },
    { url: "/apie", changefreq: "monthly", priority: 0.8 },
    { url: "/kontaktai", changefreq: "monthly", priority: 0.8 },
    { url: "/galerija", changefreq: "monthly", priority: 0.8 },
    { url: "/privatumas", changefreq: "monthly", priority: 0.3 },
  ];

  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};
