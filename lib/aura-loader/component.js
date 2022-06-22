import { transform } from '@babel/standalone'

let id = 0

function replaceAuraNativeComponents (component) {
  component.jsx = component.jsx.replaceAll('aura:attribute', 'AuraAttribute')
  component.jsx = component.jsx.replaceAll('aura:component', 'AuraComponent')
  component.jsx = component.jsx.replaceAll('aura:if', 'AuraIf')
  component.jsx = component.jsx.replaceAll('aura:iteration', 'AuraIteration')
}

function replaceAuraNativePropNames (component) {
  const container = document.createElement('div')
  container.innerHTML = component.jsx

  const replacePropName = ({ oldName, newName }) =>
    [...container.querySelectorAll(`[${oldName}]`)]
      .forEach(el => {
        el.setAttribute(newName, el.getAttribute(oldName))
        el.removeAttribute(oldName)
      })

  replacePropName({ oldName: 'class', newName: 'className' })
  replacePropName({ oldName: 'aura:id', newName: 'auraId' })
  replacePropName({ oldName: 'var', newName: 'varName' })

  component.jsx = container.innerHTML
}

function wrapInFunction (component) {
  component.jsx = `(function ${component.name} () { return (${component.jsx}) })`
}

export default function componentLoader (component, file) {
  const name = file.name.split('.').at(0)
  component.name = name

  const uniqClass = `${name}_uniq_${id++}`
  component.uniqClass = uniqClass

  component.jsx = file.data

  replaceAuraNativePropNames(component)
  replaceAuraNativeComponents(component)
  wrapInFunction(component)

  component.jsx = transform(component.jsx)
}
