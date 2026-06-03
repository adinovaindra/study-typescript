type ID = string | number;

export type Category = {
  id: ID;
  name: string;
};

export type Product = {
  id: ID;
  name: string;
  price: number;
  category: Category;
  description?: string
};

const category: Category = {
  id: "1",
  name: "Handphone",
};

const product: Product = {
  id: "1",
  name: "iPhone 14 Pro Max",
  price: 22000000,
  category: category,
};

console.log(category);
console.log(product);
