// import fs from "fs";
// import path from "path";
// import { IUser, ICard, IRegister, INewCard } from "./types";

// const DB_PATH = path.join(process.cwd(), "db", "db.json");

// // ---------- БАЗОВЫЕ ФУНКЦИИ ----------

// function loadDB() {
//   try {
//     const raw = fs.readFileSync(DB_PATH, "utf8");
//     return JSON.parse(raw);
//   } catch (e) {
//     // файл повреждён — пересоздаём
//     const initial = {
//       users: [],
//       products: [],
//       userPasswords: {},
//       nextUserId: 1,
//       nextProductId: 1,
//     };
//     fs.writeFileSync(DB_PATH, JSON.stringify(initial, null, 2));
//     return initial;
//   }
// }

// function saveDB(db: any) {
//   fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
// }

// // ---------- USERS ----------

// export function getAllUsers(): IUser[] {
//   const db = loadDB();
//   return db.users;
// }

// export function getUserById(id: number): IUser | null {
//   const db = loadDB();
//   return db.users.find((u: IUser) => u.id === id) || null;
// }

// export function getUserByEmail(email: string): IUser | null {
//   const db = loadDB();
//   return db.users.find((u: IUser) => u.email === email) || null;
// }

// export function createUser(data: IRegister, hashedPassword: string): IUser {
//   const db = loadDB();

//   const newUser: IUser = {
//     id: db.nextUserId++,
//     email: data.email,
//     name: data.name,
//     cart: [],
//   };

//   db.users.push(newUser);
//   db.userPasswords[newUser.id] = hashedPassword;

//   saveDB(db);
//   return newUser;
// }

// export function getUserPassword(userId: number): string | undefined {
//   const db = loadDB();
//   return db.userPasswords[userId];
// }

// export function updateUser(id: number, data: Partial<Omit<IUser, "id">>) {
//   const db = loadDB();
//   const index = db.users.findIndex((u: IUser) => u.id === id);
//   if (index === -1) return null;

//   db.users[index] = { ...db.users[index], ...data };
//   saveDB(db);

//   return db.users[index];
// }

// export function deleteUser(id: number): boolean {
//   const db = loadDB();
//   const index = db.users.findIndex((u: IUser) => u.id === id);
//   if (index === -1) return false;

//   db.users.splice(index, 1);
//   delete db.userPasswords[id];
//   saveDB(db);

//   return true;
// }

// // ---------- CART ----------

// export function addToCart(userId: number, productId: number): IUser | null {
//   const db = loadDB();
//   const user = db.users.find((u: IUser) => u.id === userId);
//   if (!user) return null;

//   if (!user.cart.includes(productId)) user.cart.push(productId);
//   saveDB(db);
//   return user;
// }

// export function clearCart(userId: number): IUser | null {
//   const db = loadDB();
//   const user = db.users.find((u: IUser) => u.id === userId);
//   if (!user) return null;

//   user.cart = [];
//   saveDB(db);

//   return user;
// }

// // ---------- PRODUCTS ----------

// export function getAllProducts(start = 0, limit = 10): ICard[] {
//   const db = loadDB();
//   return db.products.slice(start, start + limit);
// }

// export function createProduct(data: INewCard): ICard {
//   const db = loadDB();

//   const newProduct: ICard = {
//     id: db.nextProductId++,
//     ...data,
//     previousPrice: data.price * 1.2,
//   };

//   db.products.push(newProduct);
//   saveDB(db);

//   return newProduct;
// }

// export function getProductById(id: number): ICard | null {
//   const db = loadDB();
//   return db.products.find((p: ICard) => p.id === id) || null;
// }

// export function getProductsByIds(ids: number[]): ICard[] {
//   const db = loadDB();
//   return db.products.filter((p: ICard) => ids.includes(p.id));
// }

// export function deleteProduct(id: number): boolean {
//   const db = loadDB();
//   const index = db.products.findIndex((p: ICard) => p.id === id);
//   if (index === -1) return false;

//   db.products.splice(index, 1);
//   saveDB(db);
//   return true;
// }

// // ---------- MOCK DATA ----------

// export function seedMockData() {
//   const db = loadDB();

//   db.products.push({
//     id: db.nextProductId++,
//     title: "Sample Product",
//     price: 99.99,
//     rate: 4.6,
//     images: ["https://via.placeholder.com/300"],
//     previousPrice: 120.0,
//   });

//   saveDB(db);
// }
