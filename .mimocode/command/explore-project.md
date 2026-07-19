---
name: explore-project
description: Explore the compositor-site project structure at session start. Read directory tree, package.json, architecture layers, mock data, components, and check for issues. Use when user says "изучи проект" or at the start of a new session on this project.
---

# Explore compositor-site project

Standard exploration workflow for the Polina Korobkova portfolio site.

## Step 1: Directory structure

Read the project root and `src/` directory tree to understand the layout.

## Step 2: Package and config

Read `package.json` (deps, scripts), `tsconfig.json`, `vite.config.ts`, `vercel.json`.

## Step 3: Architecture layers

Read the three source layers:
- `src/main.tsx` — entry point
- `src/application/routes/routersConfig.tsx` — route config
- `src/domain/mock/` — all mock data files (about, compositions, texts, collobaration, performances)
- `src/presentation/pages/` — list page directories
- `src/presentation/components/` — list component directories

## Step 4: Key components

Read these critical files:
- `src/presentation/components/Layout/Layout.tsx` and `styles.ts`
- `src/presentation/components/Footer/Footer.tsx` and `styles.ts`
- `src/presentation/pages/App/App.tsx`
- `src/global.css`

## Step 5: Build check

Run `npm run build` to verify the project compiles without errors.

## Step 6: Report

Summarize in Russian:
- Project stack and structure
- Key architectural patterns (Outlet routing, sections-based data, styled-components)
- Any issues found (build errors, unused deps, dead code)
- Current state of pages (which use sections array, which use legacy format)
