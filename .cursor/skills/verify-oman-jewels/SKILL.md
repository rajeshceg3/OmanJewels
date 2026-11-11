# Verify OmanJewels
Oman's Wonders - Oman travel showcase (vite React client + express/drizzle server).
## Launch
npm install; npm run dev for the full stack (tsx server), or npm run build && npm start.
## Doctor
`python3 .cursor/skills/verify-oman-jewels/verify.py`
## Drive
Builds the client and server bundles, then renders the built client (dist/public) in headless Chromium asserting the boot marker and zero JS console errors.
## Evidence
`.cursor/skills/verify-oman-jewels/evidence.json`
## Cleanup
Static server terminated after the render.
## Known boundaries
Render smoke only; scene quality and e2e suites not exercised here.
