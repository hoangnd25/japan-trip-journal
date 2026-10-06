# Japan, together

A mobile-first family reading page comparing three equally presented Japan trips for mid–late February, lasting 7–10 days. Its cream paper, red sun, snowy Fuji cover, photo panels and food illustrations follow the supplied travel posters.

Live page: [Japan, together](https://hoangnd25.github.io/japan-trip-journal/)

## Structure

The alternatives are Alps & classic cities, Hokkaido & Tokyo, and Fukuoka to Tokyo. Each explains its appeal, attractions, activities for kids and food before showing overnight allocations and travel trade-offs. Twelve activity and attraction cards—four per route—use photographs, short family-language descriptions and the same panel treatment as the food section. They are possibilities to choose from, not a daily checklist. Numbers identify options; they do not rank them.

This static HTML/CSS page has no build step, scripts, motion, sharing controls or buttons. Explicit links navigate within the page or open source material. Destination, activity and food grids use two columns on phones and four on wider screens. Main reading text and descriptive captions are 16px; small header and credit text are smaller.

## Route map

The geographic map compares the three base routes on the same scale. Its simplified coastline uses Japan's four main islands from [Natural Earth 1:50m](https://www.naturalearthdata.com/), plotted with an equirectangular projection and approximate `cos(38°)` horizontal scaling. Lines connect stops schematically; they are not railway tracks or evidence of direct services. Otaru is a day trip from Sapporo; Kyoto is a day trip from Osaka on the Fukuoka route. Longer-trip additions are omitted. The map and its text legend stack on phones.

## Edit and preview

Run `python3 -m http.server 4173` in this directory and open [the local preview](http://localhost:4173).

- `index.html`: content, photographs and official planning links.
- `styles.css`: responsive styling and illustration crops.
- `assets/inspiration/`: original, full-size supplied AI poster PNGs.
- `PRODUCT.md`: confirmed audience, content and interaction constraints.
- `DESIGN.md` and `.impeccable/design.json`: visual system and component previews.

GitHub Pages publishes from the root of `main`.

## Imagery and planning context

Real destination photographs are externally hosted by [JNTO](https://www.japan.travel/), [Visit Sapporo](https://visit.sapporo.travel/seasons/winter/) and [Sorasak / Unsplash](https://unsplash.com/photos/_UIN-pFfJ7c). The snowy Fuji cover comes from [JNTO's Lake Kawaguchi page](https://www.japan.travel/en/sports/snow/snow-travel/lake-kawaguchi/); Fuji is visual inspiration, not a scheduled stop. External photographs and Google Fonts require internet access.

Activity photography also includes [Hida Takayama's sarubobo activity](https://www.hida.jp/english/recreationandleisure/traditionalandhistory/4000063.html), [JNTO's Shiroi Koibito Park](https://www.japan.travel/en/spot/1917/), [Visit Fukuoka's Dazaifu plum blossoms](https://www.crossroadfukuoka.jp/en/articles/ume) and [Marine World's aquarium](https://marine-world.jp/for-foreigners/). These are real photographs, distinct from the supplied food illustrations. Plum blossom and winter-event images do not establish timing for the eventual trip.

Food illustrations are CSS crops of the supplied AI poster PNGs; the plum decoration uses an SVG viewport crop of the same supplied artwork. Full originals remain in `assets/inspiration/`. These are credited as illustrations, not destination photographs or evidence of actual conditions.

No travel year or exact dates are confirmed. Arrival and departure count toward the trip length; seven days means six nights. Snow, winter events, activity age requirements, availability and transport connections need checking for the selected dates. Images do not guarantee weather, event dates or bookable experiences.

## Verification

The completed redesign was checked in a browser at 320, 390, 768 and 1440 pixels with no document overflow and all images loaded. Mobile screenshots were reviewed for the cover, destination panels, activities, food crops and map; actual viewport capture confirmed map text wrapping at 320px. Main reading text and descriptive captions are at least 16px, including rendered map labels at the narrowest checked width. Official attraction links were checked and two obsolete links replaced. An independent visual/content review cleared the route-order and map-legibility findings. The page includes semantic headings, a skip link, visible keyboard focus and print styling. Repeat browser checks after layout or image changes.
