function log(target, key) {
  console.log(key + ' was call')
}

class PersonaDec {
  private name: string

  constructor(name: string) {
    this.name = name
  }

  @log
  sayMyName() {
    console.log(this.name)
  }
}

const persona = new PersonaDec('Aaron')
persona.sayMyName() // 'Aaron' // ''sayMyName was call
