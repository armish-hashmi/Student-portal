# Student Portal — Cascade & Selectors Lab (instructions.md)

This lab is designed to practice **CSS cascade** and **common selector types**.  
Follow tasks in order. After each step, **refresh** and verify the checkpoint.

## Setup

1. Open `index.html` using Live Server.
2. Ensure `styles.css` is linked and loading.
3. Open DevTools (Inspect) so you can see which rule is winning.

---

## Part A — Navigation selectors (descendant, child, attribute, pseudo-class)

### A1) Descendant selector

**TODO:** Style all links inside `.portal-nav` using a descendant selector.

- Add: padding, border, border-radius, remove underline

Checkpoint: all nav links look like rounded pills (including the nested “Support” link).

### A2) Child selector

**TODO:** Style only the direct children links inside .portal-nav (not the nested link).

- Add: a subtle background color

Checkpoint: “Announcements” and “Deadlines” look slightly different; “Support” stays unchanged.

### A3) Attribute selector (external link)

**TODO:** Highlight external links.

- Add: different border color

Checkpoint: only “Course site” looks different.

### A4) Pseudo-class

**TODO:** Add hover effect on the links inside .portal-nav

- Add: background highlight

Checkpoint: hovering over a nav link changes background.

---

## Part B — Sibling selectors (adjacent + general)

### B1) Adjacent sibling (`+`)

**TODO:** Style the paragraph that comes immediately after the filter list.

- Add: margin-top and muted color (alpha value in RGBA)

Checkpoint: only the “Tip:” paragraph changes.

### B2) General sibling (`~`)

**TODO:** Style all paragraphs after `.filter-list`.

- Add: a top margin

Checkpoint: both “Tip:” and “Note:” paragraphs get spacing.

### B3) More specific sibling selector

**TODO:** Make only `.note` look different.

- Add: left border + padding-left

Checkpoint: only the “Note:” paragraph has a left border.

---

## Part C — Buttons + inputs (pseudo-classes, attribute selectors, specificity)

### C1) Button hover

**TODO:** Add hover style for elements with class = .btn

Checkpoint: buttons lighten on hover.

### C2) Focus-visible styles (keyboard)

**TODO:** Add focus outline for keyboard users.

- Selectors (group them):
  - `.btn:focus-visible, a:focus-visible, .input:focus-visible`
- Add: `outline` and `outline-offset`

Checkpoint: press Tab — you can see where focus is.

### C3) Attribute selector for input type

**TODO:** Style the search input using attribute selector.

Checkpoint: the search input looks like part of the UI (border, padding, background).

### C4) Specificity demo (element vs class)

**TODO:** Create a conflict on `border-radius`:

1. `button { border-radius: 6px; }`
2. `.btn { border-radius: 10px; }`

Checkpoint: the button with class `.btn` uses the `.btn` radius (who wins?).

---

## Part D — Sections + cards (adjacent sibling, source order, hover, attribute selectors)

### D1) Adjacent sibling inside section header

**TODO:** Style `.section_meta` only when it comes right after the `h2`.

Checkpoint: meta line becomes slightly different (opacity / style).

### D2) Descendant selector on cards

**TODO:** Add spacing rule for badges inside cards.

Checkpoint: badges have better spacing from titles.

### D3) Child selector on cards

**TODO:** Target only the badge directly inside `.card_header`.

Checkpoint: only header badges change (not badges elsewhere).

### D4) Hover/focus highlight for cards (pseudo-classes)

**TODO:** Add a highlight when hovering OR when focus is inside the card (grouping selectors)

- Add: background tint + border-color change (optional: slight transform)

Checkpoint: hover a card; also Tab to a button inside a card and see highlight.

### D5) Source order demo (same specificity)

**TODO:** Add a second `.card { ... }` rule LOWER in the file that changes one property (e.g., `border-color`).

Checkpoint: the later `.card` rule wins because it appears later.

### D6) Attribute selectors on cards

**TODO:** Add rules for:

- `.card[data-status="new"]` (e.g., inset glow) HINT: check https://www.w3schools.com/css/css3_shadows_box.asp
- `.card[data-priority="high"]` (e.g., left border + padding)

Checkpoint: “New” cards look different; “Urgent” card has a left border.

### D7) Class modifier (.featured)

**TODO:** Style `.featured` with a different left border color.

Checkpoint: featured card becomes visually distinct.

### D8) ID selector (#urgent1)

**TODO:** Make `#urgent1` override the left border color (more specific than class/attribute).

Checkpoint: urgent card border color is the strongest and wins.

### D9) Pseudo-class nth-child

**TODO:** Add a rule for `.card:nth-child(2)` (e.g., dashed outline).

Checkpoint: only the second card has the dashed outline.

---

## Part E — Badges (pseudo-element + variants)

### E1) Pseudo-element

**TODO:** Add `.badge::before` to insert a small symbol (e.g., `•`).

Checkpoint: all badges show the dot before text.

### E2) Badge variants

**TODO:** Create:

- `.badge--featured`
- `.badge--urgent`
- `.badge--info`

Checkpoint: each badge variant has its own border/background tone.

---

## Part F — Deadlines list (:not, attribute, child selector)

### F1) Attribute selector on deadlines

**TODO:** `.deadline[data-priority="high"]` → special border color

Checkpoint: first deadline looks urgent.

### F2) :not selector

**TODO:** `.deadline:not([data-priority="high"])` → subtle(light) left border

Checkpoint: non-urgent deadlines have a subtle left indicator.

### F3) Child selector

**TODO:** `.deadline > .badge` → align badge

Checkpoint: badges align nicely at the start.

---

## Done checklist (final)

- You used these selector types:
  - element, class, id
  - descendant, child, adjacent sibling (+), general sibling (~)
  - attribute selectors
  - pseudo-classes (:hover, :focus-visible, :focus-within, :nth-child, :not)
  - pseudo-element (::before)
- You demonstrated cascade:
  - **source order** (later rule wins when specificity ties)
  - **specificity** (class beats element; ID beats class/attribute)

Optional: Take screenshots of DevTools “Styles” panel showing which rules won.
