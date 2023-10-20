import { Link } from "react-router-dom"
import { PizzasContext } from "../context/pizzasContext";
import { useContext } from "react";

export const Simplecard = ({ pizza }) => {
    const { pedidos, setPedidos } = useContext(PizzasContext);

    const { img = '', name = 'Titulo', ingredients = ['text', 'text', 'text', 'text'], id = '0', price = '000' } = pizza;

    const agregarEnCarro = (p) => {
        setPedidos([...pedidos, p])
    }

    return (
        <div className="card p-0" >
            <img src={img} className="card-img-top ratio ratio-4x3 bg-secondary-subtle" ></img>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <hr></hr>
                <p className="card-text">Ingredientes:</p>
                <ul>
                    {
                        ingredients.map((ingrediente, i) => (
                            <li key={i}>{ingrediente}</li>
                        ))
                    }
                </ul>
                <hr></hr>
                <h4 className="card-title text-center pt-2">$ {price}</h4>
                <div className="d-flex justify-content-around">
                    <Link to={`/pizza/${id}`} className="btn btn-info text-white" >Ver más</Link>
                    <button onClick={() => agregarEnCarro(pizza)} className="btn btn-danger" >Añadir</button>
                </div>
            </div>
        </div>
    )
}