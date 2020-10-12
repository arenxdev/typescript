# TYPESCRIPT

## FUNDAMENTOS DE TYPESCRIPT

### QUÉ ES TYPESCRIPT

TypeScript es un lenguaje fuertemente tipado creado por Microsoft, aunque está muy relacionado con el framework Angular, TypeScript es un lenguaje independiente que puedes usar para proyectos de back-end con Express o Front-end ya sea con Vue, React o Angular. Para que TypeScript pueda correr en el navegador debe ser transpilado a JavaScript con herramientas como Babel.

### TYPES, TYPE INTERFACE Y TYPE KEYWORD

A diferencia de JavaScript, TypeScript es un lenguaje fuertemente tipado. Mientras que en JavaScript declaramos una constante de la siguiente manera:

``` javascript
  const a = 'hola'
```

En TypeScript utilizando el carácter ‘:’ le asignamos un tipo de dato a la variable :

``` javascript
  const a: string = 'hola'
```

En caso de que no le asignemos un tipo de dato a la variable, TypeScript automáticamente le va a asignar un tipo de dato, esto es el Type Inference.

Si le asignamos el tipo de dato any a una variable, esta variable va a poder almacenar cualquier tipo de dato, similar a JavaScript Vainilla.

Dentro de TypeScript contamos con la palabra reservada type que nos va a ser de utilidad cuando hagamos nuestros propios tipos de datos.

