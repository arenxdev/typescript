import { __decorate } from "tslib";
function log(target, key) {
    console.log(key + ' was call');
}
class PersonaDec {
    constructor(name) {
        this.name = name;
    }
    sayMyName() {
        console.log(this.name);
    }
}
__decorate([
    log
], PersonaDec.prototype, "sayMyName", null);
const persona = new PersonaDec('Aaron');
persona.sayMyName(); // 'Aaron' // ''sayMyName was call
//# sourceMappingURL=decorator.js.map