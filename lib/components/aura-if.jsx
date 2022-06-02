import React from 'react'

export default function AuraIf ({ isTrue, children, cmp }) {
  return <>{cmp.get(isTrue) && children}</>
}
