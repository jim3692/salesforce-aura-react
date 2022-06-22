export default function stylesLoader (component, file) {
  const styles = file.data.replaceAll('.THIS', '.' + component.uniqClass)
  const stylesEl = document.createElement('style')
  stylesEl.innerHTML = styles
  component.styles = stylesEl
}
