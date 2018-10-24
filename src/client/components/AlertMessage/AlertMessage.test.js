import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import AlertMessage from './'

let open = true

const closeAlert = () => {
  open = false
}

const alertMessage = shallow(<AlertMessage visible closeAlert={closeAlert} />)

/* eslint-disable */
describe('AlertMessage component', () => {
  
  it('it should render AlertMessage component', () => {
    const wrapper = renderer.create(<AlertMessage visible/>);
    let tree = wrapper.toJSON()
    expect(typeof tree).toBe('object')
  })

  it('it should not render AlertMessage component', () => {
    const wrapper = renderer.create(<AlertMessage />);
    let tree = wrapper.toJSON()
    expect(tree).toBe(null)  
  })

  it('it should close alertMessage simulation', () => {
    alertMessage.find('span').simulate('click')
    expect(open).toBe(false)
  })

})