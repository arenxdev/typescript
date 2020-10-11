var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
function init(target) {
    return (function (_super) {
        __extends(default_1, _super);
        function default_1() {
            _super.apply(this, arguments);
            this.nombre = 'Aaron';
            this.apellido = 'Isaacs';
        }
        default_1.prototype.sayMyName = function () {
            return this.nombre + " " + this.apellido;
        };
        return default_1;
    })(target);
}
var P = (function () {
    function P() {
    }
    P.prototype.sayMyName = function () { };
    P = __decorate([
        init
    ], P);
    return P;
})();
var per = new P();
console.log(per.sayMyName());
