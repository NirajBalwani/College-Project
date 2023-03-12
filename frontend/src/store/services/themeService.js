import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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

const themeService = createApi({
    reducerPath: "themeService",
    tagTypes: 'themes',
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
            addTheme: builder.mutation({
                query: (data) => {
                    return {
                        url: "create-theme",
                        method: "POST",
                        body: data
                    }
                },
                invalidatesTags: ['products']
            }),
            fetchAllThemes: builder.query({
                query: () => {
                    return {
                        url: 'allthemes',
                        method: "GET"
                    }
                },
                transformResponse: (response) => response.data,
                providesTags: ['products']
            }),
            fetchOneTheme: builder.query({
                query: (id) => {
                    return {
                        url: `fetchOne/${id}`,
                        method: "GET"
                    }
                },
                providesTags: ['products']
            }),
            updateThemeName: builder.mutation({
                query: (data) => {
                    return {
                        url: "update-theme-name",
                        method: "PUT",
                        body: data
                    }
                },
                invalidatesTags: ['products']
            }),
            updateTheme: builder.mutation({
                query: (data) => {
                    return {
                        url: "update-theme",
                        method: "PUT",
                        body: data
                    }
                },
                invalidatesTags: ['products']
            }),
            deleteTheme: builder.mutation({
                query: (data) => {
                    return {
                        url: "delete-theme",
                        method: "DELETE",
                        body: data
                    }
                },
                invalidatesTags: ['products']
            }),
            fetchSingleTheme: builder.query({
                query: (id) => {
                    return {
                        url: `/fetch-theme/${id}`,
                        method: "GET"
                    }
                },
                providesTags: ['products']
            }),
        }
    }
})

export const { useAddThemeMutation, useDeleteThemeMutation, useFetchSingleThemeQuery, useFetchAllThemesQuery, useFetchOneThemeQuery, useUpdateThemeNameMutation, useUpdateThemeMutation } = themeService;

export default themeService;

