import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// ✅ fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Import your JS data files
 
import { products } from "../src/utils/products-data.js";

// If you have categories inside utils.js or another file, import that too
// Example: import categories from "../src/utils/categories.js";

// ✅ Your domain
const BASE_URL = "https://www.vayucleantechnologies.com";

// ✅ Collect URLs
let urls = [];
urls.push(`${BASE_URL}/`);
urls.push(`${BASE_URL}/categories`);
urls.push(`${BASE_URL}/about`);
urls.push(`${BASE_URL}/contact`);

// ✅ If you have categories
// categories.forEach((cat) => {
//   urls.push(`${BASE_URL}/category/${cat.slug}`);
// });

// ✅ Add product pages
products.forEach((p) => {
  urls.push(`${BASE_URL}/category/${p.categorySlug}/${p.slug}`);
});

// ✅ Build XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
  <url>
    <loc>${url}</loc>
  </url>`
    )
    .join("")}
</urlset>`;

// ✅ Save to /public/sitemap.xml
fs.writeFileSync(path.resolve(__dirname, "../public/sitemap.xml"), sitemap, "utf8");

console.log("✅ Sitemap generated!");
