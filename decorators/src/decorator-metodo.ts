export {};

function log(target: any, key: any) {
  console.log(`DECORATOR: Key: ${key}, Target: ${JSON.stringify(target)}`);
}

class Persona {
  private name: string;
  
  constructor(name: string) {
    this.name = name;
  }

  @log
  public sayMyName() {
    console.log(this.name);
  }
}

const persona = new Persona('Aaron');
persona.sayMyName();
