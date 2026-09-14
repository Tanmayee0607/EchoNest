# EcoNest Design Direction

## Three Initial Approaches

### Theme Name: Living Systems Editorial
Very Brief Intro: A warm, premium environmental-tech identity that combines editorial typography, mineral neutrals, deep forest tones, and measurable impact visuals. The interface feels intelligent and grounded rather than futuristic for its own sake.
Probability: 0.07

### Theme Name: Biophilic Observatory
Very Brief Intro: A dark, atmospheric visual language inspired by planetariums, satellite imagery, and nocturnal ecosystems, with restrained luminous data accents and a cinematic sense of scale.
Probability: 0.03

### Theme Name: Sunlit Commons
Very Brief Intro: An optimistic, tactile direction built from paper-like warmth, clay, sky, and botanical colors, using generous daylight and communal editorial layouts to make sustainability feel approachable.
Probability: 0.09

## Selected Approach: Living Systems Editorial

### Design Movement
Contemporary editorial modernism fused with biophilic design and calm environmental technology. The system should feel like a field guide for the future: precise, tactile, spacious, and quietly optimistic.

### Core Principles
1. Use asymmetry and editorial rhythm instead of repetitive centered marketing blocks.
2. Balance warm, mineral surfaces with deep forest anchors and a single ownable emerald accent.
3. Turn sustainability data into visual stories through rings, charts, thresholds, and annotated metrics.
4. Make every interaction feel purposeful, quiet, and physically grounded.

### Color Philosophy
EcoNest uses forest green as a place of trust and depth, not as a blanket fill. Warm limestone backgrounds keep the experience human and editorial; charcoal ink provides authority; eucalyptus and muted clay add natural variation; a vivid fern-emerald is reserved for actions, progress, and measurable change. The emotional intent is clarity without clinical coldness.

### Layout Paradigm
The site uses a horizontal reading rail, offset columns, split-screen hero compositions, and occasional full-bleed environmental moments. Key content should sit on a visual axis that shifts between left-led editorial copy and right-led data objects. Dashboards use a breathable instrument-panel structure rather than dense admin grids.

### Signature Elements
- A small leaf-and-orbit mark with two offset arcs, used as the EcoNest symbol and favicon.
- Fine contour lines and topographic rings behind charts, cards, and section transitions.
- Pill-shaped status labels and vertical annotation ticks that make data feel observed and actionable.

### Interaction Philosophy
Interactions should clarify and reward attention. Hover states lift objects a few pixels, reveal an annotation, or shift a chart line; they should never feel noisy. Buttons use compact verbs and a tactile press response. Filters and tabs update content in place with an immediate visual confirmation.

### Animation
Use short, high-quality motion: 180–260ms transitions with a strong ease-out. Reveal sections in small staggered groups, animate progress rings from a credible starting point, and use slow orbital motion only for the hero environmental object. Respect reduced-motion preferences by removing ambient movement while retaining state changes.

### Typography System
Use **DM Sans** for readable interface copy and **Space Grotesk** for high-impact headings, metric numerals, and labels. Headlines should be tight, sentence-case, and line-broken intentionally. Supporting copy uses a relaxed line-height with a 60–68 character measure. Uppercase labels should be small, tracked, and used as navigation aids rather than decoration.

### Brand Essence
EcoNest is a calm, measurable guide to sustainable living for people who want better everyday choices without sacrificing intelligence or beauty. Personality: **grounded, curious, quietly ambitious**.

### Brand Voice
Headlines are direct, specific, and hopeful. CTAs are compact verbs with a sense of movement. Microcopy explains what a metric means instead of overselling it. Avoid guilt, vague claims, and generic startup filler.

Example lines:
- “Small signals. Lasting shifts.”
- “See the habit. Change the pattern.”

### Wordmark & Logo
The wordmark should pair a clean geometric sans with a custom leaf-and-orbit symbol: a simplified seed shape intersected by two offset orbital arcs, suggesting a home, a planet, and a feedback loop. The symbol should work independently at small sizes and remain legible in a single color.

### Signature Brand Color
**Fern Signal — #2F8F68.** A clear, slightly blue-green emerald used sparingly for action states, progress, and the visual moment where information becomes behavior.

## Implementation Reminders

- Keep style guidance at the top of each authored CSS, component, and page file.
- Prefer generated hero and brand assets over generic placeholders.
- Use realistic static/demo data and label illustrative metrics clearly.
- Do not imply official certification, affiliation, or verified community testimonials.
- Ask before every design decision: “Does this reinforce or dilute Living Systems Editorial?”

## Style Decisions

- The EcoNest symbol is a recurring field-guide mark: use the generated leaf-and-orbit symbol at a visibly useful size, pair it with a customized two-tone wordmark treatment, and repeat the motif in page and data modules.
- Every major metric module pairs its number with an interpretive cue such as a threshold, trend line, ring, annotation, or explanatory caption.
- Secondary page heroes vary by composition: text-led for general pages, image-led for Community, data-led for Dashboard, and environmental full-bleed context for Impact.
- Environmental tactility should appear beyond the homepage through imagery, contour rings, mineral surfaces, and field-note labels.
