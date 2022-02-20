const scrollTo = (id) => () =>
  document.querySelector(`#${id}`).scrollIntoView({ behavior: 'smooth' })

export default scrollTo
