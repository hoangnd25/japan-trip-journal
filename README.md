# Japan, together

A responsive family trip comparison page inspired by a Japanese travel poster.

Live page: https://hoangnd25.github.io/japan-trip-journal/

## Features

- Three original shortlist routes, with pastel destination panels and schematic route maps.
- Suggested 7-, 9- and 10-day itineraries with matching overnight totals.
- Share links retain the selected route and trip length.
- Accessible controls, reduced-motion support and a printable itinerary.

## Edit and preview

This is a static website with no build step or dependencies to install.
Run `python3 -m http.server 4173` from this directory and open
http://localhost:4173.

- `index.html`: page content and official planning links.
- `app.js`: itinerary allocations, route sketches, photo strips and sharing.
- `styles.css`: layout and interaction foundations.
- `poster.css`: the pastel travel-poster visual treatment.

GitHub Pages publishes from the root of `main`. Push changes to update the site.

## Content and imagery

The supplied shortlist is a planning starting point, not a booking-ready itinerary.
Dates are not yet confirmed. Arrival and departure days count toward trip length.
Flight, train and bus timings should be checked before booking.

The Mount Fuji hero is by JJ Ying via Unsplash:
https://unsplash.com/photos/9Qwbfa_RM94.
Its spring blossoms are inspirational imagery, not a winter blossom forecast.
Fuji is not a scheduled stop in these routes.

Destination imagery is displayed from Japan National Tourism Organization:
https://www.japan.travel/. External photo and font services require internet access.
Route sketches are schematic, not navigation maps. Official travel references
are linked in the page.

## Verification

Checked in a browser at 320, 390, 768 and 1440 pixels without document overflow.
All nine route/length combinations have `days - 1` overnight allocations.
Shared query links restore the correct route and trip length.
