# ServeKin — Product Requirements Document (PRD)

**Version:** 0.1 (Draft)
**Last Updated:** June 2026
**Author:** Madison Moore
**Status:** In Progress — Phases 2 & 3 pending final review

---

## 1. Product Overview

### Mission
> *ServeKin is a volunteering platform built for churches — helping ministries connect with their community, fill meaningful roles, and grow a culture of service.*

### Problem Statement
Local churches struggle to connect willing volunteers with ministry needs. Opportunities are communicated through bulletin boards, word of mouth, or manual email lists — leading to missed connections, low engagement, and organizer burnout. There is no centralized, trackable way for a church to manage volunteer interest, applications, and scheduling.

### Solution
ServeKin provides a dedicated web platform where ministries can post volunteer opportunities and community members can discover, apply, and track their service — all in one place.

### Target Users
| Role | Description |
|---|---|
| **Volunteer** | Church member or community visitor who wants to serve |
| **Organizer** | Ministry leader who posts and manages opportunities |
| **Admin** | Church staff who manage ministries and platform settings |
| **Super Admin** | Platform-level administrator with full access |

### Constraints
- **No budget** — must run on free tiers (Supabase, Vercel, Resend, Cloudflare)
- **Solo developer** with non-technical church volunteers managing day-to-day operations
- **Large church** — 1,000+ members, 15+ ministries; performance and search must be considered from the start
- **Soft launch goal** — Phase 0 live within a few months; no hard deadline

---

## 2. Tech Stack

| Layer | Tool | Justification |
|---|---|---|
| Frontend | Next.js + Tailwind CSS | Fast to build solo, SSR for SEO, great DX |
| Backend | Next.js API Routes | Co-located, no separate server needed |
| Database | Supabase (PostgreSQL) | Relational data model, free tier, built-in auth + storage |
| Authentication | Supabase Auth | Email/password + email verification out of the box |
| File Storage | Supabase Storage | Profile photos, ministry assets |
| Email | Resend | 3,000 emails/month free, developer-friendly API |
| Rich Text Editor | Tiptap | Free, open source, extensible |
| Bot Protection | Cloudflare Turnstile | Free, privacy-friendly CAPTCHA alternative |
| Search | PostgreSQL Full-Text Search | Built into Supabase, no added cost or service |
| Hosting | Vercel | Free tier, auto-deploys from GitHub on every push |

### Architecture Notes
- Standalone site — own domain (e.g., `servekin.org`). Designed to be extensible to integrate with a church website later if needed.
- Supabase free tier note: projects may pause after extended inactivity. Monitor and upgrade (~$25/month) when consistent traffic warrants it.

---

## 3. User Roles & Permissions

| Permission | Volunteer | Organizer | Admin | Super Admin |
|---|---|---|---|---|
| Create account | ✅ | ✅ | ✅ | ✅ |
| Browse opportunities | ✅ | ✅ | ✅ | ✅ |
| Submit interest form | ✅ | ✅ | ✅ | ✅ |
| Apply to opportunities | ✅ | ✅ | ✅ | ✅ |
| Manage own profile | ✅ | ✅ | ✅ | ✅ |
| Create/edit posts | ❌ | ✅ | ✅ | ✅ |
| Review applicants | ❌ | ✅ | ✅ | ✅ |
| Manage ministry profile | ❌ | ✅ (own) | ✅ | ✅ |
| Assign organizer role | ❌ | ❌ | ✅ | ✅ |
| Create ministries | ❌ | ❌ | ✅ | ✅ |
| Platform settings | ❌ | ❌ | ❌ | ✅ |

> **Role hierarchy:** Super Admin grants Admin access. Admins assign Organizer roles to users within their church. Organizers are scoped to their ministry only.

---

## 4. Phased Roadmap

---

### Phase 0 — Volunteer Interest Form
**Goal:** Get something live quickly. A lightweight way for church goers to express interest in volunteering.

