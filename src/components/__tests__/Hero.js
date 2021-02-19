import React from 'react'
import renderer from 'react-test-renderer'
import Hero from '../Hero'

describe('The Hero component', () => {
  it('renders as expected', () => {
    const tree = renderer.create(<Hero/>).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
