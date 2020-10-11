class Person {
    constructor(edad, altura, dni) {
        this.edad = edad;
        this.altura = altura;
        this.dni = dni;
    }
}
class Alumno extends Person {
    constructor(edad, altura, dni, matricula) {
        super(edad, altura, dni);
        this.matricula = matricula;
    }
}
let person = new Person(27, 1.69, '36601731');
let alumno = new Alumno(27, 1.69, '36601731', '123');
let shape = new Alumno(27, 1.69, '36601731', '123');
//# sourceMappingURL=shapes.js.map