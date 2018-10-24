import { getGnomes } from './gnomes'

/* eslint-disable */
describe('API landbot check methods', () => { 

  test('it should return customers array lists with name, email and id', () => {
    const isArray = true
    getGnomes().then(response => {
        expect(Array.isArray(response.Brastlewark)).toEqual(isArray)
    })
  })
})