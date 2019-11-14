var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
function log(target, key) {
    console.log(key + ' was call');
}
var PersonaDec = (function () {
    function PersonaDec(name) {
        this.name = name;
    }
    PersonaDec.prototype.sayMyName = function () {
        console.log(this.name);
    };
    Object.defineProperty(PersonaDec.prototype, "sayMyName",
        __decorate([
            log
        ], PersonaDec.prototype, "sayMyName", Object.getOwnPropertyDescriptor(PersonaDec.prototype, "sayMyName")));
    return PersonaDec;
})();
var persona = new PersonaDec('Aaron');
persona.sayMyName(); // 'Aaron' // ''sayMyName was call
