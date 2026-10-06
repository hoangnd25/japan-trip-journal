# Japan, together

A responsive family trip briefing for mid-to-late February, inspired by a Japanese travel poster.

Live page: https://hoangnd25.github.io/japan-trip-journal/

## Features

- Three original shortlist routes in cohesive pink, blue and green panels.
- Each route groups its photos, 7-day overnight plan, 9/10-day variations and travel caveat.
- Winter photographs for Takayama and Hokkaido; season-compatible evening views for the cities.
- Static reading: no JavaScript, sharing, animation or selection controls. Links navigate to routes.
- Mobile body text is 16px and supporting photo captions are 14px. Each route has a large lead photograph and two supporting views.
- Accessible landmarks, focus indicators and a printable trip briefing.

## Edit and preview

This is a static website with no build step or dependencies to install.
Run `python3 -m http.server 4173` from this directory and open
http://localhost:4173.

- `index.html`: page content and official planning links.
- `styles.css`: the complete responsive travel-poster visual treatment.

GitHub Pages publishes from the root of `main`. Push changes to update the site.

## Content and imagery

The supplied shortlist is a planning starting point, not a booking-ready itinerary.
The period is mid-to-late February; the year and exact dates are not yet specified.
Arrival and departure days count toward trip length.
Flight, train and bus timings should be checked before booking.

The winter Mount Fuji hero and most destination photographs are displayed from JNTO.
The Fuji photograph is sourced from https://www.japan.travel/en/sports/snow/snow-travel/lake-kawaguchi/.
It provides trip inspiration; Fuji is not a scheduled stop in the proposed routes.
Sapporo winter imagery is from https://visit.sapporo.travel/seasons/winter/.
The Kyoto evening photo is by Sorasak / Unsplash:
https://unsplash.com/photos/_UIN-pFfJ7c.

Destination imagery is displayed from Japan National Tourism Organization:
https://www.japan.travel/. External photo and font services require internet access.
Snow varies by place and weather. Winter-event photos illustrate the season;
event dates must be checked for the actual travel year. Official travel references
are linked in the page. No exact transport times, fares or booked activities are implied.

## Verification

Checked in a browser at 320, 390, 768 and 1440 pixels without document overflow.
All nine route/length combinations have `days - 1` overnight allocations.
All photos load and all in-page navigation anchors resolve. The page has no buttons,
scripts or active animations. Practical text sizes were measured in the browser.
