# Wallchemy — website

A single-page site for Wallchemy. No build step, no framework, no server. It is three things:

```
index.html     ← home page
product.html   ← every product page (reads ?id= from the URL)
products.js    ← THE CATALOGUE — this is the file you'll edit
styles.css     ← all styling for both pages
site.js        ← shared behaviour (theme, nav, ordering)
404.html       ← shown for bad URLs
assets/        ← product photos + logo cutouts
robots.txt     ← lets search engines index the site
sitemap.xml    ← edit the URL inside once you know your address
.nojekyll      ← tells GitHub Pages not to process the folder
```

Open `index.html` in a browser and it works. That is also why it hosts free anywhere.

**One product page, twelve products.** Rather than twelve near-identical HTML files to keep in sync, `product.html` reads the product id out of the URL and builds itself from `products.js`. So `product.html?id=lumen-arch` and `product.html?id=grand-entry` are different pages to a customer and to Google, but there is only one file for you to maintain. Add a product to `products.js` and its page exists immediately.

---

## 1. Put it online for free

Three options. **Cloudflare Pages** gives the fastest site in Bangladesh, **GitHub Pages** is the simplest if you plan to edit often, **Netlify** is the fastest to get live the very first time.

### Option A — GitHub Pages (recommended)

You get `https://<your-username>.github.io/wallchemy/`.

1. Make a free account at **github.com**.
2. Click **+** (top right) → **New repository**.
   - Name: `wallchemy`
   - Public
   - Do **not** tick "Add a README"
   - **Create repository**
3. On the empty repo page, click **uploading an existing file**.
4. Drag in `index.html`, `404.html`, `README.md`, `.nojekyll` **and the whole `assets` folder**. Wait for all files to finish, then **Commit changes**.
5. Go to **Settings → Pages** (left sidebar).
6. Under *Build and deployment*: Source = **Deploy from a branch**, Branch = **main**, folder = **/ (root)** → **Save**.
7. Wait 1–2 minutes, refresh the page. Your link appears at the top.

**Shorter URL trick:** name the repository `<your-username>.github.io` instead of `wallchemy`. The site then lives at `https://<your-username>.github.io/` with no folder on the end.

To update anything later: open the file on GitHub → pencil icon → edit → **Commit changes**. Live in about a minute.

### Option B — Cloudflare Pages (fastest loading in BD)

1. Account at **dash.cloudflare.com** → **Workers & Pages** → **Create** → **Pages** → **Upload assets**.
2. Name the project `wallchemy`, drag the whole folder in, **Deploy**.
3. You get `https://wallchemy.pages.dev`.

Cloudflare has edge servers close to Dhaka, so this loads noticeably quicker than GitHub Pages for local customers. It also handles image caching better.

### Option C — Netlify Drop (60 seconds, no account needed to test)

1. Go to **app.netlify.com/drop**.
2. Drag the whole `wallchemy` folder onto the page.
3. It is live. Sign up (free) to keep the URL and rename it to `wallchemy.netlify.app`.

### Later, when you buy a domain

All three support custom domains free — you only pay the domain registrar (~$10/year for `.com`, or a `.com.bd` through BTCL). In GitHub: **Settings → Pages → Custom domain**. In Cloudflare/Netlify: **Domains → Add**. Nothing in the site files needs to change.

---

## 2. Edit your products

Open **`products.js`**. Each piece looks like this:

```js
{
  id:"lumen-arch",                    // the URL: product.html?id=lumen-arch
  name:"Lumen Arch",
  tag:"Planter panels",
  cat:"Planter panels",               // creates the filter buttons automatically
  lead:"An arched sandstone panel…",  // first sentence also shows on the card
  price:6900, was:8200,               // taka. delete `was:` to hide the strikethrough
  sizes:["27.6\" × 11.8\"", "35\" × 15\""],
  finishes:["Cream / Rust", "Cream / Walnut"],
  about:["First paragraph…","Second paragraph…"],  // the description on the product page
  features:["…","…"],                 // the "What you get" bullets
  specs:{ "Overall size":"…", "Weight":"…" },      // rows in the spec table
  images:["lumen-1.jpg","lumen-2.jpg"], // first = card image, second = hover image
  note:"Photographed in Cream / Rust…"  // small print under the buttons
}
```

**The spec table.** Every product inherits `BASE_SPECS` at the top of `products.js` — panel core, surface, light source, power, vase, mounting, box contents, lead time, warranty. A product's own `specs` block overrides any of those and adds its own rows. So if you change the warranty once at the top, it changes on all twelve pages. The table renders in the order the rows are written.

