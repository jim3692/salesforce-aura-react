export default function scriptLoader (component, file) {
  const name = file.name.split('.').at(0).toLowerCase()

  if (/controller$/.test(name)) {
    /* eslint-disable-next-line no-eval */
    component.controller = eval(file.data)
  }

  if (/helper$/.test(name)) {
    /* eslint-disable-next-line no-eval */
    component.helper = eval(file.data)
  }
}
