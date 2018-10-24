
const domain =  {
  port: 3004,
  get url() { return `http://localhost:${this.port}/` },
  get apiUrl() { return `${this.url}api/` }
}

export { domain }