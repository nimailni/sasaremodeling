// Optional browser QA. Uses the desktop app's bundled Playwright and Sharp.
const { createRequire } = require('node:module');
const fs = require('node:fs/promises');
const path = require('node:path');
const runtimeRequire = createRequire(path.join(process.env.SASA_NODE_MODULES || 'C:/Users/Emil/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules', 'package.json'));
const { chromium } = runtimeRequire('playwright');
const sharp = runtimeRequire('sharp');
const assert = (condition, message) => { if (!condition) throw new Error(message); };
(async () => {
  await fs.mkdir('qa-output', { recursive: true });
  const sources = (await fs.readdir('assets/images')).filter(name => name.endsWith('.jpg'));
  const tiles = await Promise.all(sources.map(async (name,index) => ({input: await sharp(path.join('assets/images',name)).resize(300,200,{fit:'cover'}).toBuffer(), left:(index%3)*300, top:Math.floor(index/3)*200})));
  await sharp({create:{width:900,height:Math.ceil(tiles.length/3)*200,channels:3,background:'#faf7f2'}}).composite(tiles).jpeg().toFile('qa-output/photo-contact-sheet.jpg');
  const browser = await chromium.launch({ headless: true, channel: 'msedge' });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror',error => errors.push(error.message));
  page.on('response',response => { if(response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
  const results = [];
  for (const width of [1440,768,390,320]) {
    await page.setViewportSize({width,height:1000});
    for (const file of ['index.html','about.html','gallery.html','contact.html']) {
      await page.goto(`http://localhost:4173/${file}`);
      await page.locator('img[src]').evaluateAll(images => Promise.all(images.map(image => { image.loading = 'eager'; return image.decode(); })));
      const info = await page.evaluate(() => ({overflow:document.documentElement.scrollWidth>innerWidth, heading:document.querySelectorAll('h1').length, current:document.querySelectorAll('[aria-current=page]').length, images:[...document.querySelectorAll('img[src]')].every(image=>image.complete&&image.naturalWidth>0), phone:document.querySelector('.header-phone').getAttribute('href')}));
      assert(!info.overflow,`${file} overflows at ${width}`);
      assert(info.heading===1&&info.current===1&&info.images&&info.phone==='tel:+17133018144',`${file} failed page check at ${width}`);
      if (width===1440||width===390) await page.screenshot({path:`qa-output/${file.replace('.html','')}-${width}.png`,fullPage:true});
      results.push(`${file} @ ${width}: pass`);
    }
  }
  await page.goto('http://localhost:4173/gallery.html');
  await page.getByRole('button',{name:'Bathrooms',exact:true}).click();
  assert(await page.locator('.gallery-card:visible').count()===2,'Bathroom filter failed');
  await page.locator('.gallery-card:visible').first().click();
  assert(await page.locator('dialog').isVisible(),'Viewer did not open');
  assert(await page.locator('.lightbox-count').textContent()==='1 / 2','Viewer count incorrect');
  await page.keyboard.press('ArrowRight');
  assert(await page.locator('.lightbox-count').textContent()==='2 / 2','Viewer arrow key failed');
  await page.keyboard.press('Escape');
  assert(!await page.locator('dialog').isVisible(),'Viewer Escape failed');
  assert(await page.locator('.gallery-card:visible').first().evaluate(element => element===document.activeElement),'Focus was not restored');
  await page.getByRole('button',{name:'All photos',exact:true}).click();
  assert(await page.locator('.gallery-card:visible').count()===10,'All filter failed');
  await page.getByRole('button',{name:'Menu',exact:true}).click();
  assert(await page.locator('.menu-toggle').getAttribute('aria-expanded')==='true','Mobile menu failed');
  await page.keyboard.press('Escape');
  assert(await page.locator('.menu-toggle').getAttribute('aria-expanded')==='false','Mobile menu Escape failed');
  await page.goto('http://localhost:4173/contact.html');
  assert(await page.locator('.contact-email').getAttribute('href')==='mailto:sasaremodeling@sasaremodeling.com','Email link failed');
  assert(errors.length===0,`Browser errors: ${errors.join('; ')}`);
  await browser.close();
  await fs.writeFile('qa-output/results.txt',results.join('\n')+'\nGallery filters, viewer arrow/Escape/focus, mobile menu, email: pass\nNo page errors or HTTP failures.\n');
  console.log(await fs.readFile('qa-output/results.txt','utf8'));
})().catch(error => { console.error(error); process.exitCode=1; });
