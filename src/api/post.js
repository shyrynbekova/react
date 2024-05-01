import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import {supabase} from './index.js';

export const orderApi = createApi ({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com'}),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => '/posts' 
        }),
        getPOstById: builder.query({
            query: (id) => `/posts/${id}`
        }),
        getFood: builder.query ({
            queryFn: async () => {
                const data = await supabase.from('restaurant').select(`id`)
                return { data: data }
            }
        }),  
        addPost: builder.mutation({
            query: ({ body }) => ({
                url: `/post`,
                method: 'POST',
                body

            })
        }),
        createOrder: builder.mutation({
            queryFn: async ({ first_name, last_name, email, phone,
            street_name, house_number, zip_code, city, meal_ids }) => {
                const { data, error } = await supabase
                .from('order')
                .insert([
                    {
                      first_name: first_name,
                      last_name: last_name,
                      email: email,
                      phone: phone,
                      street_name: street_name,
                      house_number: house_number,  
                      zip_code:zip_code,
                    city: city, 
                    meal_ids: meal_ids
                    }
                ])
            }
            })
        })       
)
        
        
       