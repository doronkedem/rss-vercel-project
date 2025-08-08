const feedContent = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Early Pump Signals – Reddit Watch</title>
    <link>https://your-vercel-app.vercel.app/api/feed</link>
    <atom:link href="https://your-vercel-app.vercel.app/api/feed" rel="self" type="application/rss+xml" />
    <description>High-risk early-stage stock pump alerts</description>

    <item>
      <title>Watchlist: SINT – Microcap Volatility with $28 Target?</title>
      <link>https://finance.yahoo.com/quote/SINT/</link>
      <description>SINTX Technologies (SINT) is drawing attention. Trading around $2.83 with low float, extreme volatility, and a speculative analyst target of $28. Earnings expected Aug 19. Use caution — extremely high-risk.</description>
      <pubDate>Fri, 08 Aug 2025 14:40:00 +0000</pubDate>
      <guid isPermaLink="false">watch-sint-2025-08-08</guid>
    </item>

  </channel>
</rss>`;

export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/rss+xml');
  res.send(feedContent);
}
