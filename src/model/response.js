export class Response {
  code
  data
  msg

  static instance(data){
    return new Response(data)
  }

  constructor(data) {
    for(let key in data){
      this[key] = data[key]
    }
  }

  isOK() {
    return this.code === 10000;
  }
}