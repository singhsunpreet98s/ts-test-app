export type AuthUser = {
   id: string,
   email: string,
   firstName: string,
   lastName: string,
   bio: string,
   role: 'ADMIN' | 'MANAGER' | 'USER'
}
export type UserReponse = {
   authToken: string,
   user: AuthUser
}