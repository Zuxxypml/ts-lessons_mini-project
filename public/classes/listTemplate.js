var ListTemplate = /** @class */ (function () {
    function ListTemplate(ul) {
        this.ul = ul;
    }
    ListTemplate.prototype.render = function (invoiceOrPayment, heading, position) {
        var li = document.createElement("li");
        var h4 = document.createElement("h4");
        h4.innerText = heading;
        li.append(h4);
        var p = document.createElement("p");
        p.innerText = invoiceOrPayment.format();
        li.append(p);
        if (position == "start") {
            this.ul.prepend(li);
        }
        else
            [this.ul.append(li)];
    };
    return ListTemplate;
}());
export { ListTemplate };
