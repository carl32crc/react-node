// services
import getData from '../../../../services/getData'

// resources
import { mocky } from './../../../constants'

const { clientsUrl, policiesUrl } = mocky.API

const getPolicies = (req, res) => {

  const { name } = req.params
  let clients = []
  let policies = []

  getData('GET', clientsUrl, true)
    .then( data => {

      clients.push(data.clients.find( d => d.name.toLowerCase() === name.toLowerCase()))

    })
    .catch( error => {  
      res.status(error.status).send({
        message: 'Fail request to server clients'
      })
    })

  getData('GET', policiesUrl, true)
    .then( data => {

      policies.push(data.policies.filter(d => clients[0].id === d.clientId))

      if (policies[0].length > 0) {

        res.status(200).send({
          message: 'Success', 
          data: policies[0],
          simulationUserLogged: req.simulationUserLogged
        })

      } else {
        res.status(404).send({ 
          message: 'This client not have policies.'
        })
      }

    })
    .catch( () => {  
      res.status(500).send({
        message: 'Fail request to server'
      })
    })
}

export default getPolicies