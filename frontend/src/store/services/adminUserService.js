import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const getToken = () => {
    // Retrieve token from local storage or session storage
    const token = localStorage.getItem('admin-token')
    return token;
};

const getAuthorizationHeader = () => {
    const token = getToken();
    if (token) {
        console.log(token);
        return `${token}`;
    } else {
        return '';
    }
};

const adminUserService = createApi({
    reducerPath: "adminUserService",
    tagTypes: "adminUserService",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:7800/api",
        prepareHeaders: (headers) => {
            headers.set('Authorization', getAuthorizationHeader())
            console.log(headers);
            console.log(getAuthorizationHeader());
            return headers;
        }
    }),
    endpoints: (builder) => {
        return {
            getAllUsers: builder.query({
                query: () => {
                    return {
                        url: "get-all-users",
                        method: "GET",
                    }
                },
                providesTags: ['adminUserService']
            }),
            getSingleUser: builder.query({
                query: (id) => {
                    return {
                        url: `fetch-one-user/${id}`,
                        method: "GET",
                    }
                },
                providesTags: ['adminUserService']
            }),
            deleteUser: builder.mutation({
                query: (data) => {
                    return {
                        url: "delete-user",
                        method: "DELETE",
                        body: data
                    }
                },
                invalidatesTags: ['adminUserService']
            }),
            updateUser: builder.mutation({
                query: (data) => {
                    return {
                        url: "update-user",
                        method: "PUT",
                        body: data
                    }
                },
                invalidatesTags: ['adminUserService']
            }),
            createUser: builder.mutation({
                query: (data) => {
                    return {
                        url: "add-user",
                        method: "POST",
                        body: data
                    }
                },
                invalidatesTags: ['adminUserService']
            }),
        }
    }
})

export const { useCreateUserMutation, useDeleteUserMutation, useGetAllUsersQuery, useGetSingleUserQuery, useUpdateUserMutation } = adminUserService;

export default adminUserService;


