export interface Register {
    email: string
    name: string
    password: string
}
export interface User extends Register {
    id: string
    cart: number[]
}