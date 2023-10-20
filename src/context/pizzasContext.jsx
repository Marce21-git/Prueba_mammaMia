import { createContext,useEffect,useState } from "react";
import axios from 'axios';
export const PizzasContext = createContext()

const URL = "/pizzas.json"

const PizzasProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);
    const [pedidos, setPedidos] = useState([]);

    const getPizzas = async () => {
        try {
            const response = await axios.get(URL);
            if (!response.status) {
                throw new Error("Error. No hay datos");
            }
            const pizzasDB = response.data
            setPizzas(pizzasDB);
        } catch (error) {
            console.log("falla de api" + error)
        }
    }

    useEffect(() => {
        getPizzas();
    }, []);

    return (
        <PizzasContext.Provider
            value={{ pizzas, setPizzas, pedidos, setPedidos}}>
            {children}
        </PizzasContext.Provider>
    );

}
export default PizzasProvider;