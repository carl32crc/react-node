import axios from 'axios'
import { mocky } from '../router/constants'

const { clientsUrl, policiesUrl } = mocky.API

const headers = {
  Authorization: true,
}

/* eslint-disable */
describe('API mocky check methods', () => { 
  
  test('it should return user data filtered by user id', async () => {
    let clients = []
    let req = false
    const response = await axios.get(clientsUrl, { headers })
    clients.push(response.data.clients.find(d => req ? 
      d.name.toLowerCase() === param.toLowerCase() : d.id === 'a0ece5db-cd14-4f21-812f-966633e7be86'))
    expect(clients[0]).toHaveProperty('id', 'a0ece5db-cd14-4f21-812f-966633e7be86')
    expect(clients[0]).toHaveProperty('name', 'Britney')
  })

  test('it should return user data filtered by name', async () => {
    let clients = []
    let req = true
    let param = 'Maynard'
    const response = await axios.get(clientsUrl, { headers })
    clients.push(response.data.clients.find(d => req ? 
      d.name.toLowerCase() === param.toLowerCase() : d.id === ''))
    expect(clients[0]).toHaveProperty('id', 'bf6574b4-5f19-4efa-93c0-170a796963f3')
    expect(clients[0]).toHaveProperty('name', 'Maynard')
  })

  test('it should return the list of policies linked to a user name', async () => {
    let clients = []
    let policies = []
    let name = 'Britney'
    const responseClients = await axios.get(clientsUrl, { headers })
    clients.push(responseClients.data.clients.find( d => d.name.toLowerCase() === name.toLowerCase()))
    const responsePolicies = await axios.get(policiesUrl, { headers })
    policies.push(responsePolicies.data.policies.filter(d => clients[0].id === d.clientId))
    expect(Array.isArray(policies[0])).toBe(true)
  })

  test('it should return the list of policies linked to a user name', async () => {
    let clients = []
    let policies = []
    let param = '7b624ed3-00d5-4c1b-9ab8-c265067ef58b'
    const responsePolicies = await axios.get(policiesUrl, { headers })
    policies.push(responsePolicies.data.policies.find( d => d.id === param ))
    const responseClients = await axios.get(clientsUrl, { headers })
    clients.push(responseClients.data.clients.find(d => policies[0].clientId === d.id))
    
    expect(policies[0]).toHaveProperty('amountInsured')
    expect(clients[0]).toHaveProperty('email')
  })

})