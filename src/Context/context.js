import { createContext, useState } from "react";

const context = createContext()

function ContextProvider ({children}) {
    const [ lesson, setLesson ]= useState([])
    return (
        <context.Provider value={lesson, setLesson}>
            {children}
        </context.Provider>
    )
}
export {
    context,
    ContextProvider
}