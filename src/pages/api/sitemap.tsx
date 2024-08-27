import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

type SitemapLink = {
  url: string;
  changefreq?: string; // Optional property
  priority?: number; // Optional property
};

export default async (req: any, res: any) => {
  // An array with your links (typed as SitemapLink[])
  const links: SitemapLink[] = [
    { url: "/", changefreq: "weekly", priority: 1 },
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};