// Import necessary hooks and functions from React.
import { useContext, useReducer, createContext, useEffect } from "react";
import storeReducer, { initialStore } from "../store"  // Import the reducer and the initial state.
import { getCharacters, getPlanet } from "../services/starwarsApi"  // Import the API function to fetch characters

// Create a context to hold the global state of the application
// We will call this global state the "store" to avoid confusion while using local states
const StoreContext = createContext()

// Define a provider component that encapsulates the store and warps it in a context provider to 
// broadcast the information throught all the app pages and components.
export function StoreProvider({ children }) {
    // Initialize reducer with the initial state.
    const [store, dispatch] = useReducer(storeReducer, initialStore())
    // Provide the store and dispatch method to all child components.

    const loadData = async () => {
        try {
            const people = await getCharacters()
            const planets = await getPlanet()

            dispatch({
                type: "SET_CHARACTERS",
                payload: people
            })
            dispatch({
                type: "SET_PLANETS",
                payload: planets
            })

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadData()
    }, [])


    return <StoreContext.Provider value={{ store, dispatch }}>
        {children}
    </StoreContext.Provider>
}

// Custom hook to access the global state and dispatch function.
export default function useGlobalReducer() {
    const { dispatch, store } = useContext(StoreContext)
    return { dispatch, store };
}