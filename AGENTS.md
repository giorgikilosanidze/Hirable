# AGENTS.md

Rules for AI agents working in this repository. These are requirements, not suggestions — follow all of them on every change.

## Frontend

### 1. File name must match the component name

Every component file is named exactly after the component it exports. Same spelling, same casing (PascalCase).

```
✅ UserCard.tsx     →  export default function UserCard() { ... }
❌ user-card.tsx    →  export default function UserCard() { ... }
❌ UserCard.tsx     →  export default function ProfileCard() { ... }
```

Renaming a component means renaming its file in the same change.

### 2. Exactly one component per file

A file exports one component and defines no others. If you need a second component — even a tiny one used only by the first — put it in its own file.

```
❌ // Header.tsx
   function NavLink() { ... }        // second component in the same file
   export default function Header() { ... }

✅ Header.tsx  +  NavLink.tsx
```

### 3. Keep components small — but only split when the split is real

Do not let a component grow long and bloated. Break large components into smaller ones.

Do not split just to make a file shorter. Create a new component only when at least one of these is true:

- it is a genuinely distinct piece of UI with its own responsibility, or
- it is reused in more than one place.

A wrapper that exists only because the parent "looked long" is wrong. Prefer a slightly longer component over a chain of trivial one-use components.

### 4. Keep constants, utils, and shared types out of component files

A component file contains the component. Do not declare constants, utility functions, or shared types in it.

| File | Holds |
| --- | --- |
| `types.ts` | types used by more than one file in the folder |
| `constants.ts` | every constant for that folder |
| `utils.ts` | helper/utility functions for that folder |

The one exception: a component's own `Props` type stays in the component file, since it is part of that component's signature and nothing else imports it.

```
✅ // UserCard.tsx
   type Props = { user: User };              // its own props — stays
   export default function UserCard({ user }: Props) { ... }

❌ // UserCard.tsx
   const MAX_ITEMS = 10;                     // → constants.ts
   const formatName = (u: User) => { ... };  // → utils.ts
   export type User = { ... };               // shared → types.ts
```

Default to one `types.ts`, one `constants.ts`, and one `utils.ts` per folder. When helpers form a clearly distinct group, a purpose-named file (`validation.ts`, `formatSalary.ts`) is better than growing `utils.ts` into a grab bag. Never create these files empty or as placeholders.

### 5. Group components by the feature they belong to

Components that work together for one thing live in one folder. Organize by feature, never by file type.

```
✅ src/components/landing/
     Hero.tsx
     Features.tsx
     Pricing.tsx
     types.ts
     constants.ts

❌ one feature's components spread across unrelated folders
❌ a flat components/ folder with everything dumped in it
```

Each such folder gets its own `types.ts` / `constants.ts` / `utils.ts` as needed (see rule 4).

## Backend

### 1. Shared types go in types files

Any type used by more than one file lives in a types file and is imported from there — never declared inside a logic file.

A type used by exactly one function in one file may stay in that file. This includes inferred types tied to their source, such as `type Input = z.infer<typeof schema>`.

## General

### Don't overcomplicate, don't overkill

Build exactly what was asked for. No speculative abstractions, no extra layers, no options or config nobody requested, no generalizing for a case that does not exist yet.

## Before finishing any change, verify

- [ ] Every new/edited component file is named after its component
- [ ] No file defines more than one component
- [ ] No constants, utils, or shared types are declared inside a component file
- [ ] No shared types are declared inside a backend logic file
- [ ] Related components are grouped in the same feature folder
- [ ] Nothing was split, abstracted, or generalized without a real reason

## Project setup

- Next.js (App Router) + TypeScript + Tailwind CSS
- Source lives in `src/`
- Import alias: `@/*` → `src/*`

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
