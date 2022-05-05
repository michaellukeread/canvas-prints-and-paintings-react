/* Filters */
const BIRDS = 'birds'
const CLIFFS = 'cliffs'
const BANANAS = 'bananas'

const BLACK = 'black'
const WHITE = 'white'
const OAK = 'oak'
const GOLD = 'gold'

const PORTRAIT = 'portrait'
const LANDSCAPE = 'landscape'

/* Grouped filters */
const CATEGORY = [BIRDS, CLIFFS, BANANAS]
const FRAME_COLOURS = [BLACK, WHITE, OAK, GOLD]
const ORIENTATION = [PORTRAIT, LANDSCAPE]

export const FILTERS = {
  category: CATEGORY,
  frameColours: FRAME_COLOURS,
  orientation: ORIENTATION
}
