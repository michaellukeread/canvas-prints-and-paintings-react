import { classNames } from '.'

const classes = ['harry', undefined, null, false, 'potter']

const expected = 'harry potter'

describe('utils/classNames', () => {
  it('returned the expected result', () => {
    expect(classNames(...classes)).toEqual(expected)
  })
})
