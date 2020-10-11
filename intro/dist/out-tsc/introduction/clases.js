class Transporte {
    constructor(velocidad, formaDeMovilidad) {
        this.velocidad = velocidad;
        this.formaDeMovilidad = formaDeMovilidad;
    }
    getVelocidad() {
        return this.velocidad;
    }
    setVelocidad(velocidad) {
        this.velocidad = velocidad;
    }
    getFormaDeMovilidad() {
        return this.formaDeMovilidad;
    }
    setFormaDeMovilidad(formaDeMovilidad) {
        this.formaDeMovilidad = formaDeMovilidad;
    }
}
const transporte = new Transporte(20, 'suelo');
class Auto extends Transporte {
    constructor(velocidad, formaDeMovilidad, cantidadDePuertas) {
        super(velocidad, formaDeMovilidad);
        this.cantidadDePuertas = cantidadDePuertas;
    }
    getVelocidad() {
        return super.getVelocidad() + 10;
    }
    getCantidadDePuertas() {
        return this.cantidadDePuertas;
    }
    setCantidadDePuertas(cantidadDePuertas) {
        this.cantidadDePuertas = cantidadDePuertas;
    }
}
const auto = new Auto(20, 'suelo', 4);
//# sourceMappingURL=clases.js.map