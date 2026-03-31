Frontend Next.js du site vitrine de Christopher Robine.

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Analytics

Google Analytics is loaded only when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set.

Example:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## Notes

- Site metadata is configured in `src/app/layout.tsx`.
- The favicon is served from `src/app/icon.svg`.
- The Google tag is injected by `src/components/GoogleAnalytics.tsx`.
