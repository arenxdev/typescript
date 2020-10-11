"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function logProperty(target, key) {
    var _val = target[key];
    var getter = function () {
        console.log("Get: " + key + " => " + _val);
        return _val;
    };
    var setter = function (newValue) {
        console.log("Set: " + key + " => " + newValue);
        _val = newValue;
    };
    var objectProperty = {
        get: getter,
        set: setter
    };
    Object.defineProperty(target, key, objectProperty);
}
var Persona = /** @class */ (function () {
    function Persona(name) {
        this.name = name;
    }
    __decorate([
        logProperty
    ], Persona.prototype, "name", void 0);
    return Persona;
}());
var persona = new Persona('Aaron'); // Set: name => Aaron
persona.name = 'platzi'; // Set: name => platzi
var name = persona.name; // Get: name => platzi
