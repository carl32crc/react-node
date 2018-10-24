const XMLHttpRequest = require('w3c-xmlhttprequest').XMLHttpRequest


const getData = (method, url) => {
    
  return new Promise(resolve => {

    let xhr = new XMLHttpRequest()

    xhr.open(method, url, true)
    xhr.responseType = 'json'
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        const data = xhr.response
        resolve(data)
      }
    }, false)

    xhr.send()
  })
}

export default getData