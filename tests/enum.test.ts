import { CustomerType, type Customer } from "../src/enum.js";


describe("enum", function () {
  it("should able to use enum", function () {
    const customer: Customer = {
      id: 2,
      name: "Michael Owie",
      type: CustomerType.Gold,
    };
    console.log(customer);
  });
});
