var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes \u20A6").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
export { Invoice };
