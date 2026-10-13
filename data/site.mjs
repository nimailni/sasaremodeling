// All contact details live here. Rebuild after edits: npm run build.
export const business = {
  name: 'Sasa Remodeling',
  owner: 'Sasa Bulajic',
  phone: '713.301.8144',
  phoneHref: 'tel:+17133018144',
  email: 'sasaremodeling@sasaremodeling.com',
  serviceArea: 'Houston and surrounding areas',
};

// English content is shared with the bilingual page builder in data/locales.mjs.
export const english = {
  nav: [['index.html', 'Home'], ['about.html', 'About us'], ['gallery.html', 'Gallery'], ['contact.html', 'Contact us']],
  hero: { eyebrow: 'HOME REMODELING · HOUSTON, TEXAS', title: business.name, tagline: 'Make your home feel more like you.', intro: 'Remodeling, tile, wood, and stone installation for homes across Houston and surrounding areas.' },
  galleryNote: 'A little inspiration: these sample photos show ideas and materials, not completed Sasa Remodeling projects.',
  services: [
    { number: '01', title: 'Spaces for everyday living', text: 'Home, kitchen, and bathroom remodeling. Bring your ideas for a room that works better and feels more like home.', detail: 'Home remodeling · Kitchens · Bathrooms', photo: 'kitchen-island' },
    { number: '02', title: 'Tile & natural stone', text: 'From a shower to a kitchen backsplash, thoughtful material choices can bring a whole room together.', detail: 'Tile installation · Showers · Backsplashes · Natural stone', photo: 'bathroom-vanity' },
    { number: '03', title: 'Warmth in the details', text: 'Hardwood flooring, wood trim, and stair work to add warmth and connect the spaces in your home.', detail: 'Hardwood installation · Wood trim · Stair work', photo: 'wood-living-room' },
  ],
};

// Local files, captions, categories, alt text, and source records in one place.
// Use your own authorized project photos here when they are ready.
export const photos = [
  { id: 'warm-kitchen', file: 'warm-kitchen-and-island.jpg', category: 'Kitchens', caption: 'A kitchen made for gathering', alt: 'Modern white kitchen with a stone counter, gray backsplash, and colorful cookware', unsplashId: 'photo-1556911220-bff31c812dba' },
  { id: 'kitchen-island', file: 'white-kitchen-with-wood-details.jpg', category: 'Kitchens', caption: 'Light, texture, and everyday space', alt: 'White kitchen with open shelving, wood details, and a central island', unsplashId: 'photo-1556912172-45b7abe8b7e1' },
  { id: 'kitchen-counter', file: 'kitchen-counter-and-cabinetry.jpg', category: 'Kitchens', caption: 'Room for the everyday', alt: 'Modern kitchen cabinetry and counters with a clean, light finish', unsplashId: 'photo-1556912167-f556f1f39fdf' },
  { id: 'bathroom-vanity', file: 'bathroom-vanity-and-tile.jpg', category: 'Bathrooms', categories: ['Bathrooms','Tile & stone'], caption: 'A calm place to begin the day', alt: 'Bathroom with a freestanding tub, a white vanity, and gray tiled flooring', unsplashId: 'photo-1620626011761-996317b8d101' },
  { id: 'bathroom-shower', file: 'bathroom-shower-and-stone.jpg', category: 'Bathrooms', categories: ['Bathrooms','Tile & stone'], caption: 'Simple lines, thoughtful finishes', alt: 'Bathroom with a glass shower, pale tiled walls, wood-look flooring, and a long vanity', unsplashId: 'photo-1584622650111-993a426fbf0a' },
  { id: 'stone-interior', file: 'dining-space-and-wood-stair-details.jpg', category: 'Wood details', caption: 'Materials that connect a space', alt: 'Modern dining space with wood floors, a staircase, and vertical wood detailing', unsplashId: 'photo-1600607687920-4e2a09cf159d' },
  { id: 'tile-bathroom', file: 'open-wood-stairs-and-living-space.jpg', category: 'Wood details', caption: 'Woodwork that opens up a room', alt: 'Bright living space with an open wooden staircase and wood flooring', unsplashId: 'photo-1600566753086-00f18fb6b3ea' },
  { id: 'wood-living-room', file: 'living-room-with-hardwood.jpg', category: 'Wood details', caption: 'Warm wood underfoot', alt: 'Comfortable living space with wood floors, neutral furniture, and natural light', unsplashId: 'photo-1600210492486-724fe5c67fb0' },
  { id: 'wood-interior', file: 'wood-floor-and-interior-details.jpg', category: 'Wood details', caption: 'A softer, warmer living space', alt: 'Neutral living room with wood furniture and flooring', unsplashId: 'photo-1616486338812-3dadae4b4ace' },
  { id: 'wood-trim', file: 'warm-wood-and-open-living.jpg', category: 'Wood details', caption: 'Details that feel at home', alt: 'Open living space with warm wood flooring and light-colored furnishings', unsplashId: 'photo-1600607687939-ce8a6c25118c' },
].map(photo => ({ ...photo, src: `assets/images/${photo.file}`, source: `https://images.unsplash.com/${photo.unsplashId}`, license: 'https://unsplash.com/license' }));

// Serbian photo copy stays beside the shared image paths and English metadata.
const serbianPhotos = {
  'warm-kitchen': ['Kuhinja za zajedničke trenutke', 'Moderna bela kuhinja sa kamenom radnom pločom, sivom zidnom oblogom i šarenim posuđem'],
  'kitchen-island': ['Svetlost, tekstura i prostor za svaki dan', 'Bela kuhinja sa otvorenim policama, drvenim detaljima i centralnim ostrvom'],
  'kitchen-counter': ['Prostor za svakodnevni život', 'Moderni kuhinjski elementi i radne ploče u svetlim tonovima'],
  'bathroom-vanity': ['Miran početak dana', 'Kupatilo sa samostojećom kadom, belim ormarićem sa umivaonikom i sivim podnim pločicama'],
  'bathroom-shower': ['Jednostavne linije, pažljivo odabrani detalji', 'Kupatilo sa staklenom tuš-kabinom, svetlim zidnim pločicama, podom sa izgledom drveta i dugačkim ormarićem'],
  'stone-interior': ['Materijali koji povezuju prostor', 'Moderna trpezarija sa drvenim podom, stepeništem i vertikalnim drvenim detaljima'],
  'tile-bathroom': ['Drvo koje otvara prostor', 'Svetao dnevni boravak sa otvorenim drvenim stepeništem i drvenim podom'],
  'wood-living-room': ['Toplina drvenog poda', 'Udoban dnevni boravak sa drvenim podom, nameštajem u neutralnim tonovima i prirodnim svetlom'],
  'wood-interior': ['Nežniji tonovi, topliji prostor', 'Dnevni boravak u neutralnim tonovima sa drvenim nameštajem i podom'],
  'wood-trim': ['Detalji koji unose toplinu', 'Otvoren dnevni prostor sa toplim drvenim podom i svetlim nameštajem'],
};
export function getPhotos(language = 'en') {
  return photos.map(photo => language === 'sr' ? { ...photo, caption: serbianPhotos[photo.id][0], alt: serbianPhotos[photo.id][1] } : photo);
}
