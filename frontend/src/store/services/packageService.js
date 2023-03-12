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
        return `Bearer ${token}`;
    } else {
        return '';
    }
};

const packageService = createApi({
    reducerPath: "packageService",
    tagTypes: "packages",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:7800/api",
        prepareHeaders: (headers) => {
            headers.set('Authorization', getAuthorizationHeader())
            return headers;
        }
    }),
    endpoints: (builder) => {
        return {
            createPackage: builder.mutation({
                query: (data) => {
                    return {
                        url: "create-package",
                        method: "POST",
                        body: data
                    }
                },
                invalidatesTags: ['packages']
            }),
            fetchAllPackages: builder.query({
                query: () => {
                    return {
                        url: 'all-packages',
                        method: "GET"
                    }
                },
                // transformResponse: (response) => response.data,
                providesTags: ['packages']
            }),
            deletePackage: builder.mutation({
                query: (data) => {
                    return {
                        url: 'delete-package',
                        method: "DELETE",
                        body: data
                    }
                },
                invalidatesTags: ['packages']
            }),
            fetchOnePackage: builder.query({
                query: (id) => {
                    return {
                        url: `fetch-single-package/${id}`,
                        method: "GET",
                    }
                },
                providesTags: ['packages']
            }),
            updatePackage: builder.mutation({
                query: (data) => {
                    return {
                        url: 'update-packagee',
                        method: "PUT",
                        body: data,
                    }
                },
                invalidatesTags: ['packages']
            }),
            fetchThemePackage: builder.query({
                query: (id) => {
                    return {
                        url: `fetch-theme-packages/${id}`,
                        method: "GET"
                    }
                }
            })
        }
    }
})

export const { useCreatePackageMutation, useFetchThemePackageQuery, useUpdatePackageMutation, useFetchAllPackagesQuery, useFetchOnePackageQuery, useDeletePackageMutation } = packageService;

export default packageService;

