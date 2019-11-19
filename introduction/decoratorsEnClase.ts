function init(target) {
  return class extends target {
    nombre = 'Aaron'
    apellido = 'Isaacs'

    sayMyName() {
      return `${this.nombre} ${this.apellido}`
    }
  }
}

@init
class P {
  constructor() {}
  sayMyName() {}
}

const per: P = new P()
console.log(per.sayMyName())
