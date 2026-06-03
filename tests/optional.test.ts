describe("Optional", function () {
  it("support null and undefined", function () {
    function sayHello(name?: string | null) {
      if (name) {
        console.log(`Hello ${name}`);
      } else {
        console.log(`Hello`);
      }
    }

    sayHello("Dino");
    const name: string | undefined = undefined;

    sayHello(name);
    sayHello(null)
  });
});
