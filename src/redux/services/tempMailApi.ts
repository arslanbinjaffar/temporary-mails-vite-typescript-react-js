// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl, createTempMailUrl, tempMailHost, tempMailkey } from '../common/apiUrls'
import { CreateNewEmailRequest, CreateNewEmailResponse, Message } from '../common/types'

// Define a service using a base URL and expected endpoints
export const tempMailApi = createApi({
    reducerPath: 'tempMailApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl, prepareHeaders: (headers) => {
            headers.set('x-rapidapi-host', tempMailHost)
            headers.set('x-rapidapi-key', tempMailkey)
            headers.set('Content-Type', 'application/json')
            return headers
        }
    }),
    endpoints: (builder) => ({
        getMessageByEmail: builder.query<Message[], string>({
            query: (emailId) => `/${emailId}/messages`,

        }),

        createNewEmail: builder.mutation<CreateNewEmailResponse, CreateNewEmailRequest>({
            query: (dimmyData) => ({
                url: createTempMailUrl,
                method: 'POST',
                body: dimmyData,
            })
        }),

    })
})



export const { useGetMessageByEmailQuery, useCreateNewEmailMutation } = tempMailApi