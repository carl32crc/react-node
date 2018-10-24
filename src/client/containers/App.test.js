import React from 'react'
import App from './App'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

const app = shallow(<App />)
/* eslint-disable */
describe('App component', () => {
  
  it('it should start correct state', () => {
    const openModal = app.state().open
    const spinner = app.state().spinner
    const alertState = app.state().alert
    let alert = {
      show: false,
      message: '',
      color: ''
    }
    expect(openModal).toEqual(false)
    expect(spinner).toEqual(true)
    expect(alertState).toEqual(alert)
  })

  it('it should render App component', () => {
    const wrapper = renderer.create(<App />);
    let tree = wrapper.toJSON()
    expect(typeof tree).toBe('object')
  })

  it('it should close instance modal App component', () => {
    app.instance().closeModal()
    expect(app.state().open).toBe(false)
  })

  it('it should close alert message App component', () => {
    app.instance().closeAlert()
    expect(app.state().alert.show).toBe(false)
  })
})
