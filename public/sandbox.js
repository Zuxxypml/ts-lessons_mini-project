var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/listTemplate.js";
import { Payment } from "./classes/payment.js";
// let age: number = 20;
// let names: string = "akinadeAdebisi";
// let circ = (diameter: number) => {
//   return diameter * Math.PI;
// };
// console.log(circ(5.5));
// console.log(age, names);
// let greet: (a: number, b: number) => void;
// greet = (a: number, b: number): number => {
//   return a + b;
// };
// console.log(greet(2, 2));
// let userDetails: (user: {
//   name: string;
//   location: string;
//   age?: number;
// }) => void;
// userDetails = (user: { name: string; location: string }) => {
//   console.log(`user name is ${user.name} and lives at ${user.location}`);
// };
// userDetails({ name: "akinade", location: "london" });
// let invOne = new Invoice("Akinade", "Webpage Error Work", 1200);
// let invTwo = new Payment("Toal", " Volunteer Work", 1200);
// let invoices: HasFormatter[] = [];
// invoices.push(invOne, invTwo);
// console.log(invoices);
// let anchor = document.querySelector("a")!;
// console.log();
var form = document.querySelector(".new-item-form");
// console.log(form.children);
var docs = [];
var type = document.querySelector("#type");
var list = document.querySelector(".item-list");
var listTemplate = new ListTemplate(list);
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var values = [
        tofrom.value,
        details.value,
        amount.valueAsNumber,
    ];
    var doc;
    if (type.value === "invoice") {
        doc = new (Invoice.bind.apply(Invoice, __spreadArray([void 0], values, false)))();
    }
    else {
        doc = new (Payment.bind.apply(Payment, __spreadArray([void 0], values, false)))();
    }
    listTemplate.render(doc, details.value, "end");
});
