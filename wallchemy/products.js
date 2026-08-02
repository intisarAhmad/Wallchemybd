/* ============================================================
   WALLCHEMY — product catalogue
   This one file feeds both the home page and every product page.
   Edit here and both update. Nothing else needs touching.
   ============================================================ */

const FB_PAGE      = "Wallchemy.BD";
const FB_MESSENGER = "https://m.me/" + FB_PAGE;
const FB_GROUP     = "https://www.facebook.com/groups/1007067638799316";

/* Values shared by every piece — a product's own `specs` overrides these. */
const BASE_SPECS = {
  "Panel core":      "18mm density board, sealed on all faces",
  "Surface":         "Hand-troweled mineral sandstone, matte",
  "Edge":            "Borderless — no frame, no visible fixings",
  "Light source":    "Low-voltage LED strip, 3000K warm white",
  "Light direction": "Rear wall-wash — the diode is never in your eye",
  "Power":           "12V adapter, 1.8m braided cord, inline switch",
  "Vase":            "Removable borosilicate glass tube, holds water",
  "Mounting":        "Keyhole plate — one nail or one expansion plug",
  "In the box":      "Panel, vase, adapter, plug, screw, paper template",
  "Lead time":       "5–7 days, made to order",
  "Warranty":        "12 months on the LED and adapter"
};

