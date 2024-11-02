import { createContext, useState } from "react";


export const ProductContext = createContext(null)

export const ProductProvider = ({ children }) => {

    const [isFullCart, setIsFullCart] = useState(0)
    const [plusPriсeChoose, setPlusPriсeChoose] = useState(false)


    return (
        <ProductContext.Provider value={{ isFullCart, setIsFullCart, plusPriсeChoose, setPlusPriсeChoose }}>
            {children}
        </ProductContext.Provider>
    )
}