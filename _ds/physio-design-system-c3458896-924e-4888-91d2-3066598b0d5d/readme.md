# Physio Design System

A design system for **Physio** — a physiotherapy / physical-therapy & chiropractic clinic brand. It captures the look and feel of the *Physio* clinic website: clean, clinical, trustworthy, with a signature medical-teal accent over deep navy ink on airy neutral backgrounds.

> **Use it for:** clinic marketing pages, treatment/service sections, team & pricing layouts, booking flows, blog, and branded slides or mocks for a physiotherapy / chiropractic / rehab practice.

---

## Sources

This system was reverse-engineered from the **Physio — Physical Therapy & Medical Clinic WordPress theme** by QreativeThemes:

- Live demo: `https://demos.qreativethemes.com/physio/`
- Theme page: `https://qreativethemes.com/wordpress-themes/physio/`
- ThemeForest: `https://themeforest.net/item/physio-physical-therapy-medical-clinic-wp-theme/14747135`
- Docs: `https://docs.qreativethemes.com/docs/physio/`

**Confirmed from the source material:** the theme ships **Font Awesome 6** as its icon library and **Google Fonts** for typography (user-swappable in the WordPress customizer); it targets physiotherapy, rehabilitation, chiropractic, sports therapy and medical-clinic practices, with pre-built treatment pages, therapist profiles, transparent pricing and an integrated booking flow.

**⚠️ Caveats — please help me confirm (see bottom):**
- The live site blocks cross-origin asset access, so I could **not download the real logo or demo photography**, nor read the theme's exact CSS. Colors, the type pairing, and the wordmark here are a **faithful best-match reconstruction**, not pixel-extracted values.
- Fonts are **best-match Google Font substitutions**: **Poppins** (headings) + **Open Sans** (body). The theme lets owners pick any Google Font, so these represent the demo's geometric-heading / humanist-body character rather than a locked choice.
- The logo is a **recreated wordmark** (`physio.` + a heart-pulse mark), not the original asset.
- UI-kit imagery uses seeded `picsum.photos` placeholders behind brand-colored overlays.

---

## Content fundamentals

**Voice:** warm, reassuring, professional. The brand speaks to someone who is often *already in pain* and looking for trustworthy care — so copy leads with empathy and outcomes, not jargon.

- **Person:** addresses the reader as **you** ("get back to the life you love", "your recovery"), and the clinic as **we / our team**. Builds a personal, one-to-one relationship.
- **Tone:** confident and calm; never clinical-cold, never hypey. Emphasises trust, expertise and results.
- **Casing:** Titles in **sentence case or Title Case** depending on weight; **eyebrows and button labels are UPPERCASE** with wide letter-spacing (e.g. `WHY CHOOSE PHYSIO`, `MAKE AN APPOINTMENT`).
- **Headlines:** short, benefit-led — "Move better, live without pain", "Care for every stage of recovery".
- **Body:** plain, supportive, second-person. Sentences are medium-length and readable; no clever wordplay.
- **CTAs:** action + reassurance — "Make an Appointment", "Book Your Assessment", "Most patients seen within 48 hours".
- **Emoji:** **none.** This is a healthcare brand; trust signals are icons (Font Awesome), credentials, ratings and testimonials — not emoji.
- **Numbers & proof:** used sparingly and concretely (years of care, patients treated, average rating, "seen within 48 hours"). Avoid invented filler stats.

Example copy:
> *Eyebrow:* WHY CHOOSE PHYSIO
> *Heading:* A clinic built around your recovery
> *Body:* We take the time to understand you — your history, your goals and your day-to-day — so every plan fits your life, not just your diagnosis.

---

## Visual foundations

**Color.** A single confident accent — **medical teal `#16b5a7`** — over **deep navy ink `#14202e`** for headings and dark surfaces, on **white and a barely-there cool gray `#f5f7f9`** for alternating sections. Body copy is a soft slate gray `#6b7884`. Teal is reserved for CTAs, links, eyebrows, icon accents and stat bands; navy anchors headers, footers and overlays. Status colors (success/warning/danger/info) appear only in functional UI. Avoid purple/blue gradients and multi-hue palettes — the brand is monochromatic-teal by design.

**Type.** Poppins (geometric sans) for all headings — tight tracking on big display sizes, **wide uppercase tracking** for eyebrows and buttons. Open Sans (humanist sans) for body at a relaxed **1.7** line-height. Big, airy headings; comfortable reading measure (~620px).

**Spacing & layout.** 4px base grid; a classic **1170px** max container with a 30px gutter. Sections breathe — **~110px vertical padding** is the norm. Generous whitespace signals calm and professionalism.

