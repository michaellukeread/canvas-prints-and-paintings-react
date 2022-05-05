export const LIMIT = 100
export const MIN_AMOUNT = 10.0
export const MAX_AMOUNT = 5000.0
export const AMOUNT_STEP = 5.0
export const CURRENCY = 'aud'
export const SHIPPING_COST = 10
export const DISCLOSURE_ITEMS = [
  { title: 'Features', body: 'Magna cillum pariatur do Lorem mollit cillum incididunt.' },
  {
    title: 'Care',
    body: 'Labore culpa commodo do ex exercitation excepteur excepteur eiusmod non consectetur elit proident enim. Anim reprehenderit sint sunt pariatur et nisi minim in non enim. Enim sunt id est voluptate deserunt est culpa elit in qui enim non. Laboris esse pariatur magna aliqua aliquip et consectetur occaecat deserunt adipisicing eiusmod proident sunt sunt. Consectetur cupidatat sunt et id laborum do nostrud commodo est consectetur do ad. Nulla incididunt culpa ex enim occaecat cupidatat eu duis duis aute. Sint culpa qui amet officia tempor tempor.'
  },
  { title: 'Shipping', body: 'Magna cillum pariatur do Lorem mollit cillum incididunt.' },
  { title: 'Returns', body: 'Magna cillum pariatur do Lorem mollit cillum incididunt.' }
]

export const POST = 'POST'
export const GET = 'GET'
export const HEAD = 'HEAD'
export const DOMESTIC_SHIPPING_ID = 'shr_1KqZAYAsKMmbQm49fbk5AeJN'
export const SUBMIT_TYPE = 'pay'
export const PAYMENT_METHOD = 'card'
export const ALLOWED_METHODS = [POST, HEAD]

export const DELIVERY_OPTIONS = [
  {
    value: 'delivery',
    label: 'Delivery'
  },
  {
    value: 'pickup',
    label: 'Pickup'
  }
]

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
