export interface IRegister {
    email: string
    name: string
    password: string
}
export interface IUser extends Omit<IRegister, 'password'> {
    id: number
    cart: number[]
}
export interface ITokens {
    access_token: string
    refresh_token: string
}
export interface IAuth {
    user: IUser | null
    tokens: ITokens | null
}