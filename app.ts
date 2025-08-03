import { Invoice } from "./src/classes/Invoice.js";
import { Payment } from "./src/classes/Payment.js";
import { HasFormatter } from "./src/interfaces/HasFormatter.js";
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

let invOne = new Invoice("Akinade", "Webpage Error Work", 1200);
let invTwo = new Payment("Toal", " Volunteer Work", 1200);

let invoices: HasFormatter[] = [];
invoices.push(invOne, invTwo);
console.log(invoices);

// let anchor = document.querySelector("a")!;
// console.log();

let form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

let type = document.querySelector("#type") as HTMLSelectElement;
let tofrom = document.querySelector("#tofrom") as HTMLInputElement;
let details = document.querySelector("#details") as HTMLInputElement;
let amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
