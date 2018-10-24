
const isAdmin = (req, res, next) => {
    
  if (req.simulationUserLogged.role !== 'admin') {
    return res.status(403).send({message: 'Only admins can access in this section.'})
  }

  next()
}

export default isAdmin