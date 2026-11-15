# FormReady (working name)

An open-source, browser-only batch file preparation tool. No installed app, account, document upload, or paid API required.

## Run locally (Windows, macOS, Linux)

Install Node.js 20+ and Python 3, then run:

```sh
git clone https://github.com/arindamsarkar/formready.git
cd formready
npm ci
npm run build
python -m http.server 8080 --directory dist
```

Open http://localhost:8080. On Windows use `py` instead of `python` if needed. Do not open index.html as a file URL: PDF modules need HTTP.

## Deploy on GitHub Pages

In the repository settings, open **Pages** and set **Source** to **GitHub Actions**.
The included `Deploy to GitHub Pages` workflow builds and publishes `dist` on pushes
to `main`, or when run manually from the Actions tab. It installs dependencies with
`npm ci` and runs `npm run build`, so the PDF and ZIP libraries are included in the
site without committing generated vendor files. No API keys or external hosting
account are needed. The deployed site is viewable by anyone.

For another static host, use `npm ci && npm run build` as the build command and
`dist` as the publish directory. Uploading the unbuilt `dist` directory will not work.

## Features
- Mixed PDF/JPG/PNG/WebP batches: 100 files, 25 MB each, 150 MB combined.
- Document/photo/signature groups; different per-file limits, measured in decimal KB.
- Image format conversion, quality search, optional dimensions with white letterboxing.
- Structure-preserving PDF rewrite; optional image-based compression for larger PDFs.
- Previews, individual downloads, ZIP with collision-safe filenames and JSON size report.
- Synthetic 22-file sample batch, accessible responsive layout, ten core-interface languages including RTL Arabic.
- All dependencies served locally; files are processed in browser memory.

## Honest limits
This is an MVP, not a guarantee of acceptance by any portal. Review readability and check the receiving website's rules. A size limit is strict (output is below, not equal to the limit). The UI flags impossible limits. Image-based PDF compression removes selectable text, links, forms and accessibility structure; it must be enabled explicitly. PDFs recognized as digitally signed are not rewritten. Encrypted/damaged PDFs are rejected. PDF rasterization is limited to 40 pages. Processing large batches can use substantial memory, especially on mobile. Core interface translations are initial drafts; advanced explanatory text and errors currently fall back to English. Manual cropping, saved presets, comprehensive localization and real-device compatibility testing remain planned.

## Contributing
Please use synthetic files in issues and tests. Never commit personal documents or secrets. Translation contributions are welcome in dist/app.js. Vendor assets can be rebuilt with scripts/vendor.mjs. No telemetry or external processing services should be introduced without explicit user-facing consent.

## License
MIT for original project code. Third-party packages retain their own licenses in dist/vendor. FormReady is a temporary name pending rebranding.