#### Pages & Routes
| Route | Description |
|---|---|
| `/` | Landing page with mission statement and sign-up CTA |
| `/signup` | Create account (name, email, password, bot protection) |
| `/verify-email` | Prompt to check inbox after signup |
| `/login` | Email + password login |
| `/forgot-password` | Enter email to receive password reset link |
| `/reset-password` | Set new password via email link |
| `/interest` | Volunteer interest form — pick 1–5 ministries + optional bio |
| `/admin/interest-responses` | Protected admin view of all interest submissions |

#### Features
- Email/password sign up with email verification (Supabase Auth)
- Forgot password + reset flow (Supabase Auth)
- Bot protection on signup form (Cloudflare Turnstile)
- Interest form: select 1–5 ministries from a pre-seeded list, optional short "about me"
- Confirmation email sent to volunteer on submission (Resend)
- Admin table view of submissions (name, email, ministry selections, date)

#### Database Tables
- `users` — id, name, email, role, created_at
- `ministries` — id, name, description (pre-seeded)
- `interest_submissions` — id, user_id, ministry_ids[], notes, created_at

#### Out of Scope for Phase 0
- Volunteer profiles
- Opportunity posts
- Application workflow
- Organizer accounts

---

### Phase 1 — Full Volunteer Board (MVP)
**Goal:** Ministries can post opportunities. Volunteers can browse, apply, and track their applications.

#### Pages & Routes
| Route | Description |
|---|---|
| `/board` | Main volunteer board — browsable, searchable opportunities |
| `/board/[id]` | Individual opportunity detail page |
| `/profile` | Volunteer's own profile — edit name, photo, bio, availability |
| `/apply/[id]` | Application form for a specific opportunity |
| `/my-applications` | Volunteer's list of submitted applications and statuses |
| `/organizer/posts` | Organizer's list of their posted opportunities |
| `/organizer/posts/new` | Create a new opportunity post |
| `/organizer/posts/[id]/applicants` | View and manage applicants for a post |

#### Opportunity Post Fields
| Field | Type | Notes |
|---|---|---|
| Title | Text | Required |
| Ministry | Select | Auto-linked to organizer's ministry |
| Description | Rich text | Tiptap editor |
| Commitment level | Badge | One-time / Weekly / Monthly / Seasonal |
| Date & time | Date/time picker | |
| Location | Text | Address or "On-site" |
| Prerequisites | Checklist | e.g., "Background check required", "18+ only" |
| Max volunteers | Number | Cap on applicants |
| Point of contact | Name + email | Auto-filled from organizer profile |
| Status | Select | Draft / Published / Closed |

#### Volunteer Profile Fields
| Field | Type |
|---|---|
| Name | Text |
| Profile photo | Image upload (Supabase Storage) |
| Bio | Text area |
| Ministry interests | Multi-select |
| Availability | Days/times (general) |
| Skills & gifts | Free text tags |

#### Organizer Applicant Dashboard
- Table of all applicants per opportunity
- Applicant status: Pending / Accepted / Rejected / Needs More Info
- Actions: Approve, Reject, Send back with message

#### Search & Filtering (Volunteer Board)
- Full-text search on title and description (PostgreSQL FTS)
- Filter by: Ministry, Commitment level, Date range, Has prerequisites (yes/no)

#### Email Notifications (Resend)
| Trigger | Recipient | Email |
|---|---|---|
| Application submitted | Volunteer | "Your application was received" |
| Application accepted | Volunteer | "You've been accepted!" |
| Application rejected | Volunteer | "Application update" |
| New applicant | Organizer | "New applicant for [post title]" |

#### Database Additions
- `opportunities` — id, ministry_id, title, description, commitment_level, date, location, prerequisites[], max_volunteers, contact_name, contact_email, status, created_at
- `volunteer_profiles` — id, user_id, photo_url, bio, availability, skills[]
- `applications` — id, user_id, opportunity_id, status, message, created_at

