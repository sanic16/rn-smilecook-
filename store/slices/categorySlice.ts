import { apiSlice } from "./apiSlice";
import { CATEGORIES_URL } from "../../utils/constants";

export const categoriesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCategories: builder.query<Category[], void>({
            query: () => ({
                url: CATEGORIES_URL
            })
        })
    })
})

export const { 
    useGetCategoriesQuery
} = categoriesApiSlice