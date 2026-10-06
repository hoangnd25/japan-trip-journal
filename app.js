const routes = {
  alps: {
    title: 'The Alps & familiar favourites',
    short: 'Tokyo → Takayama → Kyoto → Osaka',
    note: 'Tokyo to Takayama is a substantial transfer. Keep that day light. The extended route continues via Shirakawa-go and Kanazawa to avoid returning through Takayama.',
    plans: {
      7: [['Tokyo', 2, 'Ease into the trip with neighbourhood wandering and favourite food.'], ['Takayama', 2, 'Old-town streets, morning markets and a taste of Hida beef.'], ['Kyoto', 1, 'Choose one favourite area and explore slowly.'], ['Osaka', 1, 'Finish with food and a flexible family afternoon.']],
      9: [['Tokyo', 2, 'A gentle arrival and time to revisit favourite neighbourhoods.'], ['Takayama', 2, 'Markets, traditional streets and a relaxed mountain-town stay.'], ['Kanazawa', 2, 'Continue via Shirakawa-go; leave another day for Kanazawa.', 'Shirakawa-go stop en route'], ['Osaka', 2, 'One home base for Kansai, with Kyoto as an optional day trip.', 'Optional Kyoto day trip']],
      10: [['Tokyo', 2, 'A gentle arrival and time to revisit favourite neighbourhoods.'], ['Takayama', 2, 'Markets, traditional streets and a relaxed mountain-town stay.'], ['Kanazawa', 2, 'Continue via Shirakawa-go and spend an unhurried day in Kanazawa.', 'Shirakawa-go stop en route'], ['Osaka', 3, 'Settle into Kansai, with a Kyoto day trip and a flexible family day.', 'Optional Kyoto day trip']]
    }
  },
  north: {
    title: 'Hokkaido & a Tokyo finale',
    short: 'Sapporo → Otaru → Hakodate → Tokyo',
    note: 'Otaru is a day trip from Sapporo. Sapporo to Hakodate and Hakodate to Tokyo are substantial transfers; the longer versions give Hakodate a full day between them. Compare train and flight options.',
    plans: {
      7: [['Sapporo', 3, 'A city day, favourite winter foods and an Otaru outing.', 'Otaru day trip'], ['Hakodate', 1, 'A compact harbour-city stop; keep the arrival evening flexible.'], ['Tokyo', 2, 'Return to familiar favourites before flying home.']],
      9: [['Sapporo', 3, 'Explore the city and make a day of Otaru’s canal and music boxes.', 'Otaru day trip'], ['Hakodate', 2, 'Give the market, harbour and views an unhurried full day.'], ['Tokyo', 3, 'Family activities, favourite food and a little shopping.']],
      10: [['Sapporo', 4, 'More time for snowy play, city exploring and a relaxed Otaru visit.', 'Otaru day trip'], ['Hakodate', 2, 'Give the market, harbour and views an unhurried full day.'], ['Tokyo', 3, 'Family activities, favourite food and a little shopping.']]
    }
  },
  food: {
    title: 'A delicious journey east',
    short: 'Fukuoka → Osaka / Kyoto → Tokyo',
    note: 'Use Osaka as your Kansai base and visit Kyoto without changing hotels. Longer trips add Hiroshima with a Miyajima day trip. A straightforward corridor still includes long train journeys.',
    plans: {
      7: [['Fukuoka', 2, 'Ramen, city wandering and an optional Dazaifu outing.'], ['Osaka', 2, 'Food and family time, with Kyoto as an optional day trip.', 'Optional Kyoto day trip'], ['Tokyo', 2, 'Finish with favourite neighbourhoods and an easy departure.']],
      9: [['Fukuoka', 2, 'Ramen, city wandering and an optional Dazaifu outing.'], ['Hiroshima', 2, 'A city day and a Miyajima outing at a comfortable pace.', 'Miyajima day trip'], ['Osaka', 2, 'A Kansai base with Kyoto as an optional day trip.', 'Optional Kyoto day trip'], ['Tokyo', 2, 'Favourite neighbourhoods and a little last-minute shopping.']],
      10: [['Fukuoka', 2, 'Ramen, city wandering and an optional Dazaifu outing.'], ['Hiroshima', 2, 'A city day and a Miyajima outing at a comfortable pace.', 'Miyajima day trip'], ['Osaka', 3, 'More breathing room for Osaka, Kyoto and family activities.', 'Optional Kyoto day trip'], ['Tokyo', 2, 'Favourite neighbourhoods and an easy departure.']]
    }
  }
};
let selectedRoute = 'alps';
let selectedDays = 7;
const itinerary = document.querySelector('#itinerary');
function render() {
  const route = routes[selectedRoute];
  const stops = route.plans[selectedDays];
  const nights = stops.reduce((total, stop) => total + stop[1], 0);
  itinerary.innerHTML = `<div class="itinerary-header"><div><p class="eyebrow">SUGGESTED ${selectedDays}-DAY PLAN</p><h3>${route.title}</h3></div><span class="night-count">${selectedDays} days · ${nights} nights</span></div><ol class="stops">${stops.map(([city, count, description, sideTrip]) => `<li class="stop"><span class="stop-dot" aria-hidden="true"></span><div><h4>${city}</h4><p>${description}</p>${sideTrip ? `<small>${sideTrip}</small>` : ''}</div><div class="stop-nights">${count}<span> ${count === 1 ? 'night' : 'nights'}</span></div></li>`).join('')}</ol><p class="itinerary-note"><strong>A note on the journey.</strong> ${route.note}</p>`;
  document.querySelectorAll('[data-route]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.route === selectedRoute)));
  document.querySelectorAll('[data-days]').forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.days) === selectedDays)));
}
document.querySelectorAll('[data-days]').forEach(button => button.addEventListener('click', () => { selectedDays = Number(button.dataset.days); render(); }));
document.querySelectorAll('[data-route]').forEach(button => button.addEventListener('click', () => { selectedRoute = button.dataset.route; render(); }));
document.querySelectorAll('[data-select-route]').forEach(button => button.addEventListener('click', () => { selectedRoute = button.dataset.selectRoute; render(); document.querySelector('#planner').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }); }));
document.querySelector('#recommendation-link').addEventListener('click', () => { selectedRoute = 'alps'; render(); });
let toastTimer;
function toast(message) { const element = document.querySelector('#toast'); element.textContent = message; element.classList.add('visible'); clearTimeout(toastTimer); toastTimer = setTimeout(() => element.classList.remove('visible'), 4000); }
document.querySelector('#share').addEventListener('click', async () => {
  const url = new URL(location.href); url.hash = ''; url.search = ''; url.searchParams.set('route', selectedRoute); url.searchParams.set('days', selectedDays);
  try {
    if (navigator.clipboard) { await navigator.clipboard.writeText(url.href); toast('Trip link copied. Ready to share.'); }
    else if (navigator.share) { await navigator.share({ title: 'Japan, together', text: `${routes[selectedRoute].short} · ${selectedDays} days`, url: url.href }); }
    else { window.prompt('Copy this trip link:', url.href); }
  } catch (error) { if (error.name !== 'AbortError') { window.prompt('Copy this trip link:', url.href); } }
});
const params = new URLSearchParams(location.search);
if (Object.hasOwn(routes, params.get('route'))) selectedRoute = params.get('route');
if ([7, 9, 10].includes(Number(params.get('days')))) selectedDays = Number(params.get('days'));
render();

