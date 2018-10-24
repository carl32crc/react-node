import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Input from './'

let change = ''

const onHandleChange = (value) => {
  change = value
}


const input = shallow(<Input onHandleChange={onHandleChange}  />)

/* eslint-disable */
describe('Input component', () => {
  
  it('it should render Input component', () => {
    const wrapper = renderer.create(<Input />);
    let tree = wrapper.toJSON()
    expect(typeof tree).toBe('object')
  })

  it('it should input change simulation', () => {
    input.find('input').simulate('change', {target: {value: 'TEST'}});
    expect(change).toBe('TEST')
  })

})