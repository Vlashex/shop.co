export interface User {
    id: string
    name: string
    email: string
}
export interface Auth {
    user: User | null
    token: string | null
}
