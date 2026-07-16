# Joseph Sfeir — Portfolio

A photo-led, multi-route portfolio for Joseph Sfeir, built with Next.js App
Router, TypeScript, and Tailwind CSS. The custom domain is deployed through
Vercel, while the project also retains its vinext / Cloudflare Sites build.

## Local development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

## Content model

Shared identity, project, capability, education, and experience content lives in
`lib/site-data.ts`. Project pages reuse the case-study primitives in
`components/case-study.tsx`, while project-specific diagrams remain clearly
labeled as conceptual maps rather than product screenshots.

The portfolio does not require a database, object storage, authentication, or
runtime secrets. `vercel.json` selects the native Next.js production build for
the custom domain; the existing vinext build remains available for Sites.
