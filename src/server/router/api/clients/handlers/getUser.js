// services
import getData from './../../../../services/getData'

// resources
import { mocky } from './../../../constants'

const { clientsUrl } = mocky.API

const getUser = (req, res) => {

  const param = req.params.name || req.params.id
  let clients = []

  getData('GET', clientsUrl, true)
    .then( data => {

      clients.push(data.clients.find(d => req.params.name ? 
        d.name.toLowerCase() === param.toLowerCase() : d.id === param))
    
      if (clients[0]) {
        res.status(200).send({
          message: 'Success',  
          data: clients,
          simulationUserLogged: req.simulationUserLogged
        })
      } else {
        res.status(404).send({ 
          message: 'This client doesn\'t exist.'
        })
      }
     
    })
    .catch( () => {  
      res.status(500).send({
        message: 'Fail request to server'
      })
    })
 
}

export default getUser