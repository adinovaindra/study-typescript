import type { Employee, Manager } from "../src/employee.js";
import type { Person } from "../src/person.js";
import { sayHello } from "../src/say-hello.js";
import type { Seller } from "../src/seller.js";

describe("Interface", function () {
  it("should support interface", function () {
    const seller: Seller = {
      id: 1,
      name: "Toko ABC",
      nib: "1230121",
      npwp: "19281932",
    };

    seller.name = "Toko DEF";
    console.log(seller);
  });

  it("should support function interface", function () {
    interface AddFunction {
      (value1: number, value2: number): number;
    }

    const add: AddFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(2, 3)).toBe(5);
  });

  it("should support array interface", () => {
    interface ArrayString {
      [index: number]: string;
    }

    const names: ArrayString = ["Adinova", "Indra", "Permana"];
    expect(names[0]).toBe("Adinova");
    expect(names[1]).toBe("Indra");
    expect(names[2]).toBe("Permana");
  });

  it("should support indexable interface like object", () => {
    interface StringDictionary {
      [key: string]: string;
    }

    const profile: StringDictionary = {
      name: "Adinova",
      address: "Yogyakarta",
      25: "xxx",
    };

    console.log(profile[25]);
  });

  it("should support extends interface", () => {
    const employee: Employee = {
      id: "sjdsjd",
      name: "Michael Jordan",
      division: "Palugada",
    };

    console.log(employee);

    const manager: Manager = {
      id: "osjosdjsod",
      name: "Michael Owen",
      division: "Head - headan",
      numberOfEmployees: 65,
    };

    console.log(manager);
  });

  it("should support function in interface", () => {
    const person: Person = {
      name: "Adinova Indra Permana",
      sayHello(name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
      },
    };
    expect(person.name).toBe("Adinova Indra Permana");
    expect(person.sayHello("Michael")).toBe(
      "Hello Michael, my name is Adinova Indra Permana",
    );
  });

  it("should support intersection types", () => {
    interface hasNamae {
      name: string;
    }

    interface hasId {
      id: string;
    }

    type Domain = hasId & hasNamae;

    const domain: Domain = {
      id: "2398203",
      name: "Dino Pati Jalal",
    };

    expect(domain).toEqual({
      id: "2398203",
      name: "Dino Pati Jalal",
    });
  });

  it("Should support type assertions", () => {
    const person : any = {
      name: 'Adinova',
      age: 30
    }

    const newPerson: Person = person as Person
    console.log(newPerson)
  })

  it('Should support function overloading', () => {
    function callMe(value: string):string
    function callMe(value: number):number
    function callMe(value: any) {
      if (typeof value === "string") {
        return value.toUpperCase()
      } else if (typeof value === "number") {
        return value * 2
      }
    }

    expect(callMe('michael')).toBe('MICHAEL')
    expect(callMe(23)).toBe(46);
  })

  it("Should support function parameter", () => {
    function sayHello(name:string, filter: (name:string) => string): string {
      return `Hello ${filter(name)}`
    }

    function toUpper(name: string): string {
      return name.toUpperCase()
    }

    expect(sayHello("Dino", toUpper)).toBe(`Hello DINO`)
  })

  it("Should support function parameter with anonymus style", () => {
    function sayHello(name: string, filter: (value:string) => string): string {
      return `Hello ${filter(name)}`
    }

    expect(sayHello('Dino', function (name:string): string {
      return name.toUpperCase()
    })).toBe(`Hello DINO`)
  })
});
