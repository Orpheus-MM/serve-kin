# ServeKin — Project Chat Log

A running summary of design decisions, brainstorming, and build progress from our working sessions.

---

## Session 1 — June 6, 2026

### Brainstorming & Project Definition

**Started with:** A vision for a church volunteering website with a large feature list including a volunteer board, application portal, auth, scheduler, learning hub, post creation, and ministry profiles.

**Key decisions made:**

- **Platform name:** ServeKin — a blend of "serve" (active service) and "kin" (community, belonging)
- **Mission statement:** *"ServeKin is a volunteering platform built for churches — helping ministries connect with their community, fill meaningful roles, and grow a culture of service."*
- **Tech stack:** Next.js + TypeScript + Tailwind CSS (frontend/backend), Supabase (database/auth/storage), Resend (email), Cloudflare Turnstile (bot protection), Vercel (hosting) — all free tier
- **Church size:** Large — 1,000+ members, 15+ ministries
- **Access model:** Open registration — anyone can create an account, no hard membership gate
- **Budget:** No budget — free tiers only
- **Timeline:** Soft goal — Phase 0 live within a few months

**Gaps identified (not in original spec):**
- Notification system (email/SMS for applications, acceptance, shifts)
- Organizer approval/rejection workflow
- Admin hierarchy and permission system
- Prerequisite gating for sensitive volunteer roles

---

### Phased Roadmap

| Phase | Goal | Key Features |
|---|---|---|
| **Phase 0** | Volunteer interest form | Signup/login, interest form (pick 1–5 ministries), admin view of submissions |
| **Phase 1 (MVP)** | Full volunteer board | Ministry profiles, opportunity posts, search/filter, apply, organizer dashboard, email notifications |
| **Phase 2 (MVP+)** | Richer experience | Volunteer dashboard, scheduler, learning hub, prerequisite gating, full admin panel |
| **Phase 3** | Community & scale | Recognition system, analytics, bulk messaging, PWA, recurring opportunities |

---

### Design System

**Aesthetic direction:** Playful & approachable — warm citrus palette, rounded corners, friendly typography

| Token | Value |
|---|---|
| Primary color | Saffron/amber `#f59e0b` |
| Accent color | Coral `#f43f5e` |
| Background | Warm cream `#fffdf7` |
| Display font | Fraunces (optical-size variable serif) |
| Body font | Nunito (rounded, friendly) |

Full token spec: [`docs/design-tokens.md`](./design-tokens.md)

---

### Build Progress

#### Infrastructure (Track 1 — In Progress)
- [x] Next.js 15 + TypeScript + Tailwind CSS scaffolded
- [x] GitHub repo connected: [github.com/Orpheus-MM/serve-kin](https://github.com/Orpheus-MM/serve-kin)
- [x] Dev server running on `localhost:3001`
- [ ] Supabase project (needs API keys)
- [ ] Vercel deployment (needs Supabase keys first)
- [ ] Resend account + domain verification
- [ ] Cloudflare Turnstile keys

#### Pages Built
- [x] `/` — Landing page (hero, how it works, CTA banner, footer)

#### Pages To Build
- [ ] `/signup`
- [ ] `/verify-email`
- [ ] `/login`
- [ ] `/forgot-password`
- [ ] `/reset-password`
- [ ] `/interest`
- [ ] `/admin/interest-responses`

---

### Skills Created

| Skill | Location | Purpose |
|---|---|---|
| `/btw` | `.agent/skills/btw/SKILL.md` | Handle side questions mid-task without losing main thread |
| `/iteration-preview` | `.agent/skills/iteration-preview/SKILL.md` | Screenshot page, save to `design-iterations/`, update CHANGELOG |

---

### Design Iterations

| # | Date | Page | Notes |
|---|---|---|---|
| 1 | 2026-06-06 | Landing | Initial build — amber palette, Fraunces headline, ministry card preview |

Full log: [`design-iterations/CHANGELOG.md`](../design-iterations/CHANGELOG.md)

---

### Open Questions

| # | Question | Status |
|---|---|---|
| 1 | Does the church have an existing website to integrate with? | TBD |
| 2 | Will SMS notifications ever be funded? | TBD — skipped Phase 0–2 |
| 3 | Who is the first Super Admin? | TBD — likely the developer initially |
| 4 | Should volunteers see each other's profiles? | TBD |
| 5 | Will this ever serve multiple churches? | TBD — single church for now |

---

### Figma

- File: [All-Vibes — Figma](https://www.figma.com/design/ZM3X0Z5dUR0OiNqIeygSif/All-Vibes?node-id=167-15965)
- Figma Desktop MCP is connected and active
- Current approach: drop screenshots from `design-iterations/` into Figma manually for co-design reference
- Code Connect not in scope

---

*This file is updated as the project progresses. Last updated: June 6, 2026.*
