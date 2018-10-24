import simulationUserLogged from '../resources/simulationUserLogged.json'

const ensureAuth = (req, res, next) => {
    
  if (!req.headers.authorization) {

    return res.status(403).send({
      message: 'The request does not have the authentication header'
    })
    
  } else {

    /* Simulation user athenticated with Role 'admin', 
    can change role 'admin' to 'user' */

    req.simulationUserLogged = simulationUserLogged

    next()
  }

}

export default ensureAuth