#### Role System Introduced
- `volunteer` — default role on signup
- `organizer` — assigned by admin, scoped to one ministry
- `admin` — assigned by super admin

---

### Phase 2 — MVP+
**Goal:** Richer experience for volunteers and organizers. Full admin control.

#### New Pages & Routes
| Route | Description |
|---|---|
| `/dashboard` | Volunteer dashboard — upcoming shifts, application history |
| `/organizer/schedule` | Organizer shift scheduler — manage confirmed volunteers |
| `/learn/[opportunity-id]` | Learning hub — task list with readings/videos for an opportunity |
| `/admin` | Admin panel home |
| `/admin/users` | User management — view, assign roles, deactivate |
| `/admin/ministries` | Ministry creation and management |
| `/admin/settings` | Platform settings and configuration |

#### Volunteer Dashboard
- Upcoming confirmed shifts (date, time, location, ministry)
- All submitted applications with current statuses
- Badges or recognition indicators (placeholder for Phase 3)

#### Organizer Scheduler
- Calendar or list view of all upcoming opportunities
- Per-opportunity: confirmed volunteer list, pending applicants, open slots remaining
- Ability to send a message to all confirmed volunteers for an opportunity

#### Learning Hub
- Per opportunity, organizer can attach:
  - Checklist of tasks to complete before the shift
  - Links to hosted readings (URL)
  - Embedded video links (YouTube/Vimeo)
- Volunteer sees this on the opportunity detail page after applying

#### Prerequisite Gating
- When posting, organizer selects prerequisite types: Background Check, Age 18+, Training Required
- On the application form, volunteer self-attests to meeting prerequisites
- Organizer can see attestation status per applicant
- Future: verification workflow (Phase 3+)

#### Admin Panel
- **User management:** View all users, assign/remove roles, deactivate accounts
- **Ministry management:** Create, edit, deactivate ministries; assign organizers
- **Permission management:** Control which roles can do what
- **Site settings:** Church name, logo, contact email, default notification preferences

#### Database Additions
- `learning_resources` — id, opportunity_id, type (task/reading/video), title, url, order
- `ministry_profiles` — id, ministry_id, logo_url, description, social_links[]
- Updates to `opportunities` — prerequisite_types[], prerequisite_notes

---

### Phase 3 — Next Release
**Goal:** Community features, polish, and scale.

#### Features
| Feature | Description |
|---|---|
| Volunteer recognition | Points system for completed shifts; badges and milestones |
| Ministry analytics | Dashboard showing volunteer counts, hours served, application rates |
| Bulk messaging | Organizer can send email to all volunteers in a ministry or opportunity |
| Recurring opportunities | Schedule repeating opportunities (weekly, monthly) |
| SMS notifications | Shift reminders via SMS — pending budget/provider decision |
| PWA / mobile experience | Progressive Web App for mobile-optimized experience |
| Church website integration | Embed or link ServeKin into existing church site |

---

## 5. Open Questions & Decisions

| # | Question | Status |
|---|---|---|
| 1 | Does the church have an existing website to integrate with? | TBD — defaulting to standalone for now |
| 2 | Will SMS notifications ever be funded? | TBD — skipped in Phase 1 & 2 |
| 3 | Who is the first Super Admin? | TBD — likely the developer initially |
| 4 | How are organizers verified before being assigned the role? | TBD — manual admin assignment for now |
| 5 | Should volunteers be able to see each other's profiles? | TBD |
| 6 | Will the platform serve multiple churches eventually? | TBD — single-church for now |

---

## 6. Out of Scope (All Phases)

- Native iOS / Android app (PWA covers mobile needs)
- Payment processing or donation features
- Live chat or in-app messaging between volunteers
- Integration with church management software (e.g., Planning Center, Breeze)

---

*This is a living document. Update as decisions are made and phases are refined.*
