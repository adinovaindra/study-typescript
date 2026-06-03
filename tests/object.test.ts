describe("Object", function () {
  it("should return object", function () {
    const person: { id: number; name: string, hobbies?: string[] } = {
      id: 1,
      name: "Adinova Indra Permana",
    };

    console.log(person);
    person.id = 2;
    person.name = "Michael Jordan";

    console.log(person);
  });
});
