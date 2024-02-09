import { apiSlice } from "./apiSlice";
import { RECIPES_URL } from "../../utils/constants";

export const recipeApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getRecipe: builder.query<Recipe, number>({
            query: (id) => ({
                url: `${RECIPES_URL}/${id}`
            })
        })
    })
})

export const { useGetRecipeQuery } = recipeApiSlice