import React, { createContext, useContext, useReducer } from "react"

// This prepares the data layer
export const StateContext = createContext()


// The app is essentially wrapped inside of the StateProvider, which is the data layer. When a user logs in, they are "pushed" inside of the data layer. Once they're inside, we can access the user inside of any of the components
// A lot of this is pattern recognition/boiler plate code

// This app is a higher-level component that wraps the app inside of it (it being the StateProvider)
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)


// Whenever we pull something from the data layer, we use this useStateValue hook
export const useStateValue = () => useContext(StateContext)