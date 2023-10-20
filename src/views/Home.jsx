import { Simplecard } from "../components/Simplecard"
import { PizzasContext } from "../context/pizzasContext";
import { useContext } from "react";

export const Home = () => {
    const { pizzas, setPizzas } = useContext(PizzasContext);

    return (
        <>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {
                    pizzas.map((pizza, i) => (
                        <div className="col" key={i}>
                            <Simplecard pizza={pizza}></Simplecard>
                        </div>
                    ))
                }
                
            </div>
        </>
        
    )
}