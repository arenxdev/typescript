# TYPESCRIPT

## FUNDAMENTOS DE TYPESCRIPT

### QUÉ ES TYPESCRIPT

TypeScript es un lenguaje fuertemente tipado creado por Microsoft, aunque está muy relacionado con el framework Angular, TypeScript es un lenguaje independiente que puedes usar para proyectos de back-end con Express o Front-end ya sea con Vue, React o Angular. Para que TypeScript pueda correr en el navegador debe ser transpilado a JavaScript con herramientas como Babel.

### TYPES, TYPE INTERFACE Y TYPE KEYWORD

A diferencia de JavaScript, TypeScript es un lenguaje fuertemente tipado. Mientras que en JavaScript declaramos una constante de la siguiente manera:

```javascript
  const a = 'hola'
```

En TypeScript utilizando el carácter ‘:’ le asignamos un tipo de dato a la variable :

```javascript
  const a: string = 'hola'
```

En caso de que no le asignemos un tipo de dato a la variable, TypeScript automáticamente le va a asignar un tipo de dato, esto es el Type Inference.

Si le asignamos el tipo de dato any a una variable, esta variable va a poder almacenar cualquier tipo de dato, similar a JavaScript Vainilla.

Dentro de TypeScript contamos con la palabra reservada type que nos va a ser de utilidad cuando hagamos nuestros propios tipos de datos.

```javascript
  class Transporte {
    private velocidad: number
    private formaDeMovilidad: string

    constructor(velocidad: number, formaDeMovilidad: string) {
      this.velocidad = velocidad
      this.formaDeMovilidad = formaDeMovilidad
    }

    getVelocidad() {
      return this.velocidad
    }

    setVelocidad(velocidad: number) {
      this.velocidad = velocidad
    }

    getFormaDeMovilidad() {
      return this.formaDeMovilidad
    }

    setFormaDeMovilidad(formaDeMovilidad: string) {
      this.formaDeMovilidad = formaDeMovilidad
    }

  }

  const transporte: Transporte = new Transporte(20, 'suelo')

  class Auto extends Transporte {
    private cantidadDePuertas: number

    constructor(velocidad: number, formaDeMovilidad: string, cantidadDePuertas: number) {
      super(velocidad, formaDeMovilidad)
      this.cantidadDePuertas = cantidadDePuertas
    }

    getVelocidad() {
      return super.getVelocidad() + 10
    }

    getCantidadDePuertas() {
      return this.cantidadDePuertas
    }

    setCantidadDePuertas(cantidadDePuertas: number) {
      this.cantidadDePuertas = cantidadDePuertas
    }

  }

  const auto: Transporte = new Auto(20, 'suelo', 4)

```

### INTERFACES

Una interfaz es un tipo abstracto que sirve como contrato para la estructura de un objeto y al igual que las clases puede ser utilizada como un tipo de dato. Para declarar una interfaz en TypeScript utilizamos la palabra clave interface.

Dentro de las interfaces en TypeScript podemos manejar propiedades opcionales añadiendo el signo de pregunta ‘?’ al final del nombre de la propiedad.

```javascript
  type Dni = number

  interface Persona {
    altura?: number
    edad: number
    nombre: string
    apellido: string
    dni: Dni
  }

  const persona: Persona = {
    altura: 1.69,
    edad: 27,
    nombre: 'Aaron',
    apellido: 'Isaacs',
    dni: 20000,
  }
```

### SHAPES

Cada uno de los tipos tiene una forma o estructura en que es representado, esto es mediante sus propiedades. Dentro de TypeScript si dos variables poseen propiedades idénticas aunque sean de distintas interfaces o clases, estas pueden ser asignadas entre sí.

```javascript
  class Person {
    private edad: number
    private altura: number
    private dni: string

    constructor(edad: number, altura: number, dni: string) {
      this.edad = edad
      this.altura = altura
      this.dni = dni
    }

  }

  class Alumno extends Person {
    private matricula: string

    constructor(edad: number, altura: number, dni: string, matricula: string) {
      super(edad, altura, dni)
      this.matricula = matricula
    }

  }

  let person: Person = new Person(27, 1.69, '36601731')
  let alumno: Alumno = new Alumno(27, 1.69, '36601731', '123')
  let shape: Person = new Alumno(27, 1.69, '36601731', '123')
```

### UNION TYPES

Habrá ocasiones en las que necesitemos asignar variables con más de un tipo, para evitar el uso de any debemos usar union types. Utilizando el signo ‘|’ podemos indicarle a TypeScript que utilice uno u otro tipo de dato, por ejemplo:

```javascript
  type SumaParameter  = string | number
  type sumeReturnType = number | string

  function suma(num1: SumaParameter, num2: SumaParameter): sumeReturnType {
    return String(num1) + num2
  }

  interface InterfaceOne {
    prop1: number
  }

  interface InterfaceTwo {
    prop2: number
  }

  type InterfaceMix = InterfaceOne | InterfaceTwo

  const interfaceMix: InterfaceMix = {
    prop1: 2,
    prop2: 1
  }
```

### INTERSECTION TYPES

Mientras que el union type nos es útil para variables con más de un tipo de dato, intersection types nos permite combinar varios tipos de dato utilizando el signo ‘&’.

```javascript
  interface Interface1 {
    prop1: number
  }

  interface Interface2 {
    porp2: number,
    prop3: number
  }

  type InterfaceMix = Interface1 & Interface2

  const interfaceMix: InterfaceMix = {
    prop1: 2,
    porp2: 1,
    prop3: 5
  }
```

### FUNCTION TYPE

Un function type representa la estructura que tendrá la función a la cual se aplica el tipo y únicamente funciona para tipos de funciones.

```javascript
  type CallBackError = Error | null
  type CallBack = (error: CallBackError, response: Object) => void
  type SendRequest = (cb: CallBack) => void

  const sentRequest: SendRequest = (cb: CallBack): void => {
    if (cb) {
      cb(null, {message: 'Everything is okey'})
    }
  }
```

### DECORATORS: APLICACIÓN EN MÉTODOS

Los decorators son muy utilizados en Angular, estos son una declaración que tiene TypeScript para poder extender la funcionalidad de distintos elementos ya sea una clase, un parámetro, una propiedad o una función.

En una función decorator, el parámetro target hace referencia al objeto que posee el decorador y el parámetro propertyKey, o key, hace referencia al elemento que extendemos.

```typescript
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
```

### DECORATORS: APLICACIÓN EN CLASES

```typescript
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
  console.log(per.sayMyName()) // Aaron Isaacs
```

