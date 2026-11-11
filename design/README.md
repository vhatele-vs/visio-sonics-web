# Visio Sonics Design System

This directory contains the design language for the Visio Sonics Platform.

## Principles

The active palette lives in `styles/tokens.css`. Tailwind v4 maps those CSS
variables in `app/globals.css`; `design/tokens/colors.ts` exports references to
the same variables. Update the CSS tokens to change the palette across the site.

The visual system uses near-black backgrounds, neutral raised surfaces, white
headings, muted body text, and the logo's amber (`#E18C14`) for actions and labels.
Primary actions use dark text on amber. Inter is used for body and navigation;
Fraunces is used for display headings.

Use `components/layout/Container`, `Section`, and `Heading` for content. All inner
pages start with `components/ui/PageHero`; closing consultation sections use
`components/ui/CTASection`. Header, main landmark, skip link, and footer belong
to `app/(site)/layout.tsx`, so pages must not mount their own copies.

- Design tokens are the single source of truth.
- Components consume tokens.
- Pages consume components.
- Pages must never define their own design language.

## Architecture

design/
└── tokens/

## Rules

1. Never hard-code spacing where a spacing token exists.
2. Never hard-code typography where typography tokens exist.
3. Never duplicate container widths.
4. Extend tokens before introducing exceptions.
