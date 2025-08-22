learning ts and applying lessons to create a mini project

---

# TypeScript Comprehensive Guide

## 1. Basic Types

**Correct:**
```typescript
let age: number = 25;
let name: string = "Akinade";
```
**Incorrect:**
```typescript
let wrongAge: number = "twenty"; // ❌ Error: Type 'string' is not assignable to type 'number'
```

---

## 2. Arrays & Tuples

**Correct:**
```typescript
let numbers: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];
```
**Incorrect:**
```typescript
let wrongNumbers: number[] = [1, "two", 3]; // ❌
```
**Less Used:**
```typescript
let mixed: (string | number)[] = [1, "two", 3];
```

---

## 3. Functions

**Correct:**
```typescript
function add(a: number, b: number): number {
  return a + b;
}
```
**Incorrect:**
```typescript
function wrongAdd(a: number, b: number): number {
  return a + b + "error"; // ❌
}
```
**Less Used:**
```typescript
function optionalParam(a: number, b?: number): number {
  return a + (b || 0);
}
```

---

## 4. Objects & Interfaces

**Correct:**
```typescript
interface User {
  name: string;
  age: number;
  location?: string;
}
let user: User = { name: "Akinade", age: 30 };
```
**Incorrect:**
```typescript
let wrongUser: User = { name: "Akinade" }; // ❌
```
**Less Used:**
```typescript
type Admin = User & { admin: true };
```

---

## 5. Classes & Access Modifiers

**Correct:**
```typescript
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
```
**Incorrect:**
```typescript
class WrongInvoice {
  constructor(client: string, details: string, amount: number) {}
  // Missing format() method if implementing HasFormatter
}
```
**Less Used:**
```typescript
class PrivateExample {
  private secret: string = "hidden";
  getSecret() {
    return this.secret;
  }
}
```

---

## 6. Generics

**Correct:**
```typescript
function identity<T>(arg: T): T {
  return arg;
}
let output = identity<string>("myString");
```
**Incorrect:**
```typescript
function wrongIdentity<T>(arg: T): number {
  return arg; // ❌
}
```
**Less Used:**
```typescript
function merge<T, U>(a: T, b: U): T & U {
  return { ...a, ...b };
}
```

---

## 7. Enums

**Less Used:**
```typescript
enum Direction {
  Up,
  Down,
  Left,
  Right
}
let dir: Direction = Direction.Up;
```
**Commonly Used:**
```typescript
const enum Status {
  Success,
  Failure
}
let status: Status = Status.Success;
```

---

## 8. Union & Intersection Types

**Correct:**
```typescript
let value: string | number;
value = "hello";
value = 42;
```
**Incorrect:**
```typescript
value = true; // ❌
```
**Less Used:**
```typescript
type AdminUser = Admin & User;
```

---

## 9. Type Assertions

**Correct:**
```typescript
let someValue: any = "hello";
let strLength: number = (someValue as string).length;
```
**Incorrect:**
```typescript
let wrongLength: number = (someValue as number).length; // ❌
```
**Less Used:**
```typescript
let input = <HTMLInputElement>document.getElementById("input");
```

---

## 10. Modules & Import/Export

**Correct:**
```typescript
// In file: foo.ts
export const foo = 123;

// In another file
import { foo } from "./foo";
```
**Incorrect:**
```typescript
import { bar } from "./foo"; // ❌
```

---

## 11. Utility Types

**Less Used:**
```typescript
type PartialUser = Partial<User>;
type ReadonlyUser = Readonly<User>;
type PickName = Pick<User, "name">;
```

---

## 12. Advanced Types

**Less Used:**
```typescript
type Literal = "left" | "right";
let direction: Literal = "left";

// Type Guards
function isString(val: any): val is string {
  return typeof val === "string";
}
```

---

## 13. TS Configuration (tsconfig.json)

```json
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
```

---

## 14. DOM & TypeScript

**Correct:**
```typescript
const form = document.querySelector("form") as HTMLFormElement;
const input = document.querySelector("#input") as HTMLInputElement;
```
**Incorrect:**
```typescript
const wrongForm = document.querySelector("form"); // Type is Element | null, not HTMLFormElement
```

---

## 15. Best Practices

- Use explicit types
- Prefer interfaces for object shapes
- Use 'strict' mode in tsconfig.json
- Use modules to organize code
- Use type assertions only when necessary

---

## 16. Resources

- https://www.typescriptlang.org/docs/handbook/intro.html
- https://www.typescriptlang.org/play
-