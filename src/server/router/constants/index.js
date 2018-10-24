
const mocky = {
  API: {
    urlBase: 'http://www.mocky.io/v2/',
    get policiesUrl() { return `${this.urlBase}580891a4100000e8242b75c5`},
    get clientsUrl() { return `${this.urlBase}5808862710000087232b75ac` },
  }
}

export { mocky }