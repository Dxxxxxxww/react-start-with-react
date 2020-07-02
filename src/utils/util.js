export const getDomData = (el, name) => el.getAttribute(`data-${name}`)

export const setDomData = (el, name, val) =>
  val ? (el.setAttribute(`data-${name}`, val), true) : false
