describe("Union type", function () {
  it("should able change the data type", function () {
    let sample: number | string | boolean = "Dino";
    console.log(sample);

    sample = 100;
    console.log(sample);

    sample = true;
    console.log(sample);

    function process(value: string | number | boolean) {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value + 2;
      } else {
        return !value;
      }
    }

    expect(process("Dino")).toBe("DINO");
    expect(process(100)).toBe(102);
    expect(process(true)).toBe(false);
  });
});
