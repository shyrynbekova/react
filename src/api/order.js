import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

export const orderApi = createApi ({
    reducerPath: 'orderApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com'}),
    endpoints: (builder) => ({
        getOrders: builder.query({
            queryFn: async() => {
                const data = await supabase.
                from("restaurants")
                .select(`food (id, name, price, description)
                `)
                .eq('id', 2)
          
                data.data[0].food.map(dish => {
                  dish.sum = 0;
                  dish.quantity = 0;
                })
                return {data: data[0].food}
            } 
        })

    })
})
export const { useGetOrdersQuery } = orderApi;