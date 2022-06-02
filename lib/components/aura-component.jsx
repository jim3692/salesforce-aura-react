import React, { useEffect, useState } from 'react'

import AuraRuntime from '../aura-runtime'

export default function AuraComponent ({ children, auraId, cmp }) {
  const [uniqueId] = useState('_' + Math.random().toString(36).substr(2, 9))
  const [state, setState] = useState({})

  const runtime = new AuraRuntime({ state, setState })

  useEffect(() => {
    if (cmp) {
      cmp._children[auraId] = runtime
    }
  }, [])

  return React.Children.map(children, (el, idx) => {
    return React.cloneElement(el, { cmp: runtime, key: uniqueId + idx })
  })
}
