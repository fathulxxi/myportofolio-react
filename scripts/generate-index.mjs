import { readdir, writeFile } from "fs/promises";
import { join, resolve } from "path";

const assetsDir = resolve(".output/public/assets");
const outputDir = resolve(".output/public");

const assets = await readdir(assetsDir);

const cssFile = assets.find((f) => f.startsWith("styles-") && f.endsWith(".css"));
const jsEntry = assets.find((f) => f.startsWith("index-") && f.endsWith(".js"));

if (!cssFile || !jsEntry) {
  console.error("Could not find built assets:", assets);
  process.exit(1);
}

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>M. Fathul Ilham — Full-Stack Web Developer</title>
    <meta name="description" content="Portfolio of M. Fathul Ilham, a Full-Stack Web Developer building modern web apps with React, TypeScript, and Next.js." />
    <meta name="author" content="M. Fathul Ilham" />
    <meta property="og:title" content="M. Fathul Ilham — Full-Stack Web Developer" />
    <meta property="og:description" content="Full-Stack Web Developer based in Makassar, Indonesia. React, TypeScript, Next.js, and AI-native development." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" />
    <link rel="stylesheet" href="/assets/${cssFile}" />
  </head>
  <body>
    <script type="module" src="/assets/${jsEntry}"></script>
  </body>
</html>
`;

await writeFile(join(outputDir, "index.html"), html);
console.log(`[generate-index] index.html → ${cssFile} + ${jsEntry}`);
