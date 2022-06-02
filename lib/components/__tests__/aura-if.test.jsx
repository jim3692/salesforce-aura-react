/* eslint-env jest */

import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import AuraIf from '../aura-if'

test('renders children if true', async () => {
  const data = { '{!a}': true }
  const cmp = { get (name) { return data[name] } }

  render(
    <AuraIf isTrue='{!a}' cmp={cmp}>
      <span>rendered</span>
    </AuraIf>
  )

  expect(screen.queryByText('rendered')).toBeDefined()
})

test('does not render children if false', async () => {
  const data = { '{!a}': false }
  const cmp = { get (name) { return data[name] } }

  render(
    <AuraIf isTrue='{!a}' cmp={cmp}>
      <span>rendered</span>
    </AuraIf>
  )

  expect(screen.queryByText('rendered')).toBeNull()
})
