/* eslint-env jest */

import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import AuraIteration from '../aura-iteration'

test('renders 5 elements', async () => {
  render(
    <AuraIteration items='1,2,3,4,5'>
      <span>element</span>
    </AuraIteration>
  )

  expect(screen.queryAllByText('element')).toHaveLength(5)
})
