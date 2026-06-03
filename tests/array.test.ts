describe("How to make an Array", function () {
  it("should be produce an array in typescript format", function () {
    const name: string[] = ["Adinova", "Indra", "Permana"];
    const values: number[] = [1, 2, 3];

    expect(name).toEqual(["Adinova", "Indra", "Permana"]);
    expect(values).toEqual([1, 2, 3]);
  });

  it("should only read the array", function () {
    const hobbies: ReadonlyArray<string> = ["Membaca", "Menulis"];
    console.log(hobbies[0]);
  });

  it("should support tupple", function () {
    const person: readonly [string, string, number] = ["Adinova", "Indra", 4];
    console.log(person)

    console.log(person[0])
    console.log(person[1])
    console.log(person[2])

    
  });
});
