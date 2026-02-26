export interface IUser {
  id: string
  email: string
  name: string
  cart: string[]
}

export interface IAuth {
  user: IUser | null
  tokens: {
    access_token: string
    refresh_token: string
  } | null
}

export interface IRegister {
  email: string
  name: string
  password: string
}

export interface INewCard {
  title: string
  price: number
  rate: number
  images: string[]
}

export interface ICard extends INewCard {
  id: string
  previousPrice: number
  category: string
  sizes: string[]
  styles: string[]
  colors: string[]
}

export const CATEGORY_LIST = ["t-shirt", "shorts", "shirts", "hoodie", "jeans"] as const
export type TCategory = typeof CATEGORY_LIST[number]

export const SIZE_LIST = [
  "XX-Small",
  "X-Small",
  "Small",
  "Medium",
  "Large",
  "X-Large",
] as const
export type TSize = typeof SIZE_LIST[number]

export const STYLE_LIST = ["casual", "cringe"] as const
export type TStyle = typeof STYLE_LIST[number]

export const COLOR_LIST = ["black", "white", "grey", "blue", "beige", "green"] as const
export type TColor = typeof COLOR_LIST[number]

export interface IFilters {
  page: number
  categorys: TCategory[]
  price: string
  colors: TColor[]
  sizes: TSize[]
  styles: TStyle[]
}