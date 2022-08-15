import { axios } from '@/lib/axios';

// 
type user = {
   admin: 1 | 0,
   fullName: string,
   email: string,
   phone: string
}
type AuthUser = {
   token: string,
   user: user

}
type ResponseData = {
   data: AuthUser,
   status: string
}

export const getUser = (): Promise<ResponseData> => {
   return axios.post('/user/login', {
      email: 'preet@zzoota.com',
      password: "Admin@123"
   })
};
