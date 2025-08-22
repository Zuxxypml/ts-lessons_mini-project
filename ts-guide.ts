// ===============================
// 1. BASIC TYPES
// ===============================

// --- Commonly Used ---
let age: number = 25; // Correct
let name: string = "Akinade"; // Correct

// Incorrect:
let wrongAge: number = "twenty"; // ❌ Error: Type 'string' is not assignable to type 'number'

// --- Less Used ---
let anything: any = 5; // 'any' disables type checking (avoid if possible)
let unknownValue: unknown = "hello"; // 'unknown' is safer than 'any'

// ===============================
// 2. ARRAYS & TUPLES
// ===============================

// --- Commonly Used ---
let numbers: number[] = [1, 2, 3]; // Correct
let tuple: [string, number] = ["hello", 10]; // Correct

// Incorrect:
let wrongNumbers: number[] = [1, "two", 3]; // ❌ Error: 'string' is not assignable to 'number'

// --- Less Used ---
let mixed: (string | number)[] = [1, "two", 3]; // Union types in arrays

// ===============================
// 3. FUNCTIONS
// ===============================

// --- Commonly Used ---
function add(a: number, b: number): number {
  return a + b;
}

// Incorrect:
function wrongAdd(a: number, b: number): number {
  return a + b + "error"; // ❌ Error: Type 'string' is not assignable to type 'number'
}

// --- Less Used ---
function optionalParam(a: number, b?: number): number {
  return a + (b || 0);
}

// ===============================
// 4. OBJECTS & INTERFACES
// ===============================

// --- Commonly Used ---
interface User {
  name: string;
  age: number;
  location?: string; // optional
}

let user: User = { name: "Akinade", age: 30 };

// Incorrect:
let wrongUser: User = { name: "Akinade" }; // ❌ Error: Property 'age' is missing

// --- Less Used ---
type Admin = User & { admin: true }; // Intersection types

// ===============================
// 5. CLASSES & ACCESS MODIFIERS
// ===============================

// --- Commonly Used ---
interface HasFormatter {
  format(): string;
}

class Invoice implements HasFormatter {
  constructor(
    readonly client: string,
    public details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes ₦${this.amount} for ${this.details}`;
  }
}

const inv = new Invoice("Akinade", "Web work", 2000);

// Incorrect:
class WrongInvoice {
  constructor(client: string, details: string, amount: number) {}
  // Missing format() method if implementing HasFormatter
}

// --- Less Used ---
class PrivateExample {
  private secret: string = "hidden";
  getSecret() {
    return this.secret;
  }
}

// ===============================
// 6. GENERICS
// ===============================

// --- Commonly Used ---
function identity<T>(arg: T): T {
  return arg;
}
let output = identity<string>("myString");

// Incorrect:
function wrongIdentity<T>(arg: T): number {
  return arg; // ❌ Error: Type 'T' is not assignable to type 'number'
}

// --- Less Used ---
function merge<T, U>(a: T, b: U): T & U {
  return { ...a, ...b };
}

// ===============================
// 7. ENUMS
// ===============================

// --- Less Used ---
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
let dir: Direction = Direction.Up;

// --- Commonly Used ---
const enum Status {
  Success,
  Failure,
}
let status: Status = Status.Success;

// ===============================
// 8. UNION & INTERSECTION TYPES
// ===============================

// --- Commonly Used ---
let value: string | number;
value = "hello";
value = 42;

// Incorrect:
value = true; // ❌ Error: 'boolean' is not assignable to 'string | number'

// --- Less Used ---
type AdminUser = Admin & User;

// ===============================
// 9. TYPE ASSERTIONS
// ===============================

// --- Commonly Used ---
let someValue: any = "hello";
let strLength: number = (someValue as string).length;

// Incorrect:
let wrongLength: number = (someValue as number).length; // ❌ Error at runtime

// --- Less Used ---
let input = <HTMLInputElement>document.getElementById("input");

// ===============================
// 10. MODULES & IMPORT/EXPORT
// ===============================

// --- Commonly Used ---
// In file: foo.ts
export const foo = 123;

// In another file
import { foo } from "./foo";

// Incorrect:
import { bar } from "./foo"; // ❌ Error: 'bar' is not exported by './foo'

// ===============================
// 11. UTILITY TYPES
// ===============================

// --- Less Used ---
type PartialUser = Partial<User>;
type ReadonlyUser = Readonly<User>;
type PickName = Pick<User, "name">;

// ===============================
// 12. ADVANCED TYPES
// ===============================

// --- Less Used ---
type Literal = "left" | "right";
let direction: Literal = "left";

// Type Guards
function isString(val: any): val is string {
  return typeof val === "string";
}

// ===============================
// 13. TS CONFIGURATION (tsconfig.json)
// ===============================

/*
{
  "compilerOptions": {
    "target": "es6",
    "module": "es2015",
    "strict": true,
    "rootDir": "./src",
    "outDir": "./dist"
  },
  "include": ["src"]
}
*/

// ===============================
// 14. DOM & TYPESCRIPT
// ===============================

// --- Commonly Used ---
const form = document.querySelector("form") as HTMLFormElement;
const input = document.querySelector("#input") as HTMLInputElement;

// Incorrect:
const wrongForm = document.querySelector("form"); // Type is Element | null, not HTMLFormElement

// ===============================
// 15. BEST PRACTICES
// ===============================

// - Use explicit types
// - Prefer interfaces for object shapes
// - Use 'strict' mode in tsconfig.json
// - Use modules to organize code
// - Use type assertions only when necessary

// ===============================
// 16. RESOURCES
// ===============================

// - https://www.typescriptlang.org/docs/handbook/intro.html
// - https://www.typescriptlang.org/play
// - https://basarat.gitbook.io/typescript/

// ===============================
// END OF GUIDE
// ===============================
