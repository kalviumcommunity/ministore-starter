// A pretend "slow database". In a real app this would query PostgreSQL;
// here it just returns a fixed list after a short delay so you can see caching work.
const PRODUCTS = [
  { id: 1, name: "Notebook", price: 120 },
  { id: 2, name: "Pen", price: 20 },
  { id: 3, name: "Backpack", price: 900 },
];

export function getProductsSlowly() {
  return new Promise((resolve) => setTimeout(() => resolve(PRODUCTS), 200));
}
