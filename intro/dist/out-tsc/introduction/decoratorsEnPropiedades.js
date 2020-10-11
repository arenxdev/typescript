var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logProperty(target, key) {
    let _val = this[key];
    const getter = () => {
        console.log(`Get: ${key} => ${_val}`);
        return _val;
    };
    const setter = (newValue) => {
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
    constructor(name) {
        this.name = name;
    }
}
__decorate([
    logProperty
], Persona.prototype, "name", void 0);
const p = new Persona('Aaron');
p.name = 'Platzi';
const nameFromClass = p.name;
//# sourceMappingURL=decoratorsEnPropiedades.js.map