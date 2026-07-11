# Visio Sonics Content Standard

## Purpose

Every page exposes structured content.

Components render content.

Components do not own business copy.

---

# Hero

Every page hero follows the same interface.

```ts
{
  eyebrow: string;
  title: string;
  description: string;

  primaryButton: {
    label: string;
    href: string;
  };

  secondaryButton?: {
    label: string;
    href: string;
  };
}
```

---

# Narrative Sections

```ts
{
  heading: string;

  paragraphs: string[];
}
```

---

# Feature Lists

```ts
{
  title: string;
  description: string;
}
```

---

# CTA

```ts
{
  eyebrow: string;
  title: string;
  description: string;

  primaryButton: { ... }

  secondaryButton?: { ... }
}
```

---

# Rule

Content files should contain:

- text
- labels
- URLs
- ordering

Content files should never contain:

- Tailwind classes
- JSX
- Components
- Business logic