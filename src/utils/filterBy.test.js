import { filterBy } from '.'

const items = [
  { title: 'Deez', cost: 50, containsNuts: true },
  { title: 'Gottem', cost: 10, containsNuts: false }
]

describe.each`
  key                 | func                             | expected
  ${'containsNuts'}   | ${(item, key) => item[key]}      | ${[items[0]]}
  ${'cost'}           | ${(item, key) => item[key] < 40} | ${[items[1]]}
  ${'keyDoesntExist'} | ${(item, key) => item[key]}      | ${[]}
`('utils/filterBy', ({ key, func, expected }) => {
  it('returned the expected result', () => {
    expect(filterBy(items, key, func)).toEqual(expected)
  })
})
