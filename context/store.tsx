import { createContext, useState } from "react";

type FavoritesContextType = {
    ids: String[];
    addFavorite: (id: string) => void;
    removeFavorite: (id: string) => void;
}

const FavoritesContext = createContext<FavoritesContextType>({
    ids: [],
    addFavorite: (id: string) => {},
    removeFavorite: (id: string) => {}
})

const FavoritesContextProvider = (
    {
        children
    }: {
        children: React.ReactNode
    }
) => {
    const [ids, setIds] = useState<String[]>([])
    const addFavorite = (id: string) => {

    }
    const removeFavorite = (id: string) => {
        
    }
    return (
        <FavoritesContext.Provider
            value={{
                ids,
                addFavorite,
                removeFavorite
            }} 
        >
            { children }
        </FavoritesContext.Provider>
    )
}


