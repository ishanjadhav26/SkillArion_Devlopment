# Plan

The uploaded `hero-background-animation-main.zip` is your existing SkillArion site. The current sandbox is just the blank Lovable starter, so step 1 is to import that codebase, then apply your requested changes on top. Colors, layout, and everything else stay untouched.

## 1. Import the site from the zip
- Extract `hero-background-animation-main.zip` (excluding `.git`, `.lovable`, `bun.lock`, `node_modules`) into the project root, overwriting the starter files.
- Install any new dependencies the zip's `package.json` needs.
- Verify the site builds and renders as it currently does before making changes.

## 2. Replace the hero logo animation video
- Upload `MicrosoftTeams-video_1.mp4` via `lovable-assets` → `src/assets/logo-animation.mp4.asset.json`.
- Update `HeroVideoBackground.tsx` (and/or the home hero section) to source the new video instead of `hero-bg.mp4`.
- Keep autoplay/muted/loop/playsInline behavior identical so it "just plays" like the current one.
- Leave the old `hero-bg.mp4.asset.json` in place unless it becomes fully unreferenced; if unreferenced, remove it.

## 3. Remove the Featured Programs section
- In `src/components/skillarion/SkillarionHome.tsx`, delete the "Featured Programs" block (heading, cards, and any dedicated container/spacing wrapper).
- Remove any nav link, anchor, or `#featured-programs` reference pointing at it. Keep every other home section as-is.

## 4. Active-page highlight in the header nav
- In the shared header/nav, use TanStack Router's active link state to:
  - Bold/emphasize the current page's nav item.
  - Show an underline under the active item.
- Style with existing color tokens (no palette change). Applies across Home, About, and all other nav routes.

## 5. Add Founding Team block to the About section
- In the About page/section, add a new "Founding Team" block below the existing About copy, using the same visual language as neighboring sections.
- Content, in order:
  1. **Founding Team** intro paragraph (multi-disciplinary founding team, AI research, deep learning, IoT, business strategy…).
  2. Small "NOTE ON INNOVATIVENESS" label.
  3. **Kunukuntla Vinod Kumar** — Founder & AI Research Lead. Bio + "Key Responsibilities" bullets:
     - AI/ML Research — model design, training, deployment.
     - Deep Learning & NLP — CNN-LSTM, NLG, acoustic modelling.
     - IoT Systems — ESP32 firmware, sensor integration, edge AI.
  4. **Kunukuntla Pradeep** — Co-Founder & Business Strategy Lead. Bio + "Key Responsibilities" bullets:
     - Market Research — competitive analysis, segmentation, pricing.
     - Branding & Partnerships — institutional tie-ups, veterinary/gov alliances.
     - Commercialisation & Growth — GTM, revenue model, investor outreach.
- Two-card layout (stacked on mobile, side-by-side on desktop) using existing card styles. No new colors, no photos (none provided).

## 6. Verification
- Run the build.
- Load Home: confirm new logo video plays, Featured Programs is gone, current nav item is bold + underlined.
- Load About: confirm Founding Team block renders with both profiles and reads professionally.

## Technical notes
- Files touched: `src/routes/*`, `src/components/skillarion/SkillarionHome.tsx`, `HeroVideoBackground.tsx`, header/nav component, About route/section, `src/assets/logo-animation.mp4.asset.json` (new).
- No changes to `src/styles.css` tokens, no palette changes, no logic/data changes beyond the sections above.
