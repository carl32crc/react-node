import { handlerError }from './handlerError'

/* eslint-disable */
describe('Handler error component', () => {
  
  it('it should success response 200', () => {
    const response = {
      status: 200,
      data: 'Your data' 
    }
    expect(handlerError(response)).toEqual('Your data')
  })

  it('it should not found data 404', () => {
    const response = {
      status: 404
    }
    expect(handlerError(response)).toEqual('Data not found')
  })

  it('it should server error 500', () => {
    const response = {
      status: 500
    }
    expect(handlerError(response)).toEqual('Network error')
  })
})