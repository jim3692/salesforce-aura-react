import React from 'react'

export default function AuraIteration ({ items, variable, children, cmp }) {
  return <>{items.split(',').map(item => children)}</>
}
