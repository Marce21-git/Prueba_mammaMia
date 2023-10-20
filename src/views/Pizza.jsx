import { useParams } from "react-router";
import { Detailcard } from "../components/Detailcard"
import { PizzasContext } from "../context/pizzasContext";
import { useContext ,useEffect, useState} from "react";


export const Pizza = () => {

    const { pizzas } = useContext(PizzasContext);
    const { id } = useParams()

    const [pizza, setPizza ]= useState({});
    
    const getPizza = async (  idPizza) => {
        console.log('id',id);
        console.log('pizzas',pizzas);
        const result = pizzas.find((p) =>  (p.id == idPizza ))
        console.log('result',result);
        setPizza(result)
    }

    useEffect(() => {
        getPizza(id)
     },[])
    

    return (
        <>
            <Detailcard pizza={pizza}></Detailcard>
        </>
    )
}
