

type Meal = {
    id: number;
    name: string;
    description: string;
    num_of_servings: number;
    cook_time: number;
    cover_image: string;
};

type Recipe = {
    id: number;
    name: string;
    description: string;
    num_of_servings: number;
    cook_time: number;
    directions: string;
    is_publish: boolean;
    author: {
        id: number;
        username: string;
        created_at: string;
        updated_at: string;
        is_active: boolean;
        avatar_url: string;
    }
    created_at: string;
    updated_at: string;
    cover_image: string;
}

type Category = {
    id: number;
    name: string;
}

type CategoryWithMeals = {
    id: number;
    name: string;
    recipes: Meal[];
}