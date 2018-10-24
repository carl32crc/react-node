import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Modal from './'

let open = true

const closeModal = () => {
  open = false
}

const modal = shallow(<Modal open closeModal={closeModal} />)


/* eslint-disable */
describe('Modal component', () => {
  
  it('it should render Modal component', () => {
    const wrapper = renderer.create(<Modal open />);
    let tree = wrapper.toJSON()
    expect(typeof tree).toBe('object')
  })

  it('it should render Modal component', () => {
    const wrapper = renderer.create(<Modal />);
    let tree = wrapper.toJSON()
    expect(tree).toBe(null)
  })

  it('it should close modal simulation', () => {
    modal.find('span').simulate('click')
    expect(open).toBe(false)
  })

})