import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";


export default function Search(){
    const [searchParams] = useSearchParams();

    const url = "http://localhost:3000/products?" + searchParams;

    const {data: items, loading, error} = useFetch(url);

    return (

        <div>
            <h2>Resultado da busca</h2>
            <ul className="products">
                {items && items.map((item) => (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                    <p>R$: {item.price}</p>

                    {/* Rota dinamica */}
                    <Link to={`/products/${item.id}`}>Detalhes</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}