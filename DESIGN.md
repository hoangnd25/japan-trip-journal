---
name: Japan, together
description: A cream-paper Japanese winter travel poster for family reading.
colors:
  paper: "#f8f4ec"
  ink: "#24211f"
  muted: "#615951"
  red: "#a74743"
  line: "#d9cfc1"
  rose: "#944c50"
  rose-tint: "#edd5d3"
  blue: "#3c607e"
  blue-tint: "#d3e0e9"
  olive: "#656c39"
  olive-tint: "#dfe1cc"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "110px"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "48px"
    fontWeight: 500
    lineHeight: 1.15
  body:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "16px"
    lineHeight: 1.65
rounded:
  panel: "12px"
  photograph: "6px"
  illustration: "7px"
components:
  route-link:
    textColor: "{colors.rose}"
  option-card:
    backgroundColor: "#fffdf8"
    rounded: "{rounded.panel}"
  food-panel:
    backgroundColor: "rgba(255,253,248,.58)"
    rounded: "{rounded.panel}"
    padding: "23px"
  activity-panel:
    backgroundColor: "rgba(255,253,248,.58)"
    rounded: "{rounded.panel}"
    padding: "23px"
  map-panel:
    backgroundColor: "#eef0e9"
    rounded: "14px"
    padding: "16px"
---

# Design System: Japan, together

## Overview

**Creative North Star: "The family winter travel poster"**

Warm cream paper, a soft red sun and expressive serif type frame real destination photographs. Muted rose, blue and olive distinguish three alternatives with equal visual weight. Food illustrations and restrained waves and plum details bring the supplied poster references into a readable family page.

**Key Characteristics:**
- Cream paper and restrained poster ornament.
- Large serif headings with comfortable sans-serif reading text.
- Real photographs paired with credited food illustrations.

## Colors

Red anchors the cover, brand dot and closing seal. Rose identifies the Alps, blue Hokkaido and olive the food route; pale tints sit behind route numbers. Paper, ink, muted text and fine warm rules form the neutral foundation.

**The Equal Weight Rule.** Route colors distinguish alternatives without implying a winner.

## Editorial voice

Use a restrained travel-brochure voice: destination-led, informative and inviting. Prefer “Activities & attractions”, “Food highlights” and “Suggested itinerary” to first-person headings. Avoid “we”, “our”, conversational family narration and exaggerated sales language. Present all routes equally while retaining first-visit and familiar-city relevance.

## Typography

Playfair Display carries titles, destination names and food names; DM Sans carries paragraphs, navigation and practical detail. The cover title scales between 74px and 92px on phones, with a 25px subtitle. Route headings reduce to 35px and then 32px. Main copy and descriptive captions remain 16px; small header and attribution text uses 13–14px.

## Layout

The reading width is capped at 1160px, with 40px desktop side clearance, 24px below 900px, 18px below 600px and 16px below 360px. The cover photo can extend to 1440px; the compact paper masthead overlaps it through a restrained fade. Phones use a closer Fuji portrait; desktop retains the wider snowy shoreline. Destination grids show three columns on desktop; phones place one landscape image above a pair. Activity and food highlights use four columns on desktop and two on tablets and phones. Each route has its own small map beside the itinerary with a 36px gap. Below 600px, maps precede the itinerary and cap at 250px wide (Hokkaido at 220px). Itinerary columns also stack below 600px. Destination photos keep intentional crops and overlaid place captions; activity photos use a 4:3 crop above their descriptions.

**The Reading Order Rule.** Route appeal, attractions, activities for kids and food precede overnight allocations.

## Elevation & Depth

Paper tones, photography and fine rules provide most depth. Shortlist cards use a quiet ambient shadow (`0 5px 18px rgba(73,54,34,.06)`). Dark gradients support photo captions; Fuji fades into the paper below. No motion is used.

## Shapes

Circular suns and option numerals form the poster motif. Shortlist and food panels have gently rounded corners; destination strips remain rectangular. Fine borders organize practical content. Food artwork is clipped from full supplied poster files; preserve crop coordinates when changing presentation.

## Components

- **Route navigation:** underlined text, arrow and a 44px minimum link height. Hover thickens the underline; keyboard focus uses a red 3px outline with a 5px offset. Only the explicit link is interactive.
- **Shortlist cards:** colored numeral, title, explanation, route link and photograph. Phone layouts move the photograph below the text at a 3:2 landscape ratio. Use full landscape sources and explicit focal positions, preserving Takayama's old street, Sapporo's Clock Tower and Fukuoka's riverside stalls without double cropping. The same local photographs anchor their destination panels.
- **Destination panels:** real photography, serif names, descriptive captions and decorative vertical Japanese labels. Gradients keep white captions readable.
- **Big days for kids:** a shared editorial section after the shortlist. Three park choices sit in columns on desktop and stack below 900px, separated by fine rules. Linked serif names, route fit and plain planning paragraphs explain the choice without introducing another card system. Body text stays 16px; Tokyo suggestions appear once.
- **Food panels:** illustrated foods with serif names and short captions, in two columns on phones. Alt text identifies the illustration medium.
- **Destination guides:** activity and food panels each retain four illustrated highlights. Additional ideas are combined by place under “Explore by destination”, using native details/summary. Each summary names the destination and its role, with explicit Show/Hide ideas labels. Expanded text pairs See & do, Eat & drink and Plan it, with official links and no additional image grid. Day trips are labelled and longer-trip additions have their own subheading. Labels and copy stack on phones, with 16px reading text, visible keyboard focus and no animation or JavaScript.
- **Activity panels:** the same warm background, fine border and rounded panel as food. Four photo cards per route use 7px image corners, 23px serif titles (21px on phones) and 16px descriptions. Linked titles remain visibly underlined. These are photographed attractions and activities, not AI food illustrations.
- **Geographic route maps:** one compact map per itinerary, with only its colored route. Regional viewports crop genuine Natural Earth geometry; extents differ. Pale land and leader labels remain readable at phone size. Hollow markers and dashed connectors identify Otaru or Kyoto day trips. Maps are supporting visual aids, never a large combined comparison.
- **Overnight plans:** dotted route markers and plain night counts alongside longer-trip variations. No selection state.
- **What to expect:** a visible editorial section before the activity panels. A narrow heading column sits alongside three short descriptions: The experience, For kids, and Pace & planning. Benefits and constraints share the same narrative rather than opposing lists. Below 600px the heading stacks above the descriptions. Fine rules, serif topic labels and 16px copy support scanning without scores or route rankings.

## Do's and Don'ts

### Do:
- Do preserve cream paper, the red sun and rose, blue and olive route identities.
- Do keep main reading text at 16px with comfortable phone spacing.
- Do use real destination photographs and credit supplied artwork as illustrations.

### Don't:
- Don't make one route visually preferred or recommended.
- Don't add scripts, motion, buttons or sharing controls.
- Don't treat artwork or seasonal photographs as promises about the trip.
