var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
function logProperty(target, key) {
    var _val = this[key];
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
var Persona = (function () {
    function Persona(name) {
        this.name = name;
    }
    __decorate([
        logProperty
    ], Persona.prototype, "name");
    return Persona;
})();
var p = new Persona('Aaron');
p.name = 'Platzi';
var nameFromClass = p.name;
