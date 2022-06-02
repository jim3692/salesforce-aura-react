import React, { useEffect } from 'react'

export default function AuraAttribute ({ name, type, defaultValue, cmp }) {
  useEffect(() => {
    cmp._setState({
      ...cmp._state,
      [name]: defaultValue
    })
  }, [])

  return <></>
}
