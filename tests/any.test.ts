describe("Any", function () {
  it("should support any data type in typescript", function () {
    const person: any = {
      id: 1,
      name: "Adinova Indra Permana",
      age: 30,
    };

    person.age = 31;
    person.isMarried = false;

    console.log(person);
  });
});
