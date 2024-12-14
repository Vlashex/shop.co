"use server";

import axios from "axios";
import { ICard } from "../types";



export async function getProducts(start: number, limit: number): Promise<ICard[]> {
  return axios.get(process.env.BACKEND_HOST + "/products" + `?start=${start}&limit=${limit}`)
  .then((res) => res.data)
  .catch((err) => console.log(err)) || [];
}
