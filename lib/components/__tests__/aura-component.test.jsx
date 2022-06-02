/* eslint-env jest */

import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import AuraComponent from '../aura-component'
import AuraAttribute from '../aura-attribute'
import AuraAttributeConsumer from '../aura-attribute-consumer'

test('read attribute', async () => {
  render(
    <AuraComponent>
      <AuraAttribute name='test-attribute' defaultValue='some-value' />
      <AuraAttributeConsumer name='test-attribute' />
    </AuraComponent>
  )

  expect(screen.queryByText('some-value')).toBeDefined()
})
