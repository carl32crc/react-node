import axios from 'axios'
import { apiUrl } from '../constants'
import { handlerError } from '../../shared/utils/handlerError'

const getGnomes = () => {
  return axios.get(apiUrl).then(response => {
    return handlerError(response)
  })
}

export { getGnomes }