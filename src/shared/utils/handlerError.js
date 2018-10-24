
const handlerError = (response) => {
    
  switch(response.status) {
  case 200:
    return response.data
  case 404:
    return 'Data not found'
  case 500:
    return 'Network error'
  }
}
  
export { handlerError }