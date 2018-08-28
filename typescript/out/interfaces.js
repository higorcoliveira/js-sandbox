var Palio = /** @class */ (function () {
    function Palio() {
    }
    Palio.prototype.acelerate = function () {
        return 'Acelerate to 60km/h';
    };
    return Palio;
}());
var Corolla = /** @class */ (function () {
    function Corolla() {
    }
    Corolla.prototype.acelerate = function () {
        return 'Acelerate to 120km/h';
    };
    return Corolla;
}());
var aCar = new Palio(); // polimorfism
var someOjb = {
    speed: '50',
    hatch: true,
    acelerate: function () { return 'Acelerate to 120km/h'; }
};
aCar = someOjb; // duck typing
