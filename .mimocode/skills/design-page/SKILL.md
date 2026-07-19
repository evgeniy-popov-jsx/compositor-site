---
name: design-page
description: Implement or redesign a page from design mockups. Use when the user sends a design image and asks to build or update a page (About, Collaboration, Composition, Text, etc.). Covers reading current code, implementing sections-based data, styled-components, responsive layout, and iterating with user feedback.
---

# Design-to-code page implementation

Implement or redesign a page in the compositor-site project based on design mockups from the user.

## Project conventions to follow

- **Data pattern**: Pages use a `sections` array in mock data with typed blocks. Each section has `{ type, content, ... }`. Types: `text`, `quote`, `photo`, `info`, `photo-pair`, `photo-grid`, `video`, `audio`, `link`.
- **Styling**: styled-components with `Styled` named export object. Styles in separate `styles.ts` file.
- **Highlight**: Reusable `src/presentation/components/Highlight/` for blue background highlights. Inline markup uses `||text||` delimiters in mock data strings.
- **Non-breaking spaces**: Use `\u00A0` between words that must not break across lines.
- **Responsive**: Breakpoints at 900px (tablet) and 670px (mobile). Quotes use `clamp()` for responsive font sizing.
- **Colors**: text #001D21, background #F0F1EB, accent #164DC4, highlight rgba(27, 99, 255, 0.3).
- **Font**: Syne (sans-serif) for body. Syne Mono for labels in CompositionInfo.
- **Language**: All user communication in Russian.

## Workflow

### Step 1: Understand the design
1. Read the design image(s) the user sent
2. Ask clarifying questions if layout is ambiguous
3. Identify: section types needed, photo placements, text vs quote blocks, special elements

### Step 2: Read current code
1. Read the current page component (`src/presentation/pages/<Page>/<Page>.tsx`)
2. Read current styles (`src/presentation/pages/<Page>/styles.ts`)
3. Read current mock data (`src/domain/mock/<page>.ts`)
4. Note which existing components can be reused (Highlight, Content-wrapper, etc.)

### Step 3: Plan sections
Map the design to the sections array format:
- Text blocks → `{ type: 'text', content: '...' }`
- Quotes → `{ type: 'quote', content: '...' }`
- Photos → `{ type: 'photo', src: '/photoName.png', photoAlign: 'left'|'right' }`
- Photo pairs → `{ type: 'photo-pair', src1: '...', src2: '...' }`
- Photo grids → `{ type: 'photo-grid', photos: [...] }`
- Info tables → `{ type: 'info', ... }` (compositions only)

### Step 4: Implement
1. Update mock data with new sections array
2. Update/rewrite the page component to render sections by type
3. Update/create styles with responsive breakpoints
4. Ensure photos are placed in `public/` directory

### Step 5: Verify
1. Run `npx tsc --noEmit` to check TypeScript
2. Run `npm run build` to verify build passes
3. Check responsive behavior at 900px and 670px breakpoints

### Step 6: Iterate
User will provide feedback. Common iteration patterns:
- Adjust font sizes, spacing, alignment
- Change grid layouts for photo arrangements
- Add/remove borders between info rows
- Tweak responsive behavior

## Known patterns by page type

### About / Collaboration pages
- Sections: text, quote, photo
- Photo: grayscale filter, margin-top: -180px overlap
- Quote: blue, clamp(24px, 4vw, 55px), margin-left responsive (25%→15%→0%)
- CvLink for contact info

### Composition detail page
- Sections: info, text, photo-pair, photo-grid, video, audio, link
- Info: table with Syne Mono labels, blue accent borders, last row no border
- Cover image: fixed 180px height
- PhotoPair: 3fr 2fr grid with offset
- PhotoGrid: complex grid layouts (user specifies exact grid positions)

### Text page
- Two formats: legacy `description` string or new `sections` array
- Sections: text, photo, quote
- Inline highlights via `||text||` delimiters
