import React from 'react'

import AuraAttribute from '../components/aura-attribute'
import AuraComponent from '../components/aura-component'
import AuraIf from '../components/aura-if'
import AuraIteration from '../components/aura-iteration'

import componentLoader from './component'
import scriptLoader from './script'
import stylesLoader from './styles'

function getExtension (file) {
  const fileNameParts = file.name.split('.')

  if (fileNameParts.length > 2) {
    throw new Error(`Bad file name '${file.name}'`)
  }

  return fileNameParts.at(-1)
}

function byExtension (ext) {
  return function (file) {
    return ext === getExtension(file)
  }
}

export default function auraLoader ({ bundles }) {
  for (const bundle of bundles) {
    try {
      const component = {}

      componentLoader(component, bundle.find(byExtension('cmp')))
      if (!component.name) {
        throw new Error(`Invalid bundle '${bundle.map(file => file.name)}'`)
      }

      for (const file of bundle) {
        const ext = getExtension(file)

        switch (ext) {
          case 'cmp':
            break
          case 'css':
            stylesLoader(component, bundle.find(byExtension('css')))
            break
          case 'js':
            scriptLoader(component, file.data)
            break
          default:
            throw new Error(`Unexpected extension on file '${file.name}'`)
        }
      }

      /* eslint-disable-next-line no-eval */
      component.mount = eval(component.jsx)
    } catch (err) {
      console.error(err)
    }
  }
}