``` javascript
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

Una interfaz es un tipo abstracto que sirve como **contrato** para la estructura de un objeto y al igual que las clases puede ser utilizada como un tipo de dato. Para declarar una interfaz en TypeScript utilizamos la palabra clave interface.

Dentro de las interfaces en TypeScript podemos manejar propiedades opcionales añadiendo el signo de pregunta ‘?’ al final del nombre de la propiedad.

``` javascript
  type Dni = number

  interface Persona {
      altura ? : number
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

``` javascript
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

``` javascript
  type SumaParameter = string | number
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

``` javascript
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

``` javascript
  type CallBackError = Error | null
  type CallBack = (error: CallBackError, response: Object) => void
  type SendRequest = (cb: CallBack) => void

  const sentRequest: SendRequest = (cb: CallBack): void => {
      if (cb) {
          cb(null, {
              message: 'Everything is okey'
          })
      }
  }
```

### DECORATORS: APLICACIÓN EN MÉTODOS

Los decorators son muy utilizados en Angular, estos son una declaración que tiene TypeScript para poder extender la funcionalidad de distintos elementos ya sea una clase, un parámetro, una propiedad o una función.

En una función decorator, el parámetro target hace referencia al objeto que posee el decorador y el parámetro propertyKey, o key, hace referencia al elemento que extendemos.

``` typescript
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

``` typescript
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

### DECORATORS: APLICACIÓN DE PROPIEDADES

Los decorators son muy utilizados en Angular, estos son una declaración que tiene TypeScript para poder extender la funcionalidad de distintos elementos ya sea una clase, un parámetro, una propiedad o una función.

En una función decorator, el parámetro **target** hace referencia al objeto que posee el decorador y el parámetro **propertyKey**, o **key**, hace referencia al elemento que extendemos.

``` typescript
function logProperty(target, key) {
  let _val = this[key]

  const getter = () => {
    console.log( `Get: ${key} => ${_val}` )
    return _val
  }
  const setter = (newValue) => {
    console.log( `Set: ${key} => ${newValue}` )
    _val = newValue
  }

  const objectProperty = {
    get: getter,
    set: setter
  }

  Object.defineProperty(target, key, objectProperty)
}

class Persona {
  @logProperty
  public name: string

  constructor(name: string) {
    this.name = name
  }

}

const p: Persona = new Persona('Aaron')

p.name = 'Platzi'
const nameFromClass = p.name
```

### DECORATORS: APLICACIÓN EN PARÁMETROS

``` typescript
function logParameter(target, propertyName, index) {
  const metaDataKey = `log_${propertyName}_parameters`
  if (Array.isArray(target[metaDataKey])) {
    target[metaDataKey].push(index)
  } else {
    target[metaDataKey] = [index]
  }
  console.log(target[metaDataKey])
}

class Person {
  greet(message: string, @logParameter additionalString: string): string {
    return message
  }
}

const person = new Person()
person.greet('Hola', 'Aaron')
```

## PREPARANDO EL ENTORNO PARA NUESTRO PROYECTO

### ¿QUÉ ES ANGULAR? FRAMEWORK

Desarrollado por Google, Angular es más que un framework, es una plataforma que nos da la posibilidad de desarrollar aplicaciones web como aplicaciones mobile. Además, es un framework de estructura que nos va a brindar funcionalidades para extender el template de nuestra aplicación.

Algunas ventajas que trae Angular son:

* Rapidez.
* Mayor estructura y control del proyecto.
* SPA.
* Gran comunidad que ayuda con cualquier problema.

### ANGULAR CLI Y VISUAL STUDIO CODE

Angular CLI es la interfaz de línea de comandos de Angular con la cual desde una terminal puedes crear aplicaciones, generar componentes, montar un servidor local para tu aplicación y testear tu proyecto.

Para este curso y para trabajar con TypeScript o Angular, es muy recomendado utilizar el editor de código Visual Studio Code.

#### Configuración VS CODE - PRETTIER

“prettier.singleQuote”: true, 
“prettier.printWidth”: 140, 

### CREANDO NUESTRO PROYECTO EM ANGULAR CLI

Para preparar nuestro entorno de trabajo lo primero que debemos hacer es instalar Node.js. Una vez tenemos instalado Node en nuestro computador, debemos instalar el CLI de Angular mediante el comando:

> npm install -g @angular/cli

Ya que tenemos listo el CLI, creamos nuestro proyecto con el siguiente comando y contestando las preguntas de configuración que nos haga:

> ng new typescript-platzi

### ¿QUÉ ES FIREBASE? IMPLEMENTANDO FIREBASE EN NUESTRO PROYECTO

Firebase es un SAAS de Google que nos ayuda en la creación de aplicaciones web y móvil. Firebase nos brinda una opción sencilla y rápida para nuestra base de datos y backend.

Dentro de Firebase podemos tener bases de datos en tiempo real o realtime databases. Podemos usar Firebase independientemente del lenguaje o framework en el que estemos trabajando.

Para añadir Firebase a nuestro proyecto debemos instalar algunas dependencias con el comando:

> npm install firebase @angular/fire --save

### DIFERENCIAS ENTRE ANGULAR, REACT, VUE

Cuando vamos iniciando en el mundo del front-end o simplemente estamos creando un nuevo proyecto nos encontraremos con una importante pregunta:
¿Qué framework debo utilizar?

Lo primero que te llega a la mente va a ser los tres frameworks más populares:

#### Angular

Si tienes un proyecto complejo y robusto Angular es tu mejor opción ya que al estar pensado en trabajar con TypeScript ofrece una gran robustez, estructura y control.

Angular CLI es el CLI más completo para trabajar.

Desventajas:

* Al ser un framework tan robusto su curva de aprendizaje es muy elevada y compleja.
* Tendremos código repetitivo que genera archivos muy grandes.

#### React

Ventajas:

* Creado por Facebook, ofrece una gran flexibilidad para trabajar basado en componentes.
* Cuenta con una gran comunidad, por lo tanto muchos problemas con los que te encuentres ya habrán sido resueltos por alguien.

Desventajas:

* Hay muchas formas de resolver un mismo problema, por lo tanto hay miles de librerías y tal vez pocas sean la solución correcta.

#### Vue

También está basado en componentes, cuenta con una gran usabilidad y una curva de aprendizaje muy fácil.

Su mayor desventaja es que al ser muy nuevo, su comunidad es muy nueva y es probable que los problemas con los que te encuentres tendrás que crear tu propia solución.

Ningún framework es mejor que el otro, cada uno cumple una funcionalidad distinta y cuenta con sus propias ventajas y desventajas.

## DESARROLLO DE LA APLICACIÓN