- **Adding a piece:** copy a whole `{ … }` block, paste it after, change the values, give it a new `id`.
- **Adding photos:** drop the files into `assets/` and list the filenames in `images`. As many as you like — the counter and thumbnail rail update themselves.
- **New category:** just type a new `cat` value. The filter chip appears on its own.
- **Removing a piece:** delete its `{ … }` block including the trailing comma.

## 2b. Edit the FAQ

Right below `PRODUCTS` there's a `FAQ` array — pairs of `["question", "answer"]`. Add, remove or reword freely; the accordion rebuilds itself.

These answers are the ones that decide whether someone messages you or closes the tab, so go through them carefully: **the delivery charges, courier names, payment methods and lead times in there are my best guesses and you should replace them with your real numbers before launch.**

**A note on the current photos.** These are reference images from the listings you sent, used as placeholders so you can see the layout working. Replace them with your own photography before you take orders — square crops (1:1) at around 1200×1200px look best.

Nothing in the catalogue now borrows another piece's photography. Every product shows itself. Four of the ten — Hare & Hollow, Swift Panel, Watercolour Arch, Green Column — have only a single photo each, and their `note` field says so. Once you shoot more angles, drop the files into `assets/` and add the filenames to that product's `images` array; the thumbnail rail and arrows appear on their own as soon as there are two or more.

---

## 3. How ordering works

There is no cart and no payment gateway, which is what keeps hosting free.

When a customer taps **Order on Messenger**:

1. A formatted order summary is copied to their clipboard — piece, size, finish, price, plus blank lines for name, address and phone.
2. `m.me/Wallchemy.BD` opens in a new tab.
3. A toast tells them to paste it in the chat.

Facebook does not let a plain link pre-fill message text for a Page — only an approved Messenger bot can do that. The copy-then-paste flow is the closest thing that works reliably, and customers understand it immediately.

To change the page it points to, edit these lines at the top of the script:

```js
const FB_PAGE  = "Wallchemy.BD";
const FB_GROUP = "https://www.facebook.com/groups/1007067638799316";
```

**If you later want true one-tap ordering,** the upgrade path is a free Google Form (or Tally) opened with the product pre-filled in the URL — that gives you a spreadsheet of orders and still costs nothing. Say the word and I'll wire it in alongside the Messenger button.

---

## 4. What's built in

- **Liquid glass** — every panel is a real backdrop-blurred surface with a refracted bright edge, an inner shadow, and a specular highlight that sweeps across on hover. Where the browser supports it, an SVG displacement filter adds actual distortion behind the glass.
- **Dark / light** — toggle in the header, remembered between visits, and it follows the customer's system setting the first time. Both palettes come from your logo.
- **Motion** — staggered scroll reveals, a hero that unfolds line by line, parallax on the detail image, a breathing LED glow behind the hero panel, cross-fading product photos on card hover, and a drawer that slides in over a blurred page.
- **Accessibility** — keyboard-operable cards and gallery (arrow keys, Escape), visible focus rings, and everything above is switched off for anyone with "reduce motion" turned on.
- **Mobile** — the nav collapses into a glass sheet, the grid goes single-column, and the gallery accepts swipes.
- **FAQ accordion** — eight common questions, one open at a time, animated open with a real height transition rather than a jump.
- **Floating message button** — appears once the customer scrolls past the hero, expands on hover, hides itself while a product drawer is open.
- **Search engines** — `HomeGoodsStore` structured data in the head (name, area served, payment methods, both Facebook links), plus `robots.txt` and `sitemap.xml`. After you go live, submit the URL at `search.google.com/search-console` so it starts appearing in results.

## 5. Small things worth doing before launch

- Replace the placeholder photos with your own.
- Check every price and size against what you can actually deliver.
- Set the real Facebook page username if `Wallchemy.BD` ever changes.
- Add your phone number to the footer if you want calls as well as messages.
- Replace the guessed delivery charges, courier names and lead times in the FAQ with your real ones.
- Check every spec in `products.js`. Weights, sensor ranges, LED colour temperatures, layer gaps and vase capacities are plausible figures I wrote to show the table working, not measurements of your stock. A spec table's whole value is that it is true.
- Shoot more angles for the four single-photo pieces, then update their `note`.
- Put your live URL into `sitemap.xml` (it currently says `REPLACE-WITH-YOUR-URL`).
- Once live, paste the URL into the Facebook page's *Website* field so the two point at each other.
- Add a social preview image: the `og:image` tag in the head points at `assets/lumen-1.jpg`. Swap it for your best photo so links shared on Facebook look right.