// Small destination photo strips and schematic routes echo a printed travel poster.
const photoBase = 'https://res-1.cloudinary.com/jnto/image/upload/w_600,h_400,c_fill,f_auto,fl_lossy,q_auto/';
const galleries = [
  [['v1648535635/gifu/H_00092_002.jpg','Takayama','Traditional mountain town'],['v1708486323/kyoto/Kyoto_s2023_ID3-1_1','Kyoto','Culture & quiet wandering'],['v1514378461/osaka/Osaka798_4','Osaka','Food & family fun']],
  [['v1512444240/hokkaido/Hokkaido1363_2','Sapporo','Food & northern adventures'],['v1515929126/hokkaido/Hokkaido1518_3','Otaru','Canals & little discoveries'],['v1515929737/hokkaido/Hokkaido1432_5','Hakodate','Harbour views & markets']],
  [['v1516703808/fukuoka/Fukuoka1614_6','Fukuoka','Local food & city life'],['v1514378461/osaka/Osaka798_4','Osaka','A delicious Kansai base'],['v1513936386/tokyo/Tokyo2258_24','Tokyo','Our familiar favourites']]
];
const mapStops = [
  [[137,92,'Tokyo',10,-2],[113,90,'Takayama',-49,-9],[97,111,'Kyoto',-34,-3],[88,119,'Osaka',-28,12]],
  [[157,31,'Sapporo',-54,-2],[147,26,'Otaru',-40,-7],[145,48,'Hakodate',-60,5],[137,92,'Tokyo',10,0]],
  [[51,133,'Fukuoka',-38,-10],[88,119,'Osaka',4,12],[97,111,'Kyoto',-22,-10],[137,92,'Tokyo',10,-1]]
];
document.querySelectorAll('.route-card .card-body').forEach((card, index) => {
  const label = document.createElement('div'); label.className = 'poster-label'; label.textContent = `OPTION 0${index + 1}${index === 0 ? ' · OUR FIRST PICK' : ''}`; card.prepend(label);
  const map = document.createElement('div'); map.className = 'route-map';
  map.innerHTML = `<svg viewBox="0 0 210 170" role="img" aria-label="Schematic route sketch"><g class="land"><path d="M149 12l9 10 15-1 6 8-13 5-8 14-14-4-5-13 5-7z"/><path d="M147 51l8 7-7 15-7 7-2 12-9 9-8 4-5 10-18 7-9 5-10-3-15 8-11-5 8-8 17-4 12-8 13-3 12-9 9-10 7-14 1-14z"/><path d="M62 135l12-8 13 4-7 9-15 4z"/><path d="M38 129l12-4 11 7-8 11-1 12-12 4-7-11z"/></g><path class="route-line" d="M${mapStops[index].map(([x,y]) => `${x},${y}`).join(' L')}"/>${mapStops[index].map(([x,y,name,dx,dy]) => `<circle class="city-dot" cx="${x}" cy="${y}" r="3"/><text x="${x+dx}" y="${y+dy}">${name}</text>`).join('')}<text class="map-label" x="108" y="165" text-anchor="middle">ROUTE SKETCH</text></svg>`;
  card.append(map);
  const gallery = document.createElement('div'); gallery.className = 'route-gallery'; gallery.innerHTML = galleries[index].map(([path,city,caption]) => `<figure><img src="${photoBase}${path}" alt="${city}, Japan" loading="lazy"><figcaption>${city}<small>${caption}</small></figcaption></figure>`).join('');
  card.querySelector('.card-highlights').before(gallery);
});
