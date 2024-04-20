import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

export const todoApi = createApi ({
    reducerPath: 'todoApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com'}),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: ()=>  `/todos`
        })

    })
})
export const {useGetTodosQuery} = todoApi;