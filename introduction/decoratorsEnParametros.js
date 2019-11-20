var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logParameter(target, propertyName, index) {
    var metaDataKey = "log_" + propertyName + "_parameters";
    if (Array.isArray(target[metaDataKey])) {
        target[metaDataKey].push(index);
    }
    else {
        target[metaDataKey] = [index];
    }
    console.log(target[metaDataKey]);
}
var Person = (function () {
    function Person() {
    }
    Person.prototype.greet = function (message, additionalString) {
        return message;
    };
    Object.defineProperty(Person.prototype, "greet",
        __decorate([
            __param(1, logParameter)
        ], Person.prototype, "greet", Object.getOwnPropertyDescriptor(Person.prototype, "greet")));
    return Person;
})();
var person = new Person();
person.greet('Hola', 'Aaron');
