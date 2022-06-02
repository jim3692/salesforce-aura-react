import React from 'react'

export default function ({ name, cmp }) {
  return <span>{cmp._state[name]}</span>
}
