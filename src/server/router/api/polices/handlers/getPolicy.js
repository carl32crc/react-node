// services
import getData from './../../../../services/getData'

// resources
import { mocky } from './../../../constants'

const { policiesUrl, clientsUrl } = mocky.API


const getPolicy = (req, res) => {

  const param = req.params.id
  let client = []
  let policy = []

  getData('GET', policiesUrl, true)
    .then( data => {

      policy.push(data.policies.find( d => d.id === param ))

    }).then( () => {

      getData('GET', clientsUrl, true)
        .then( data => {

          client.push(data.clients.find(d => policy[0].clientId === d.id))
          
          const policyClient = {
            client: client[0],
            porlicy: policy[0]
          }

          if (client) {
            res.status(200).send({
              message: 'Success',  
              data: policyClient,
              simulationUserLogged: req.simulationUserLogged
            })
          } else {
            res.status(404).send({ 
              message: 'Not have assigned a client.' 
            })
          }

        })
        .catch( error => {  
          res.status(error.status).send({
            message: 'Fail request to server clients'
          })
        })

    })
    .catch( () => {  
      res.status(500).send({
        message: 'Fail request to server policies' 
      })
    })
}

export default getPolicy