**Backgrounds.** Mostly flat white alternating with the cool gray. Hero and testimonial bands use a **full-bleed photo under a navy overlay** (≈55–82% opacity) for legible white text. One brand-colored band (solid teal) carries the trust stats. No textures, no noise, no busy patterns.

**Imagery vibe.** Warm, human, real — therapists with patients, hands-on treatment, bright clinic spaces. Photos sit in **8px rounded** frames or full-bleed with navy overlays. Keep it authentic and reassuring, not stocky-corporate.

**Cards.** White, **8px radius**, a **1px `#e2e7ec` hairline border** and a **soft cool shadow** (`--shadow-sm`). On hover they **lift 4px** and deepen to `--shadow-md`. Treatment blocks (IconBox) center a **circular icon** (soft teal tint, or solid teal / navy) above a Poppins title and a short paragraph.

**Buttons.** **Pill-shaped** (`999px`), uppercase, wide-tracked Poppins. Primary = teal fill with a **soft teal glow shadow**; secondary = teal outline; dark = navy; ghost = text-only. A non-pill 5px-radius variant exists for forms.

**Radii.** Modest — 3–8px for cards/inputs, **pill** for CTAs and badges, **full circle** for icon circles and avatars.

**Shadows.** Cool, low-spread, subtle. `xs`→`lg` for elevation; a dedicated **teal glow** (`--shadow-teal`) lifts the primary CTA.

**Motion.** Calm and quick — 150–250ms, standard ease (`cubic-bezier(0.4,0,0.2,1)`), **no bounce**. Hover = gentle lift / color deepen; links shift to teal. Press states deepen the fill (teal-600/700). Nothing flashy.

**Hover / press.** Links → teal-600. Buttons keep their shape and deepen one step on press. Cards lift. Icons in circles don't animate; the card around them does.

**Borders.** Hairline `#e2e7ec` for card and section dividers; `#cbd3da` for input borders; teal focus ring (`0 0 0 3px rgba(22,181,167,0.3)`).

---

## Iconography

- **Library:** **Font Awesome 6** (Solid for UI/treatment icons, Brands for social). This matches the real theme. Loaded from CDN via `tokens/fonts.css` — no copying required; consumers get it automatically through `styles.css`.
- **Style:** solid, single-color. Treatment/service icons sit in **circular tinted backgrounds** (soft teal `--teal-50` with `--teal-600` glyph; or solid teal / navy circles for emphasis).
- **Common glyphs:** `fa-heart-pulse` (brand mark), `fa-bone`, `fa-person-walking`, `fa-hand-holding-medical`, `fa-dumbbell`, `fa-stethoscope`, `fa-bed-pulse`, `fa-calendar-check`, `fa-circle-check` (checklists), `fa-quote-left` (testimonials), `fa-phone` / `fa-clock` (top bar), brand icons for social.
- **Emoji / unicode:** not used. Always reach for a Font Awesome glyph.
- **No hand-rolled SVG** — use the icon font so weight and style stay consistent.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (import-only). Consumers link this one file.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css` (Google Fonts + Font Awesome 6).
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills-compatible entry point.

**Foundations** (`guidelines/` — Design System tab cards)
- Colors: Primary teal · Ink navy · Neutrals · Semantic status
- Type: Headings · Body · Eyebrow & Buttons · Type scale
- Spacing: Spacing scale · Radius · Shadows
- Brand: Logo lockup · Iconography

**Components** (`components/core/` — `window.PhysioDesignSystem_c34588`)
- `Button` — pill CTA, 4 variants / 3 sizes
- `IconBox` — treatment/service feature block (the theme's core unit)
- `Card` — soft bordered surface with optional image + hover lift
- `Badge` — uppercase pill label, 5 colors / 3 variants
- `Input` — form field + textarea, icon, error/help states
- `SectionHeading` — eyebrow + title + intro lockup

**UI kits** (`ui_kits/`)
- `website/` — interactive Physio clinic homepage (header, hero, stats, services, about, team, testimonial, CTA, footer) with a 2-step booking modal.

**Templates** (`templates/`)
- `clinic-landing/` — `ClinicLanding.dc.html`: hero + treatments + booking CTA starting point for consuming projects.

---

## Help me make this perfect

I had to reconstruct several things the live site wouldn't hand over. **Please confirm or send the real assets** (see the bold ask at the end of my message): the **logo file(s)**, **brand photography**, the **exact heading/body fonts**, and the **real teal hex** if it differs from `#16b5a7`.
