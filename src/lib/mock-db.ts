import { products } from "./consts";
import { IUser, IRegister, ICard, INewCard } from "./types";

// In-memory хранилище
// Persist DB across hot reloads
// Persist DB across hot reloads
const globalForMock = globalThis as unknown as {
  __db?: typeof dbInternal;
};


// ---------------- DB ------------------

const dbInternal = {
  users: [] as IUser[],
  products,
  userPasswords: new Map<number, string>(),

  nextUserId: 1,

  // Calculate next product ID from dataset
  nextProductId: Math.max(...products.map(p => p.id)) + 1
};

export const db = globalForMock.__db ?? (globalForMock.__db = dbInternal);



// ========== USERS ==========

export function getAllUsers(): IUser[] {
  return db.users;
}

export function getUserById(id: number): IUser | null {
  return db.users.find((user) => user.id === id) || null;
}

export function getUserByEmail(email: string): IUser | null {
  return db.users.find((user) => user.email === email) || null;
}

export function createUser(data: IRegister, hashedPassword?: string): IUser {
  const newUser: IUser = {
    id: db.nextUserId++,
    email: data.email,
    name: data.name,
    cart: [],
  };

  db.users.push(newUser);

  if (hashedPassword) {
    db.userPasswords.set(newUser.id, hashedPassword);
  }

  return newUser;
}

export function getUserPassword(userId: number): string | undefined {
  return db.userPasswords.get(userId);
}

export function setUserPassword(userId: number, hashedPassword: string): void {
  db.userPasswords.set(userId, hashedPassword);
}

export function updateUser(
  id: number,
  data: Partial<Omit<IUser, "id">>
): IUser | null {
  const index = db.users.findIndex((u) => u.id === id);
  if (index === -1) return null;

  db.users[index] = { ...db.users[index], ...data };
  return db.users[index];
}

export function deleteUser(id: number): boolean {
  const index = db.users.findIndex((u) => u.id === id);
  if (index === -1) return false;

  db.users.splice(index, 1);
  db.userPasswords.delete(id);
  return true;
}

// ========== CART ==========

export function addToCart(userId: number, productId: number): IUser | null {
  const user = getUserById(userId);
  if (!user) return null;

  if (!user.cart.includes(productId)) {
    user.cart.push(productId);
  }
  return user;
}

export function addManyToCart(
  userId: number,
  productIds: number[]
): IUser | null {
  const user = getUserById(userId);
  if (!user) return null;

  for (const id of productIds) {
    if (!user.cart.includes(id)) user.cart.push(id);
  }

  return user;
}

export function removeFromCart(
  userId: number,
  productId: number
): IUser | null {
  const user = getUserById(userId);
  if (!user) return null;

  user.cart = user.cart.filter((id) => id !== productId);
  return user;
}

export function removeAllFromCart(
  userId: number,
  productId: number
): IUser | null {
  return removeFromCart(userId, productId);
}

export function clearCart(userId: number): IUser | null {
  const user = getUserById(userId);
  if (!user) return null;

  user.cart = [];
  return user;
}

// ========== PRODUCTS ==========

export function getAllProducts(start = 0, limit = 10): ICard[] {
  console.log(db)
  return db.products.slice(start, start + limit);
}

export function getProductById(id: number): ICard | null {
  return db.products.find((p) => p.id === id) || null;
}

export function getProductsByIds(ids: number[]): ICard[] {
  return db.products.filter((p) => ids.includes(p.id));
}

export function createProduct(data: INewCard): ICard {
  const newProduct: ICard = {
    id: db.nextProductId++,
    sizes: [],
    styles: [],
    category: "",
    colors: [],
    ...data,
    previousPrice: data.price * 1.2,
  };

  db.products.push(newProduct);
  return newProduct;
}

export function updateProduct(
  id: number,
  data: Partial<INewCard>
): ICard | null {
  const index = db.products.findIndex((p) => p.id === id);
  if (index === -1) return null;

  const updated: ICard = { ...db.products[index], ...data };

  if (data.price !== undefined) {
    updated.previousPrice = data.price * 1.2;
  }

  db.products[index] = updated;
  return updated;
}

export function deleteProduct(id: number): boolean {
  const index = db.products.findIndex((p) => p.id === id);
  if (index === -1) return false;

  db.products.splice(index, 1);
  return true;
}

// ========== TEST DATA ==========

export function seedMockData() {
  createProduct({
    title: "Sample Product 1",
    price: 99,
    rate: 4.5,
    images: ["https://via.placeholder.com/300"],
  });
  console.log(db.products, 'db.products')
}
