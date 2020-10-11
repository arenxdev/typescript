"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function log(target, key) {
    console.log("DECORATOR: Key: " + key + ", Target: " + JSON.stringify(target));
}
var Persona = /** @class */ (function () {
    function Persona(name) {
        this.name = name;
    }
    Persona.prototype.sayMyName = function () {
        console.log(this.name);
    };
    __decorate([
        log
    ], Persona.prototype, "sayMyName", null);
    return Persona;
}());
var persona = new Persona('Aaron');
persona.sayMyName();
