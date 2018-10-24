import React from 'react'
import renderer from 'react-test-renderer'
import Spinner from './'

/* eslint-disable */
describe('Spinner component', () => {
  
  it('it should render Spinner component', () => {
    const wrapper = renderer.create(<Spinner visible/>);
    let tree = wrapper.toJSON()
    expect(typeof tree).toBe('object')
  })

  it('it should not render Spinner component', () => {
    const wrapper = renderer.create(<Spinner />);
    let tree = wrapper.toJSON()
    expect(tree).toBe(null)  
  })
})