const PRODUCTS = [
  /* ---------------------------------------------------------- */
  {
    id:"lumen-arch",
    name:"Lumen Arch",
    tag:"Planter panels",
    cat:"Planter panels",
    lead:"An arched sandstone panel with a clay-toned shelf and a glass tube that holds real water. The LED washes the wall behind it, so the plant throws a soft shadow after dark.",
    price:6900, was:8200,
    sizes:["27.6\" × 11.8\"","35\" × 15\""],
    finishes:["Cream / Rust","Cream / Walnut"],
    about:[
      "The Lumen Arch is the smallest thing we make and the one most people start with. A cream sandstone field, an arch cut through it, and a clay shelf carrying a glass tube of water. Nothing on it is printed — the arch is a real recess and the shelf really holds weight.",
      "It suits the wall beside a bed, the strip of wall next to a doorway, or the awkward gap above a low console where a framed picture would look stranded. At 1.4 inches deep it clears most furniture, and the light is soft enough to leave on while you sleep."
    ],
    features:[
      "Hand-troweled sandstone face, borderless edge",
      "Warm 3000K LED wall-wash with inline switch",
      "Removable glass vase — root cuttings in water",
      "27.6\" × 11.8\", only 1.4\" deep",
      "Hangs on one nail; plug and expansion bolt included"
    ],
    specs:{
      "Overall size":"27.6\" H × 11.8\" W × 1.4\" D (70 × 30 × 3.5cm)",
      "Weight":"2.1 kg",
      "Shelf":"Clay-finished, 5.9\" deep",
      "Vase capacity":"180ml",
      "Light control":"Inline rocker switch on the cord"
    },
    images:["lumen-1.jpg","lumen-vase.jpg","lumen-2.jpg","lumen-4.jpg","lumen-7.jpg","lumen-6.jpg"],
    note:"Photographed in Cream / Rust. Greenery is not included — the vase is sized for cuttings and single stems."
  },
  /* ---------------------------------------------------------- */
  {
    id:"lumen-duo",
    name:"Lumen Arch Duo",
    tag:"Planter panels",
    cat:"Planter panels",
    lead:"Two arches hung as a pair, one slightly higher than the other. Reads as a corridor piece or a headboard, and doubles the light without doubling the wattage.",
    price:12900, was:16400,
    sizes:["Pair — 27.6\" each","Pair — 35\" each"],
    finishes:["Cream / Rust","Cream / Walnut","Mixed pair"],
    about:[
      "Two Lumen Arches, hung with a deliberate offset so the pair reads as one composition rather than two objects that happen to match. We supply a paper template with the offset already marked, because getting it right by eye is harder than it looks.",
      "The two panels share a single adapter through a splitter, so you only need one socket. Ask for a mixed pair if you want one rust and one walnut — it costs the same and photographs better than two identical panels."
    ],
    features:[
      "Two matched arched panels, spaced 6–8\" apart",
      "Both lit; single plug with a splitter",
      "Two glass vases included",
      "Hanging template supplied so the offset stays even",
      "Best over a bed, a console or a stairwell wall"
    ],
    specs:{
      "Overall size":"Two panels, 27.6\" H × 11.8\" W each",
      "Wall width needed":"Minimum 32\" (81cm) including the gap",
      "Weight":"4.2 kg total",
      "Power":"Single 12V adapter with a two-way splitter",
      "In the box":"2 panels, 2 vases, adapter, splitter, 2 plugs, template"
    },
    images:["romance-4.jpg","lumen-1.jpg","lumen-detail.jpg","lumen-vase.jpg","lumen-7.jpg","lumen-6.jpg"],
    note:"Shown as a single panel — the Duo is two of these hung as a pair with an offset. We have no photo of the pair mounted yet; ask in the chat and we will send you a customer's picture."
  },
  /* ---------------------------------------------------------- */
  {
    id:"aurora",
    name:"Aurora Plug-In",
    tag:"Lit panels",
    cat:"Lit panels",
    lead:"A rectangular cream panel with a recessed lit channel that traces the inner arch. Remote-controlled, so you can dim it down to a night-light from the bed.",
    price:9800, was:11900,
    sizes:["27\" × 15\"","39\" × 20\""],
    finishes:["Cream","Cream / Clay"],
    about:[
      "The Aurora hides its light in a channel cut into the panel face, so you see the glow and never the diode. The remote handles brightness and a sleep timer, which is the difference between a decorative object and something you actually use every night.",
      "The relief is stepped rather than flat — the arch sits proud of the field by about half an inch, which is what gives the shadow line down its left side in daylight. That shadow is the piece's whole trick, so hang it where light comes from one side."
    ],
    features:[
      "Remote-controlled LED — brightness and timer",
      "Recessed light channel, no visible diode",
      "Sandstone face with a stepped 3D relief",
      "Plug-in with a 1.8m braided cord",
      "Glass vase seat built into the shelf"
    ],
    specs:{
      "Overall size":"27\" H × 15\" W × 1.6\" D (68.5 × 38 × 4cm)",
      "Weight":"3.4 kg",
      "Light control":"IR remote — brightness, on/off, 30/60min timer",
      "Relief depth":"0.5\" stepped arch",
      "Vase capacity":"200ml"
    },
    images:["aurora-1.jpg","aurora-detail.jpg","romance-3.jpg","aurora-3.jpg","lumen-6.jpg"],
    note:"Cord exits bottom-right by default. Ask for bottom-left in the chat if your socket is on the other side."
  },
  /* ---------------------------------------------------------- */
  {
    id:"aurora-entry",
    name:"Aurora Entry",
    tag:"Lit panels",
    cat:"Lit panels",
    lead:"The tall entryway version: a cream field beside a clay column, with a walnut shelf running the full width. Built for the first wall people see.",
    price:14500, was:17800,
    sizes:["47\" × 27\"","55\" × 31\""],
    finishes:["Cream / Clay","Cream / Charcoal"],
    about:[
      "This is the piece for the wall you face when you open the front door. A tall cream field, a clay column down one side, and a walnut shelf crossing both — the shelf is the only horizontal line, which is why the whole thing reads as taller than it is.",
      "The lit seam runs vertically between the two fields rather than around the edge, so it throws a narrow band of light up the wall instead of a halo. In a narrow hallway that reads better; a halo needs air around it to work."
    ],
    features:[
      "Two-tone panel — sandstone cream against a clay block",
      "Full-width shelf in walnut finish",
      "Vertical lit seam between the two fields",
      "Sized for entryways and stair landings",
      "Four-point mounting for the larger size"
    ],
    specs:{
      "Overall size":"47\" H × 27\" W × 1.8\" D (119 × 68.5 × 4.5cm)",
      "Weight":"6.8 kg",
      "Shelf":"Walnut finish, full width, 6.7\" deep",
      "Mounting":"Four-point — two upper keyholes, two lower stabilisers",
      "Lead time":"7–10 days for the 55\" size"
    },
    images:["aurora-2.jpg","aurora-detail.jpg","aurora-1.jpg","aurora-3.jpg","lumen-6.jpg"],
    note:"The larger size ships in two sections and is assembled on the wall. Allow 7–10 days."
  },
  /* ---------------------------------------------------------- */
  {
    id:"romance",
    name:"Romance Diptych",
    tag:"Statement",
    cat:"Statement",
    lead:"An ivory sandstone panel offset over a charcoal one, with a black shelf and a glass tube dropping through it. The backlight sits between the two layers.",
    price:13500, was:16900,
    sizes:["39.4\" × 23.6\"","47\" × 28\""],
    finishes:["Charcoal / Ivory","Charcoal / Sand"],
    about:[
      "Two panels, one sitting proud of the other, with the LED strip hidden in the gap between them. The light escapes around the edge of the top panel and lands on the wall behind — which is why the glow looks like it comes from nowhere.",
      "The depth here is real. A printed shadow on a flat board looks convincing in a photograph and obviously fake in person; this is two boards, 20mm apart, and it changes as you walk past it. It is the piece we would put in a living room you use in the evening."
    ],
    features:[
      "Two stacked panels — real depth, not printed shadow",
      "Concealed backlight glows from between the layers",
      "Matte black shelf with a through-hole vase",
      "39.4\" × 23.6\" as photographed",
      "Artificial stems shipped at random if you add them"
    ],
    specs:{
      "Overall size":"39.4\" H × 23.6\" W × 2.4\" D (100 × 60 × 6cm)",
      "Weight":"7.5 kg",
      "Layer gap":"20mm — the LED strip sits inside it",
      "Shelf":"Matte black, 4.7\" deep, drilled for the vase",
      "Mounting":"Two upper keyholes, 400mm apart"
    },
    images:["romance-1.jpg","romance-detail.jpg","romance-2.jpg","lumen-5.jpg","lumen-6.jpg"],
    note:"Dimensions can vary by roughly half an inch — these are finished by hand, not pressed."
  },
  /* ---------------------------------------------------------- */
  {
    id:"romance-ivory",
    name:"Romance Diptych — Ivory",
    tag:"Statement",
    cat:"Statement",
    lead:"The same layered build in a quieter register: ivory over sand, with a walnut shelf. Easier to live with in a small room, and it disappears against a pale wall until the light comes on.",
    price:13500, was:16900,
    sizes:["39.4\" × 23.6\"","47\" × 28\""],
    finishes:["Ivory / Sand","Ivory / Clay"],
    about:[
      "Same construction as the charcoal Romance, tuned down. Ivory over sand instead of ivory over charcoal, and a walnut shelf instead of a black one. In daylight it is almost invisible against a pale wall — you read it as texture rather than as an object.",
      "Then the light comes on and the layer separation appears. If you like the layered build but the charcoal version feels too heavy for the room, this is the one. It also works better in a bedroom, where high contrast on the wall tends to keep you awake."
    ],
    features:[
      "Tone-on-tone layering for pale walls",
      "Walnut-finish shelf with through-hole vase",
      "Same concealed backlight as the charcoal version",
      "Reads as texture by day, as light by night",
      "Made to order in 5–7 days"
    ],
    specs:{
      "Overall size":"39.4\" H × 23.6\" W × 2.4\" D (100 × 60 × 6cm)",
      "Weight":"7.5 kg",
      "Layer gap":"20mm — the LED strip sits inside it",
      "Shelf":"Walnut finish, 4.7\" deep, drilled for the vase",
      "Best against":"Cream, ivory, off-white or pale grey walls"
    },
    images:["romance-wide.jpg","romance-2.jpg","romance-detail.jpg","lumen-5.jpg","lumen-6.jpg"],
    note:"Photographed in a hallway at low light. The Ivory / Sand pairing is lower contrast than the charcoal version — ask for a daylight photo before ordering if that matters."
  },
  /* ---------------------------------------------------------- */
  {
    id:"hare-hollow",
    name:"Hare & Hollow",
    tag:"Statement",
    cat:"Statement",
    lead:"A light-coffee sandstone panel with a recessed arch, a shelf carrying a glass vase, and a small ceramic hare sitting at the other end. The light strip switches between three colour temperatures.",
    price:16500, was:19900,
    sizes:["41.3\" × 23.6\"","47\" × 27\""],
    finishes:["Light coffee","Charcoal / Cream","Sand / Walnut"],
    about:[
      "The hare is the reason people stop in front of this one. It is a small glazed figure seated on the shelf, facing the vase, and it turns the panel from a piece of decor into a little scene. If you would rather not have it, say so when you order and we leave it off — the shelf looks fine bare.",
      "The light strip carries three colour temperatures on one remote, so the same panel reads warm and amber in the evening and clean white in the morning. At just under four inches deep it stands further off the wall than the rest of the collection, which is what gives the arch its shadow."
    ],
    features:[
      "Three-temperature LED strip on a remote",
      "Recessed arch with concealed rear lighting",
      "Removable glass vase set through the shelf",
      "Glazed ceramic hare included — or omitted on request",
      "41.3\" × 23.6\", 4.7\" deep"
    ],
    specs:{
      "Overall size":"41.3\" H × 23.6\" W × 4.7\" D (105 × 60 × 12cm)",
      "Weight":"7.9 kg",
      "Light source":"Tri-temperature LED strip — warm, neutral and cool white",
      "Light control":"IR remote — colour, brightness, on/off",
      "Figure":"Glazed ceramic hare, approx. 12cm tall",
      "Depth note":"Deeper than our other panels — check it clears any nearby door swing"
    },
    images:["hare-1.jpg"],
    note:"One photograph so far — this piece is newly added and the rest of the shoot is booked. Ask in the chat for more angles before ordering."
  },
  /* ---------------------------------------------------------- */
  {
    id:"swift-panel",
    name:"Swift Panel",
    tag:"Statement",
    cat:"Statement",
    lead:"A tall green field with a flight of white birds crossing it, set against a cream panel, with a walnut shelf and a glass vase where the two meet.",
    price:19500, was:23900,
    sizes:["55\" × 27.6\"","47\" × 23.6\""],
    finishes:["Moss green / Cream","Charcoal / Cream","Clay / Cream"],
    about:[
      "The birds are cut and raised, not printed — each one sits slightly proud of the green field, so they cast their own small shadows and the flight reads differently depending on where the light in the room is coming from.",
      "This is the tallest thing we make that still hangs as a single panel, and it wants a narrow wall with height: beside a staircase, in a stairwell, or on the blank strip next to a tall window. The LED runs the full outline of the green field rather than sitting behind the whole piece."
    ],
    features:[
      "Raised bird motif — cut and applied, not printed",
      "Two-panel composition, green field over cream",
      "Walnut shelf with a glass vase at the meeting point",
      "LED traces the outline of the green field",
      "Built for tall, narrow walls and stairwells"
    ],
    specs:{
      "Overall size":"55\" H × 27.6\" W × 2.0\" D (140 × 70 × 5cm)",
      "Weight":"9.8 kg",
      "Surface":"Sandstone in moss green and cream, applied bird motif",
      "Shelf":"Walnut finish, 5.1\" deep",
      "Wall needed":"Minimum 34\" (86cm) clear width and 65\" of height",
      "Lead time":"7–10 days, made to order"
    },
    images:["swift-1.jpg"],
    note:"One photograph so far. The bird motif is applied by hand, so the spacing of the flight varies slightly between pieces."
  },
  /* ---------------------------------------------------------- */
  {
    id:"watercolour-arch",
    name:"Watercolour Arch",
    tag:"Planter panels",
    cat:"Planter panels",
    lead:"A cream sandstone panel with a tall lit arch cut into it and a rust-toned half-round shelf at the base holding a glass tube. The softest piece in the collection.",
    price:11900, was:14500,
    sizes:["31.5\" × 15.7\"","39.4\" × 19.7\""],
    finishes:["Cream / Rust","Cream / Walnut","Sand / Clay"],
    about:[
      "The arch here runs almost the full height of the panel, which makes the piece read as taller and narrower than it measures. The light sits inside the recess and spills upward, so the top of the arch is brighter than the base — the opposite of most lit panels, and the reason this one feels like a window rather than a lamp.",
      "The half-round shelf is a single piece of rust-finished board with the glass tube dropped through it. It holds a surprising amount of foliage for its size; a few stems of anything leafy will fill the arch completely."
    ],
    features:[
      "Full-height lit arch, recessed into the panel",
      "Half-round shelf in a rust finish",
      "Glass tube vase drops through the shelf",
      "Light spills upward — brighter at the crown",
      "Cream sandstone with a fine, closed grain"
    ],
    specs:{
      "Overall size":"31.5\" H × 15.7\" W × 1.6\" D (80 × 40 × 4cm)",
      "Weight":"3.8 kg",
      "Shelf":"Half-round, rust finish, 5.5\" at its deepest",
      "Vase capacity":"200ml",
      "Light control":"Inline rocker switch on the cord"
    },
    images:["watercolour-1.jpg"],
    note:"One photograph so far — more angles are being shot. Foliage shown is not included."
  },
  /* ---------------------------------------------------------- */
  {
    id:"green-column",
    name:"Green Column",
    tag:"Lit panels",
    cat:"Lit panels",
    lead:"A cream field with a moss-green column down one side and a warm seam of light between them. The shelf runs across both, so the vase sits on the join.",
    price:13900, was:16900,
    sizes:["35.4\" × 21.7\"","43\" × 26\""],
    finishes:["Cream / Moss green","Cream / Clay","Cream / Charcoal"],
    about:[
      "Two fields, one colour break, one line of light down the seam. It is the most graphic thing in the collection and the one that suits a modern room best — there is no arch, no curve, nothing decorative except the colour split itself.",
      "The green is a muted moss rather than a bright leaf green, which matters: it sits well against cream and clay walls without fighting them. If your room is already warm, the clay version does the same job in a lower key."
    ],
    features:[
      "Two-tone panel with a lit vertical seam",
      "Full-width shelf crossing both fields",
      "Glass tube vase set on the colour join",
      "Muted moss green — not a bright leaf tone",
      "No curves; built for modern, graphic rooms"
    ],
    specs:{
      "Overall size":"35.4\" H × 21.7\" W × 1.8\" D (90 × 55 × 4.5cm)",
      "Weight":"5.2 kg",
      "Surface":"Sandstone in cream and moss green",
      "Shelf":"Full width, colour-matched to the column, 4.7\" deep",
      "Light":"Warm 3000K seam between the two fields",
      "Vase capacity":"200ml"
    },
    images:["column-1.jpg"],
    note:"One photograph so far — more angles are being shot."
  }

];

/* Merge the shared spec sheet into each product, letting the product win. */
PRODUCTS.forEach(p => { p.specs = Object.assign({}, BASE_SPECS, p.specs || {}); });
