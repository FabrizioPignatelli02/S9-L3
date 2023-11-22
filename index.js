var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(_name, _redditoannuo) {
        this.name = _name;
        this.redditoannuoordo = _redditoannuo;
    }
    Person.prototype.display = function () {
        console.log(this.name + " ha guadagnato (lordo) " + this.redditoannuoordo + "€");
    };
    return Person;
}());
var Tax = /** @class */ (function (_super) {
    __extends(Tax, _super);
    function Tax(_name, _redditoannuo) {
        var _this = _super.call(this, _name, _redditoannuo) || this;
        _this.codredd = 78;
        _this.name = _name;
        _this.redditoannuoordo = _redditoannuo;
        return _this;
    }
    Tax.prototype.getUtileTasse = function () {
        var utile = (this.redditoannuoordo * this.codredd) / 100;
        return utile;
    };
    Tax.prototype.getTasseInps = function () {
        var utileTasse = this.getUtileTasse();
        var tassainps = 0;
        if (utileTasse <= 15000) {
            tassainps = (utileTasse * 23) / 100;
        }
        else if (utileTasse > 15000 && utileTasse <= 28000) {
            tassainps = (utileTasse * 27) / 100;
        }
        else if (utileTasse > 28000 && utileTasse <= 55000) {
            tassainps = (utileTasse * 38) / 100;
        }
        else if (utileTasse > 55000) {
            tassainps = (utileTasse * 41) / 100;
        }
        return tassainps;
    };
    Tax.prototype.getTasseIrpef = function () {
        var utileTasse = this.getUtileTasse();
        var tassairpef = 0;
        if (utileTasse <= 15000) {
            tassairpef = (utileTasse * 23) / 100;
        }
        else if (utileTasse > 15000 && utileTasse <= 28000) {
            tassairpef = (utileTasse * 25) / 100;
        }
        else if (utileTasse > 28000 && utileTasse <= 50000) {
            tassairpef = (utileTasse * 35) / 100;
        }
        else if (utileTasse > 50000) {
            tassairpef = (utileTasse * 43) / 100;
        }
        return tassairpef;
    };
    Tax.prototype.getRedditoAnnuoNetto = function () {
        var utile = this.getUtileTasse();
        var inps = this.getTasseInps();
        var Irpef = this.getTasseIrpef();
        var redditoNetto = utile - inps - Irpef;
        return redditoNetto;
    };
    return Tax;
}(Person));
var rizzo = new Tax("Rizzo", 20000);
rizzo.display();
console.log("Utile tasse:", rizzo.getUtileTasse());
console.log("Tasse Inps:", rizzo.getTasseInps());
console.log("Tasse Irpef:", rizzo.getTasseIrpef());
console.log("Rizzo guadagnerà:", rizzo.getRedditoAnnuoNetto());
