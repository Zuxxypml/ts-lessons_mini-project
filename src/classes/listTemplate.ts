import { HasFormatter } from "../interfaces/HasFormatter.js";

export class ListTemplate {
  constructor(private ul: HTMLUListElement) {}

  render(
    invoiceOrPayment: HasFormatter,
    heading: string,
    position: "start" | "end"
  ) {
    const li = document.createElement("li");
    const h4 = document.createElement("h4");
    h4.innerText = heading;
    li.append(h4);

    const p = document.createElement("p");
    p.innerText = invoiceOrPayment.format();
    li.append(p);

    if (position === "start") {
      this.ul.prepend(li);
    } else {
      this.ul.append(li);
    }
  }
}
