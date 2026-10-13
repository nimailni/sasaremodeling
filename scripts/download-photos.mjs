// Run only when preparing the sample assets, not during normal builds.
import { mkdir, writeFile, access } from 'node:fs/promises';
import { photos } from '../data/site.mjs';
await mkdir(new URL('../assets/images/',import.meta.url), { recursive: true });
await Promise.all(photos.map(async photo => {
  const target = new URL(`../${photo.src}`,import.meta.url);
  if (!process.argv.includes('--refresh')) { try { await access(target); return; } catch {} }
  const response = await fetch(`${photo.source}?auto=format&fit=crop&w=1800&q=85&fm=jpg`);
  if (!response.ok || !response.headers.get('content-type')?.startsWith('image/')) throw new Error(`${photo.id}: HTTP ${response.status}`);
  await writeFile(target, Buffer.from(await response.arrayBuffer()));
  console.log(`Saved ${photo.file}`);
}));
