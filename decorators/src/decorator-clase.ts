export {};

function init(target:any) {
  return class extends target {
    nombre = 'Aaron';
    apellido = 'Isaacs';

    sayMyName() {
      return `${this.nombre} ${this.apellido}`;
    }
  }
}

@init
class P {
  constructor() {}

  sayMyName() {}
}

const p = new P();

console.log(p.sayMyName());
