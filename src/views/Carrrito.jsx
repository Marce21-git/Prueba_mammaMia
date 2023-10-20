import { Listsummary } from "../components/Listsummary"
import { PizzasContext } from "../context/pizzasContext";
import { useContext, useEffect } from "react";

export const Carrito = () => {

    const total = 0
    const { pedidos, setPedidos } = useContext(PizzasContext);

  

    return (
        <>
            <div className="card text-bg-light ">
                <div className="card-body">
                    <h5 className="card-title">Detalles del pedido:</h5>
                    <div className="card">

                        <ul className="list-group list-group-flush">
                            {
                                pedidos.map((item, i) => (
                                    <Listsummary key={i} item={item}></Listsummary>
                                ))
                            }
                        </ul>
                        <div className="card-body">
                            <h4 className="card-title">Total: $ {total}</h4>
                            <button className="btn btn-success" >Ir a Pagar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}