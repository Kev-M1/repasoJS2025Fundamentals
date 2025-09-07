class Singleton {
  static instance = null;


  constructor(url, endpoint, data) {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    this.url = url;
    this.endpoint = endpoint;
    this.data = data;
    Singleton.instance = this;
  }
}

const example = new Singleton('www.example.com', '/123da', 'asdasdasd');
const example2 = new Singleton('2', 'a', 'a');


console.log(example);
console.log(example2);