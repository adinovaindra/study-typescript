describe("Function", () => {
  it("Should support in typescript", () => {
    function sayHello(name: string): string {
      return `Hello ${name}`;
    }

    expect(sayHello("Dino")).toBe(`Hello Dino`);

    function printHello(name:string):void {
        console.log(`Hello Dino`)
    }

    printHello('Dino')
  });
});
