import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Square from './'

let open = false

const openModal = () => {
  open = true
}

const square = shallow(<Square openModal={openModal} />)

/* eslint-disable */
describe('Square component', () => {
  
  it('it should render Square component', () => {
    const wrapper = renderer.create(<Square />);
    let tree = wrapper.toJSON()
    expect(typeof tree).toBe('object')
  })

  it('it should open modal simulation', () => {
    square.find('li').simulate('click')
    expect(open).toBe(true)
  })
  
})