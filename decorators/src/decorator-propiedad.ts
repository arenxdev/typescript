export {};

function logProperty(target: any, key: any) {
  let _val = target[key];
  const getter = () => {
    console.log(`Get: ${key} => ${_val}`);
    return _val;
  };

  const setter = (newValue: any) => {
    console.log(`Set: ${key} => ${newValue}`);
    _val = newValue;
  };

  const objectProperty = {
    get: getter,
    set: setter
  };
  Object.defineProperty(target, key, objectProperty);
}

class Persona {

  @logProperty
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const persona = new Persona('Aaron'); // Set: name => Aaron
persona.name = 'platzi'; // Set: name => platzi
const name = persona.name; // Get: name => platzi