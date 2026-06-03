describe("Data Type", function () {
  it("should must declare", function () {
    let name: string = "Adinova Indra Permana";
    let balance: number = 10000000;
    let isVip: boolean = true;

    expect(name).toBe("Adinova Indra Permana");
    expect(balance).toBe(10000000);
    expect(isVip).toBe(true);
  });
});
