# ServeKin — Platform Overview

## Mission Statement

> *ServeKin is a volunteering platform built for churches — helping ministries connect with their community, fill meaningful roles, and grow a culture of service.*

---

## Platform Name

**ServeKin** — a blend of "serve" (active service/volunteering) and "kin" (community, belonging, kinship). Built for the modern parish.

---

## Target Audience

- **Volunteers** — church members and community visitors who want to serve
- **Organizers** — ministry leaders who post and manage volunteer opportunities
- **Admins** — church staff who manage permissions, ministries, and platform settings

---

## High-Level Feature List

### Authentication & Security
- Email/password sign up with email verification
- Login, forgot password, and password reset flows
- Bot protection on registration (Cloudflare Turnstile)
- Role-based access control (Volunteer, Organizer, Admin, Super Admin)

### Volunteer Interest Form *(Phase 0)*
- Simple form allowing church goers to express interest in 1–5 ministries
- Confirmation email on submission
- Admin view of all interest submissions

### Volunteer Board *(Phase 1)*
- Browsable, searchable list of open volunteer opportunities
- Filtering by ministry, commitment level, date, and prerequisites
- Individual opportunity detail pages

### Opportunity Post Creation *(Phase 1)*
- Rich text description editor
- Commitment level badge (One-time / Weekly / Monthly / Seasonal)
- Date, time, and location badges
- Prerequisite/requirements checklist
- Max volunteer cap
- Point of contact
- Apply button
- Draft / Published / Closed status

### Volunteer Profiles *(Phase 1)*
- Name, photo, bio
- Ministry interests
- General availability
- Skills and gifts tags

### Application Portal *(Phase 1)*
- Volunteers apply to specific opportunities
- Application status tracking (Pending / Accepted / Rejected / Needs Info)

### Organizer Dashboard *(Phase 1)*
- View all applicants per opportunity
- Approve, reject, or send back with questions
- Manage their posted opportunities

### Notifications — Email *(Phase 1)*
- Volunteer: application received, accepted, not selected
- Organizer: new applicant alert

### Volunteer Dashboard *(Phase 2)*
- Upcoming shifts and commitments
- Application history and statuses

### Organizer Scheduler *(Phase 2)*
- Shift management
- View confirmed volunteers per opportunity

### Learning Hub *(Phase 2)*
- Simplified task list per opportunity
- Hosted readings and videos for volunteer prep

### Prerequisite Gating *(Phase 2)*
- Background check flag
- Age requirements
- Training completion requirements

### Admin Panel *(Phase 2)*
- User management and role assignment
- Ministry/group creation and management
- Permission settings
- Site configuration

### Notifications — SMS *(Phase 3)*
- Upcoming shift reminders via SMS (pending budget)

### Recognition & Analytics *(Phase 3)*
- Volunteer points and recognition system
- Ministry analytics (volunteer counts, hours served)
- Bulk messaging (organizer → volunteers)

### Recurring Opportunities *(Phase 3)*
- Schedule repeating volunteer opportunities

### Mobile Experience *(Phase 3)*
- Progressive Web App (PWA) for mobile users

### Church Website Integration *(Phase 3)*
- Optional integration with existing church website

---

## Tech Stack

| Layer | Tool | Notes |
|---|---|---|
| Frontend | Next.js + Tailwind CSS | React-based, fast, solo-dev friendly |
| Backend | Next.js API Routes | Co-located with frontend |
| Database | Supabase (PostgreSQL) | Free tier, relational, built-in auth |
| Authentication | Supabase Auth | Email/password, social login ready |
| File Storage | Supabase Storage | Profile photos, ministry logos |
| Email | Resend | Free tier: 3,000 emails/month |
| Rich Text | Tiptap | Free, open source editor |
| Bot Protection | Cloudflare Turnstile | Free CAPTCHA alternative |
| Search | PostgreSQL Full-Text Search | Built into Supabase, no added cost |
| Hosting | Vercel | Free tier, auto-deploy from GitHub |

---

*Last updated: June 2026*
