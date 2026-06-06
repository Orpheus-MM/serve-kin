---
name: iteration-preview
description: Captures a screenshot of the current dev server page and saves it to design-iterations/YYYY-MM-DD-{page-name}/ with a notes file and changelog entry. Use when the user runs /iteration-preview, finishes a UI change, or wants to document a design iteration for collaboration and review.
---

# Iteration Preview

Snapshots a page's current visual state and archives it for design tracking and collaboration.

## Steps

1. **Identify the page** — ask which page/URL if not specified (e.g. `/`, `/signup`, `/interest`)
2. **Navigate browser** — go to the local dev server URL (default: `http://localhost:3001/{page}`)
3. **Take screenshot** — use the browser screenshot tool; embed the image in your response so the user sees it immediately
4. **Save screenshot file** — write the image to `design-iterations/YYYY-MM-DD-{page-name}/screenshot-N.png` where N increments if screenshots already exist in that folder
5. **Write notes.md** — create or append to `design-iterations/YYYY-MM-DD-{page-name}/notes.md` using the template below
6. **Update CHANGELOG.md** — append a row to `design-iterations/CHANGELOG.md` (create the file if it doesn't exist)

## Folder Structure

```
ServeKin/
└── design-iterations/
    ├── CHANGELOG.md
    ├── 2026-06-06-landing/
    │   ├── screenshot-1.png
    │   └── notes.md
    └── 2026-06-07-signup/
        ├── screenshot-1.png
        └── notes.md
```

## notes.md Template

```md
# {Page Name} — {YYYY-MM-DD}

## What changed
{1–3 sentences describing what was built or changed in this iteration}

## Screenshot
![{page-name} iteration {N}](./screenshot-{N}.png)
```

## CHANGELOG.md Format

If the file doesn't exist, create it with this header first:

```md
# ServeKin — Design Iteration Log

| Date | Page | Iteration | Notes |
|------|------|-----------|-------|
```

Then append a row for each new snapshot:

```md
| 2026-06-06 | landing | 1 | Initial hero — amber palette, Fraunces headline, ministry card preview |
```

## Rules

- Always show the screenshot inline in your response — don't just save it silently
- Use today's date for the folder name
- Never overwrite an existing screenshot — always increment N
- Keep notes concise: what changed and why, not a full design brief
- Commit the new files to git after saving if the user asks; otherwise just save them
