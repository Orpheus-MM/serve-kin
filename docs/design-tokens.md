# ServeKin — Design Tokens

## Aesthetic Direction

**Playful & Approachable** — warm citrus palette, rounded corners, friendly typography, welcoming to all ages.
The feel: a community bulletin board that's been beautifully designed. Energetic but not chaotic. Faithful but not stiff.

---

## Color Palette

```css
/* Primary — Saffron/Amber */
--color-primary-50:  #fffbeb;
--color-primary-100: #fef3c7;
--color-primary-200: #fde68a;
--color-primary-300: #fcd34d;
--color-primary-400: #fbbf24;
--color-primary-500: #f59e0b;   /* Main brand color */
--color-primary-600: #d97706;   /* Hover states */
--color-primary-700: #b45309;   /* Active/pressed */
--color-primary-800: #92400e;
--color-primary-900: #78350f;

/* Accent — Coral/Warm Red */
--color-accent-400: #fb7185;
--color-accent-500: #f43f5e;    /* CTAs, badges, highlights */
--color-accent-600: #e11d48;    /* Hover on accent */

/* Neutral — Warm Cream/Linen */
--color-bg-base:    #fffdf7;    /* Page background */
--color-bg-surface: #fef9ec;    /* Card backgrounds */
--color-bg-muted:   #fef3c7;    /* Subtle fills */
--color-border:     #f3e8c8;    /* Dividers, input borders */

/* Text */
--color-text-primary:   #1c1917;   /* Near-black, warm undertone */
--color-text-secondary: #78716c;   /* Muted body text */
--color-text-inverse:   #fffdf7;   /* On dark/primary backgrounds */

/* Semantic */
--color-success: #16a34a;
--color-warning: #d97706;
--color-error:   #dc2626;
--color-info:    #0284c7;
```

---

## Typography

### Font Families

| Role | Font | Source |
|---|---|---|
| Display / Headings | **Fraunces** | Google Fonts — optical-size variable serif, warm and characterful |
| Body / UI | **Nunito** | Google Fonts — rounded, friendly, highly legible |
| Mono (code/data) | **JetBrains Mono** | Google Fonts — clean, compact |

### Scale

```css
--font-display: 'Fraunces', Georgia, serif;
--font-body:    'Nunito', system-ui, sans-serif;
--font-mono:    'JetBrains Mono', monospace;

/* Size scale */
--text-xs:   0.75rem;    /* 12px */
--text-sm:   0.875rem;   /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg:   1.125rem;   /* 18px */
--text-xl:   1.25rem;    /* 20px */
--text-2xl:  1.5rem;     /* 24px */
--text-3xl:  1.875rem;   /* 30px */
--text-4xl:  2.25rem;    /* 36px */
--text-5xl:  3rem;       /* 48px */

/* Weight */
--font-normal:    400;
--font-medium:    500;
--font-semibold:  600;
--font-bold:      700;
--font-black:     900;   /* For display headings */

/* Leading */
--leading-tight:  1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
```

### Usage

| Element | Font | Size | Weight |
|---|---|---|---|
| Hero headline | Fraunces | 5xl | Black (900) |
| Section heading | Fraunces | 3xl–4xl | Bold (700) |
| Card title | Fraunces | xl–2xl | Semibold (600) |
| Body text | Nunito | base | Normal (400) |
| UI labels | Nunito | sm | Medium (500) |
| Buttons | Nunito | sm–base | Bold (700) |
| Captions | Nunito | xs | Normal (400) |

---

## Spacing & Layout

```css
/* Base unit: 4px */
--space-1:  0.25rem;   /* 4px */
--space-2:  0.5rem;    /* 8px */
--space-3:  0.75rem;   /* 12px */
--space-4:  1rem;      /* 16px */
--space-5:  1.25rem;   /* 20px */
--space-6:  1.5rem;    /* 24px */
--space-8:  2rem;      /* 32px */
--space-10: 2.5rem;    /* 40px */
--space-12: 3rem;      /* 48px */
--space-16: 4rem;      /* 64px */
--space-20: 5rem;      /* 80px */
--space-24: 6rem;      /* 96px */

/* Max widths */
--max-w-content: 72rem;   /* 1152px — main content */
--max-w-prose:   65ch;    /* Readable text columns */
--max-w-form:    32rem;   /* Auth/form pages */
```

---

## Border Radius

```css
--radius-sm:   0.375rem;   /* 6px — badges, tags */
--radius-md:   0.75rem;    /* 12px — inputs, buttons */
--radius-lg:   1rem;       /* 16px — cards */
--radius-xl:   1.5rem;     /* 24px — modals, panels */
--radius-full: 9999px;     /* Pills, avatars */
```

Lean rounded — consistent with playful/approachable direction.

---

## Shadows

```css
--shadow-sm:  0 1px 3px rgba(120, 53, 15, 0.08);
--shadow-md:  0 4px 12px rgba(120, 53, 15, 0.10);
--shadow-lg:  0 8px 24px rgba(120, 53, 15, 0.12);
--shadow-xl:  0 16px 48px rgba(120, 53, 15, 0.14);
```

Warm-tinted shadows (amber-brown undertone) to match the palette.

---

## Motion

```css
--duration-fast:   150ms;
--duration-normal: 250ms;
--duration-slow:   400ms;

--ease-out:    cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);  /* Playful spring for modals/pop-ins */
```

---

## Component Conventions

### Buttons

| Variant | Background | Text | Border |
|---|---|---|---|
| Primary | `primary-500` | `text-inverse` | none |
| Primary hover | `primary-600` | `text-inverse` | none |
| Secondary | `bg-surface` | `text-primary` | `border` |
| Danger | `accent-500` | `text-inverse` | none |
| Ghost | transparent | `primary-600` | none |

All buttons: `radius-md`, `font-bold`, `duration-fast` transition.

### Inputs

- Background: `bg-base`
- Border: `border` (color-border)
- Focus border: `primary-500`
- Focus ring: `primary-200` at 50% opacity
- Radius: `radius-md`
- Placeholder: `text-secondary`

### Cards

- Background: `bg-surface`
- Border: 1px `color-border`
- Radius: `radius-lg`
- Shadow: `shadow-md`
- Hover: `shadow-lg` + 2px translateY(-2px)

---

## Google Fonts Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;0,9..144,900;1,9..144,400&family=Nunito:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

---

*Design tokens v1.0 — ServeKin Phase 0*
