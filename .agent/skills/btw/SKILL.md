---
name: btw
description: Handles a side question from the user mid-task without losing the main thread. Use when the user prefixes a message with /btw or signals a parenthetical question while work is already in progress.
disable-model-invocation: true
---

# BTW — Side Question Handler

When the user uses `/btw`, they are asking a parenthetical question mid-task. They do not want to abandon the current work — they just need a quick answer before continuing.

## Behavior

1. **Acknowledge the side question** with a brief signal (e.g., "Quick answer:" or just answer directly without preamble if it's obvious)
2. **Answer concisely** — this is a detour, not a deep dive. Match the depth to the question. If more depth is needed, say so and offer to go deeper after returning to the main task.
3. **Offer to resume** — end with a one-line return signal, e.g., "Back to [what we were doing]?" or "Ready to continue when you are."

## Rules

- Do NOT abandon or forget the current task context
- Do NOT start a long explanation unless the question demands it
- Do NOT ask follow-up questions about the side question unless absolutely necessary
- Keep the answer self-contained so the user can immediately say "ok, continue" and work resumes seamlessly

## Example

User (mid-implementation): `/btw what's the difference between SSR and SSG?`

Agent:
> SSR (Server-Side Rendering) generates HTML on each request — fresh data, slower TTFB. SSG (Static Site Generation) generates HTML at build time — instant loads, stale until next build. Next.js supports both.
>
> Back to the interest form implementation when you're ready.
